const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// PostgreSQL setup
const pool = new Pool({
  user: 'postgres',
  host: 'https://rrunfqoudjakydurwguc.supabase.co',
  database: 'postgress',
  password: 'DustofCheese21!',
  port: 5432,
});

// Example API endpoint to get scores
app.get('/scores', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM scores');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

