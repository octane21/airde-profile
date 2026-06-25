import { mkdir, unlink, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const UPLOAD_DIR = path.join(__dirname, "..", "uploads");

function publicBaseUrl() {
  return process.env.PUBLIC_BASE_URL || `http://localhost:${process.env.PORT || 4000}`;
}

function sanitizeSegment(segment) {
  return segment.replace(/[^a-zA-Z0-9._-]/g, "_");
}

/**
 * Stores a file on local disk (under UPLOAD_DIR), served back via GET /files/*.
 * Returns { url, downloadUrl, pathname }.
 */
export async function putFile(pathname, buffer) {
  const safeParts = pathname.split("/").map(sanitizeSegment);
  const ext = path.extname(safeParts[safeParts.length - 1]);
  const base = safeParts[safeParts.length - 1].slice(0, -ext.length || undefined);
  const randomSuffix = Math.random().toString(36).slice(2, 10);
  safeParts[safeParts.length - 1] = `${base}-${randomSuffix}${ext}`;
  const finalPathname = safeParts.join("/");

  const diskPath = path.join(UPLOAD_DIR, finalPathname);
  await mkdir(path.dirname(diskPath), { recursive: true });
  await writeFile(diskPath, buffer);

  const url = `${publicBaseUrl()}/files/${finalPathname}`;
  return { url, downloadUrl: `${url}?download=1`, pathname: finalPathname };
}

/** Deletes a previously stored file, given the URL returned by putFile(). */
export async function deleteFile(url) {
  try {
    const { pathname: urlPath } = new URL(url);
    const relative = decodeURIComponent(urlPath.replace(/^\/files\//, ""));
    await unlink(path.join(UPLOAD_DIR, relative));
  } catch {
    // ignore if file already missing or url not parseable
  }
}
