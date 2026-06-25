import "dotenv/config";
import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { getPool } from "../src/db.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sql = readFileSync(path.join(__dirname, "schema.sql"), "utf-8");

async function main() {
  const pool = getPool();
  await pool.query(sql);
  console.log("Migrasi database selesai: tabel 'documents' siap digunakan.");
  await pool.end();
}

main().catch((err) => {
  console.error("Migrasi gagal:", err.message);
  process.exit(1);
});
