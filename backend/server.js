import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import authRouter from "./routes/auth.js";
import documentsRouter from "./routes/documents.js";
import chatRouter from "./routes/chat.js";
import { UPLOAD_DIR } from "./src/storage.js";

const app = express();
const PORT = process.env.PORT || 4000;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

app.use(cors({ origin: FRONTEND_URL }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ ok: true, service: "airde-backend" });
});

app.use("/api/auth", authRouter);
app.use("/api/documents", documentsRouter);
app.use("/api/chat", chatRouter);

// Serves uploaded PDF files stored on disk (see src/storage.js).
app.get("/files/*", (req, res) => {
  const relative = req.params[0];
  const filePath = path.join(UPLOAD_DIR, relative);

  if (!filePath.startsWith(UPLOAD_DIR)) {
    return res.status(400).json({ error: "Path tidak valid." });
  }

  if (req.query.download !== undefined) {
    return res.download(filePath, (err) => {
      if (err) res.status(404).json({ error: "File tidak ditemukan." });
    });
  }

  res.sendFile(filePath, (err) => {
    if (err) res.status(404).json({ error: "File tidak ditemukan." });
  });
});

app.use((req, res) => {
  res.status(404).json({ error: "Route tidak ditemukan." });
});

app.listen(PORT, () => {
  console.log(`AIRDE backend listening on http://localhost:${PORT}`);
});
