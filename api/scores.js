// api/scores.js

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'db.rrunfqoudjakydurwguc.supabase.co',
  database: 'postgres',
  password: process.env.DB_PASSWORD,
  port: 5432,
});

module.exports = async (req, res) => {
  try {
    // Log connection attempt
    console.log("Attempting to connect to database...");

    // Try making a test query to check the connection
    const result = await pool.query('SELECT NOW()');  // Simple query to test connection
    console.log("Database connected:", result.rows);

    // If the connection is successful, run the actual query
    const queryResult = await pool.query('SELECT * FROM scores LIMIT 10');
    res.status(200).json(queryResult.rows);

  } catch (err) {
    // Log detailed error message
    console.error("Error occurred:", err);
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

