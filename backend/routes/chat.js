import { Router } from "express";
import { callGroq } from "../src/chat.js";

const router = Router();

router.post("/", async (req, res) => {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Server belum dikonfigurasi: GROQ_API_KEY tidak ditemukan." });
  }

  const { messages } = req.body || {};
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "Field 'messages' wajib berupa array dan tidak boleh kosong." });
  }

  try {
    const reply = await callGroq(apiKey, messages);
    res.json({ reply });
  } catch (err) {
    res.status(500).json({ error: err.message || "Terjadi kesalahan pada server." });
  }
});

export default router;
