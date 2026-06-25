import { Pool } from "pg";

let pool;

export function getPool() {
  if (!pool) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error("DATABASE_URL belum dikonfigurasi di server.");
    }
    pool = new Pool({
      connectionString,
      ssl: process.env.PGSSL === "false" ? false : { rejectUnauthorized: false },
    });
  }
  return pool;
}
