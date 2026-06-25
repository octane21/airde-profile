import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { apiUrl } from "../lib/api";

const AuthContext = createContext(null);
const TOKEN_STORAGE_KEY = "airde_admin_token";

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_STORAGE_KEY) || null);
  const [role, setRole] = useState("visitor");
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async (currentToken) => {
    if (!currentToken) {
      setRole("visitor");
      setLoading(false);
      return;
    }
    try {
      const res = await fetch(apiUrl("/api/auth/me"), {
        headers: { Authorization: `Bearer ${currentToken}` },
      });
      const data = await res.json();
      setRole(data.role || "visitor");
    } catch {
      setRole("visitor");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh(token);
  }, [token, refresh]);

  const login = async (username, password) => {
    const res = await fetch(apiUrl("/api/auth/login"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Login gagal.");
    localStorage.setItem(TOKEN_STORAGE_KEY, data.token);
    setToken(data.token);
    setRole(data.role);
    return data;
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    setToken(null);
    setRole("visitor");
  };

  return (
    <AuthContext.Provider value={{ role, isAdmin: role === "admin", loading, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
