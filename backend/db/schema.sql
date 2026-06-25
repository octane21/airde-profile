CREATE TABLE IF NOT EXISTS documents (
  id SERIAL PRIMARY KEY,
  pathname TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  category TEXT NOT NULL DEFAULT 'resources',
  url TEXT NOT NULL,
  download_url TEXT NOT NULL,
  content_type TEXT NOT NULL DEFAULT 'application/pdf',
  size BIGINT,
  uploaded_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS documents_category_idx ON documents (category);
