// api/scores.js

const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER, // Reference the secret for DB username
  host: process.env.DB_HOST, // Reference the secret for DB host
  database: process.env.DB_NAME, // Reference the secret for DB name
  password: process.env.DB_PASSWORD, // Reference the secret for DB password
  port: 5432, // Default port for PostgreSQL
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

