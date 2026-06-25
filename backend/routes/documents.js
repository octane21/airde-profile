import { Router } from "express";
import multer from "multer";
import { putFile, deleteFile } from "../src/storage.js";
import { isAdminRequest } from "../src/auth.js";
import { listDocuments, insertDocument, getDocumentById, deleteDocumentById } from "../src/documents.js";

const router = Router();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 25 * 1024 * 1024 }, // 25MB
});

router.get("/", async (req, res) => {
  try {
    const docs = await listDocuments(req.query.category);
    res.json({ documents: docs });
  } catch (err) {
    res.status(500).json({ error: err.message || "Gagal memuat dokumen." });
  }
});

router.post("/upload", upload.single("file"), async (req, res) => {
  if (!isAdminRequest(req)) {
    return res.status(401).json({ error: "Hanya admin yang dapat mengunggah dokumen." });
  }

  const file = req.file;
  const { title, description, category } = req.body || {};

  if (!file) return res.status(400).json({ error: "File PDF wajib diunggah." });
  if (file.mimetype !== "application/pdf") {
    return res.status(400).json({ error: "Hanya file PDF yang diperbolehkan." });
  }
  if (!title || !title.trim()) {
    return res.status(400).json({ error: "Judul dokumen wajib diisi." });
  }

  try {
    const stored = await putFile(`documents/${category || "resources"}/${file.originalname}`, file.buffer);

    const doc = await insertDocument({
      pathname: stored.pathname,
      title: title.trim(),
      description: (description || "").trim(),
      category: category || "resources",
      url: stored.url,
      downloadUrl: stored.downloadUrl,
      contentType: "application/pdf",
      size: file.size,
    });

    res.status(201).json({ document: doc });
  } catch (err) {
    res.status(500).json({ error: err.message || "Gagal mengunggah dokumen." });
  }
});

router.delete("/", async (req, res) => {
  if (!isAdminRequest(req)) {
    return res.status(401).json({ error: "Hanya admin yang dapat menghapus dokumen." });
  }

  const { id } = req.query;
  if (!id) return res.status(400).json({ error: "Parameter 'id' wajib diisi." });

  try {
    const doc = await getDocumentById(id);
    if (!doc) return res.status(404).json({ error: "Dokumen tidak ditemukan." });

    await deleteFile(doc.url);
    await deleteDocumentById(id);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message || "Gagal menghapus dokumen." });
  }
});

export default router;
