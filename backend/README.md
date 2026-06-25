# AIRDE Backend

Backend standalone (Express) untuk fitur dokumen PDF di website AIRDE (`airde-web`). Menyediakan:

- **Auth 2 role**: `visitor` (default, hanya baca) dan `admin` (login dengan username/password, bisa upload & hapus dokumen).
- **Penyimpanan file PDF**: disk lokal (folder `backend/uploads/`), disajikan lewat `GET /files/...`. Tidak butuh layanan cloud storage apa pun.
- **Metadata dokumen**: **PostgreSQL** (tabel `documents`) — judul, deskripsi, kategori, dan URL file.
- **Chatbot AIRDE Assistant** (`/api/chat`, via Groq): system prompt-nya otomatis menyertakan daftar dokumen PDF yang sedang ada di database, jadi chatbot selalu menjawab berdasarkan dokumen yang benar-benar tersedia saat ini.

Tidak ada bagian dari backend ini yang terikat ke Vercel — bisa dijalankan di mana saja (lokal, Railway, Render, dll).

## Setup

```bash
cd backend
npm install
cp .env.example .env
```

Isi `.env`:

| Variabel | Cara mendapatkan |
|---|---|
| `JWT_SECRET` | `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"` |
| `ADMIN_USERNAME` | bebas, misal `admin` |
| `ADMIN_PASSWORD_HASH` | `node -e "console.log(require('bcryptjs').hashSync('password-anda', 10))"` |
| `DATABASE_URL` | Connection string Postgres. Lokal: database Postgres di komputer Anda. Produksi: [Render](https://render.com) (PostgreSQL service), format `postgresql://user:password@host:5432/dbname?sslmode=require` |
| `PUBLIC_BASE_URL` | Kosongkan saat lokal (default `http://localhost:4000`). Saat deploy ke Railway, isi dengan URL publik backend, misal `https://airde-backend.up.railway.app` |
| `FRONTEND_URL` | origin frontend yang diizinkan CORS, contoh `http://localhost:5173` (dev) atau domain produksi di Vercel |
| `GROQ_API_KEY` | Dari [console.groq.com/keys](https://console.groq.com/keys) — untuk chatbot AIRDE Assistant |

### Migrasi database

Setelah `DATABASE_URL` terisi, buat tabel `documents`:

```bash
npm run migrate
```

Jalankan ini sekali setiap kali ganti database (misal pertama kali setup, atau pindah ke database produksi).

## Jalankan

```bash
npm run dev   # auto-restart saat file berubah
# atau
npm start
```

Server jalan di `http://localhost:4000` (atau `PORT` di `.env`).

## Endpoint

| Method | Path | Akses | Keterangan |
|---|---|---|---|
| POST | `/api/auth/login` | publik | `{ username, password }` → `{ role, token }` |
| GET | `/api/auth/me` | butuh `Authorization: Bearer <token>` | cek role saat ini |
| GET | `/api/documents?category=portfolio\|resources` | publik | daftar dokumen |
| POST | `/api/documents/upload` | admin only | `multipart/form-data`: `file`, `title`, `description`, `category` |
| DELETE | `/api/documents?id=...` | admin only | hapus dokumen + filenya |
| GET | `/files/*` | publik | menyajikan file PDF (tambahkan `?download=1` untuk unduh) |
| POST | `/api/chat` | publik | `{ messages: [{role, content}, ...] }` → `{ reply }`. Chatbot AIRDE Assistant (Groq), konteksnya otomatis termasuk daftar dokumen PDF terkini |

## Frontend

Di `airde-web/.env`, set `VITE_API_URL` ke alamat backend ini (`http://localhost:4000` saat dev, atau URL Railway setelah backend di-deploy).

## Deploy (Railway + Render + Vercel)

Rencana deploy yang disarankan:

1. **Database** → [Render](https://render.com) → New → PostgreSQL → copy "External Database URL" → jadi `DATABASE_URL`.
2. **Backend** → [Railway](https://railway.app) → New Project → Deploy from repo (folder `backend`) → set semua env var di atas (termasuk `DATABASE_URL` dari Render dan `FRONTEND_URL` ke domain Vercel frontend) → setelah deploy, set `PUBLIC_BASE_URL` ke URL Railway yang diberikan, lalu jalankan `npm run migrate` sekali (lewat Railway shell/one-off command).
3. **Frontend** → [Vercel](https://vercel.com) → import folder `airde-web` → set `VITE_API_URL` ke URL backend Railway.

### ⚠️ Catatan penyimpanan file di Railway

Folder `uploads/` disimpan di disk container Railway. Secara default disk ini **bisa hilang saat redeploy/restart** kecuali Anda menambahkan [Railway Volume](https://docs.railway.app/reference/volumes) dan mount ke path `uploads/` di service backend. Tanpa volume, file PDF yang sudah diupload bisa hilang setelah redeploy — pasang volume sebelum upload dokumen penting di produksi.
