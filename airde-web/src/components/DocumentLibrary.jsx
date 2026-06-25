import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useAuth } from "../context/AuthContext";
import { apiUrl } from "../lib/api";

function formatSize(bytes) {
  if (!bytes) return "";
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(0)} KB`;
  return `${(kb / 1024).toFixed(1)} MB`;
}

function UploadModal({ category, token, onClose, onUploaded }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !title.trim()) {
      setError("Judul dan file PDF wajib diisi.");
      return;
    }
    setError(null);
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("category", category);

      const res = await fetch(apiUrl("/api/documents/upload"), {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Gagal mengunggah dokumen.");

      onUploaded();
      onClose();
    } catch (err) {
      setError(err.message || "Gagal mengunggah file.");
    } finally {
      setUploading(false);
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
        className="bg-surface-container border border-outline-variant/30 rounded-2xl p-6 w-full max-w-sm space-y-3 shadow-2xl mx-auto"
      >
        <h3 className="font-headline-md text-lg text-on-surface text-center">Unggah Dokumen Baru</h3>
        <input
          type="text"
          placeholder="Judul dokumen"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-3 py-2 text-sm text-on-surface focus:border-primary outline-none transition-colors"
        />
        <textarea
          placeholder="Deskripsi singkat (opsional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={2}
          className="w-full resize-none bg-surface-container-low border border-outline-variant/30 rounded-lg px-3 py-2 text-sm text-on-surface focus:border-primary outline-none transition-colors"
        />
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="w-full text-sm text-on-surface-variant"
        />
        {error && <p className="text-error text-xs">{error}</p>}
        <div className="flex gap-2 justify-end pt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Batal
          </button>
          <button
            type="submit"
            disabled={uploading}
            className="px-4 py-2 text-sm rounded-full bg-primary-container text-on-primary-container font-bold hover:brightness-110 disabled:opacity-50 transition-all"
          >
            {uploading ? "Mengunggah..." : "Unggah PDF"}
          </button>
        </div>
      </form>
    </div>,
    document.body
  );
}

export default function DocumentLibrary({ category, title, description, embedded = false, search = "", viewMode = "grid" }) {
  const { isAdmin, token } = useAuth();
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showUpload, setShowUpload] = useState(false);

  const fetchDocs = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(apiUrl(`/api/documents?category=${encodeURIComponent(category)}`));
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Gagal memuat dokumen.");
      setDocs(data.documents || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [category]);

  useEffect(() => {
    fetchDocs();
  }, [fetchDocs]);

  const query = search.trim().toLowerCase();
  const visibleDocs = query
    ? docs.filter(
        (doc) =>
          doc.title.toLowerCase().includes(query) || (doc.description || "").toLowerCase().includes(query)
      )
    : docs;

  const handleDelete = async (id) => {
    if (!window.confirm("Hapus dokumen ini?")) return;
    try {
      const res = await fetch(apiUrl(`/api/documents?id=${encodeURIComponent(id)}`), {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Gagal menghapus dokumen.");
      }
      fetchDocs();
    } catch (err) {
      window.alert(err.message);
    }
  };

  const content = (
    <>
      {isAdmin && (
        <div className={embedded ? "flex justify-end mb-6" : "flex justify-end mb-6"}>
          <button
            type="button"
            onClick={() => setShowUpload(true)}
            className="flex items-center gap-2 bg-primary-container text-on-primary-container px-5 py-2.5 rounded-full font-bold text-sm hover:brightness-110 transition-all"
          >
            <span className="material-symbols-outlined text-base">upload_file</span>
            Unggah Dokumen
          </button>
        </div>
      )}

      {loading && <p className="text-on-surface-variant text-sm">Memuat dokumen...</p>}
      {error && <p className="text-error text-sm">{error}</p>}
      {!loading && !error && docs.length === 0 && (
        <p className="text-on-surface-variant text-sm">Belum ada dokumen yang diunggah.</p>
      )}
      {!loading && !error && docs.length > 0 && visibleDocs.length === 0 && (
        <p className="text-on-surface-variant text-sm">Tidak ada dokumen yang cocok dengan pencarian.</p>
      )}

      <div
        className={
          viewMode === "list"
            ? "flex flex-col gap-4"
            : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        }
      >
        {visibleDocs.map((doc) =>
          viewMode === "list" ? (
            <div
              key={doc.id}
              className="bg-surface-container-lowest/60 border border-outline-variant/20 rounded-2xl p-4 flex items-center gap-4 group hover:border-primary/50 transition-all glass-card"
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">picture_as_pdf</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-headline-md text-headline-md text-on-surface">{doc.title}</h3>
                {doc.description && (
                  <p className="text-on-surface-variant font-body-md text-sm truncate">{doc.description}</p>
                )}
                <p className="text-on-surface-variant text-xs">
                  {[formatSize(doc.size), new Date(doc.uploadedAt).toLocaleDateString("id-ID")]
                    .filter(Boolean)
                    .join(" · ")}
                </p>
              </div>
              <div className="flex gap-2 shrink-0">
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-container text-on-primary-container px-4 py-2 rounded-full text-sm font-bold hover:brightness-110 transition-all"
                >
                  Lihat
                </a>
                <a
                  href={doc.downloadUrl || doc.url}
                  className="border border-outline text-on-surface px-4 py-2 rounded-full text-sm font-bold hover:bg-surface-variant transition-all"
                >
                  Unduh
                </a>
                {isAdmin && (
                  <button
                    type="button"
                    onClick={() => handleDelete(doc.id)}
                    aria-label="Hapus dokumen"
                    className="p-2 rounded-full text-error hover:bg-error/10 transition-colors"
                  >
                    <span className="material-symbols-outlined text-lg">delete</span>
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div
              key={doc.id}
              className="bg-surface-container-lowest/60 border border-outline-variant/20 rounded-2xl p-6 flex flex-col group hover:border-primary/50 transition-all glass-card"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-2xl">picture_as_pdf</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{doc.title}</h3>
              {doc.description && (
                <p className="text-on-surface-variant font-body-md text-sm mb-4 flex-1">{doc.description}</p>
              )}
              <p className="text-on-surface-variant text-xs mb-4">
                {[formatSize(doc.size), new Date(doc.uploadedAt).toLocaleDateString("id-ID")]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
              <div className="flex gap-2 mt-auto">
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-primary-container text-on-primary-container px-4 py-2 rounded-full text-sm font-bold hover:brightness-110 transition-all"
                >
                  Lihat
                </a>
                <a
                  href={doc.downloadUrl || doc.url}
                  className="flex-1 text-center border border-outline text-on-surface px-4 py-2 rounded-full text-sm font-bold hover:bg-surface-variant transition-all"
                >
                  Unduh
                </a>
                {isAdmin && (
                  <button
                    type="button"
                    onClick={() => handleDelete(doc.id)}
                    aria-label="Hapus dokumen"
                    className="p-2 rounded-full text-error hover:bg-error/10 transition-colors"
                  >
                    <span className="material-symbols-outlined text-lg">delete</span>
                  </button>
                )}
              </div>
            </div>
          )
        )}
      </div>

      {showUpload && (
        <UploadModal
          category={category}
          token={token}
          onClose={() => setShowUpload(false)}
          onUploaded={fetchDocs}
        />
      )}
    </>
  );

  if (embedded) return content;

  return (
    <section className="py-section-gap px-container-padding bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 max-w-2xl">
          <p className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4">Dokumen</p>
          <h2 className="font-headline-md text-display-lg text-on-surface mb-2">{title}</h2>
          {description && <p className="text-on-surface-variant">{description}</p>}
        </div>
        {content}
      </div>
    </section>
  );
}
