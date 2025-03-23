// api/scores.js

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'rrunfqoudjakydurwguc.supabase.co',
  database: 'postgres',
  password: 'DustofCheese21!',
  port: 5432,
});

module.exports = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM scores');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
