// api/scores.js

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'rrunfqoudjakydurwguc.supabase.co',
  database: 'postgres',
  password: 'DontKillNike21!',
  port: 5432,
});
module.exports = async (req, res) => {
  try {
    // Attempting to check the database connection
    const client = await pool.connect();
    console.log('Database connection successful!');

    // Perform your query
    const result = await pool.query('SELECT * FROM scores LIMIT 10');
    console.log('Query result:', result.rows);  // Log the query result
    
    client.release();  // Release the client back to the pool
    
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Error:', err);  // Log the full error to understand it
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM scores LIMIT 10');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

