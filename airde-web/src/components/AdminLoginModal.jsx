import { useState } from "react";
import { createPortal } from "react-dom";
import { useAuth } from "../context/AuthContext";

export default function AdminLoginModal({ onClose }) {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await login(username, password);
      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[100] bg-background/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
        className="bg-surface-container border border-outline-variant/30 rounded-2xl p-6 w-full max-w-sm space-y-4 shadow-2xl mx-auto"
      >
        <h3 className="font-headline-md text-lg text-on-surface text-center">Login</h3>
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-3 py-2 text-sm text-on-surface focus:border-primary outline-none transition-colors"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-3 py-2 text-sm text-on-surface focus:border-primary outline-none transition-colors"
          />
        </div>
        {error && <p className="text-error text-xs">{error}</p>}
        <div className="flex gap-2 justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Batal
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 text-sm rounded-lg bg-primary-container text-on-primary-container font-bold hover:brightness-110 disabled:opacity-50 transition-all"
          >
            {loading ? "Masuk..." : "Masuk"}
          </button>
        </div>
      </form>
    </div>,
    document.body
  );
}
