import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: { rejectUnauthorized: false }
});

export async function query(text: string, params?: any[]) {
  const client = await pool.connect();
  try { return await client.query(text, params); }
  finally { client.release(); }
}

export async function ensureTables() {
  await query(`
    CREATE TABLE IF NOT EXISTS waitlist (
      id SERIAL PRIMARY KEY,
      email TEXT NOT NULL,
      name TEXT,
      source TEXT,
      at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
    CREATE TABLE IF NOT EXISTS reports (
      id SERIAL PRIMARY KEY,
      user_id TEXT NOT NULL,
      reason TEXT NOT NULL,
      at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);
}
