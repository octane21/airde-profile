import { getPool } from "./db.js";

const SELECT_COLUMNS = `
  id, pathname, title, description, category, url,
  download_url AS "downloadUrl", content_type AS "contentType", size,
  uploaded_at AS "uploadedAt"
`;

export async function listDocuments(category) {
  const pool = getPool();
  const { rows } = category
    ? await pool.query(
        `SELECT ${SELECT_COLUMNS} FROM documents WHERE category = $1 ORDER BY uploaded_at DESC`,
        [category]
      )
    : await pool.query(`SELECT ${SELECT_COLUMNS} FROM documents ORDER BY uploaded_at DESC`);
  return rows;
}

export async function insertDocument(doc) {
  const pool = getPool();
  const { rows } = await pool.query(
    `INSERT INTO documents (pathname, title, description, category, url, download_url, content_type, size)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
     RETURNING ${SELECT_COLUMNS}`,
    [doc.pathname, doc.title, doc.description, doc.category, doc.url, doc.downloadUrl, doc.contentType, doc.size]
  );
  return rows[0];
}

export async function getDocumentById(id) {
  const pool = getPool();
  const { rows } = await pool.query(`SELECT ${SELECT_COLUMNS} FROM documents WHERE id = $1`, [id]);
  return rows[0] || null;
}

export async function deleteDocumentById(id) {
  const pool = getPool();
  const { rows } = await pool.query(`DELETE FROM documents WHERE id = $1 RETURNING ${SELECT_COLUMNS}`, [id]);
  return rows[0] || null;
}
