import jwt from "jsonwebtoken";

const TOKEN_TTL = "7d";

export function signAdminToken() {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("JWT_SECRET belum dikonfigurasi di server.");
  return jwt.sign({ role: "admin" }, secret, { expiresIn: TOKEN_TTL });
}

export function verifyAdminToken(token) {
  const secret = process.env.JWT_SECRET;
  if (!secret || !token) return null;
  try {
    const payload = jwt.verify(token, secret);
    return payload?.role === "admin" ? payload : null;
  } catch {
    return null;
  }
}

export function getBearerToken(req) {
  const header = req.headers.authorization || "";
  const [scheme, token] = header.split(" ");
  if (scheme !== "Bearer" || !token) return null;
  return token;
}

export function isAdminRequest(req) {
  return Boolean(verifyAdminToken(getBearerToken(req)));
}
