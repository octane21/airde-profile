import { Router } from "express";
import bcrypt from "bcryptjs";
import { signAdminToken, isAdminRequest } from "../src/auth.js";

const router = Router();

router.post("/login", (req, res) => {
  const adminUsername = process.env.ADMIN_USERNAME;
  const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;

  if (!adminUsername || !adminPasswordHash) {
    return res.status(500).json({ error: "Server belum dikonfigurasi untuk admin login." });
  }

  const { username, password } = req.body || {};
  if (!username || !password) {
    return res.status(400).json({ error: "Username dan password wajib diisi." });
  }

  const validUsername = username === adminUsername;
  const validPassword = validUsername && bcrypt.compareSync(password, adminPasswordHash);

  if (!validUsername || !validPassword) {
    return res.status(401).json({ error: "Username atau password salah." });
  }

  const token = signAdminToken();
  return res.json({ role: "admin", token });
});

router.get("/me", (req, res) => {
  res.json({ role: isAdminRequest(req) ? "admin" : "visitor" });
});

export default router;
