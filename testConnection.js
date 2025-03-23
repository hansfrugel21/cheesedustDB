const { Pool } = require('pg');

// Retrieve the database credentials from GitHub secrets
const pool = new Pool({
  user: process.env.DB_USER, // GitHub secret for DB user
  host: process.env.DB_HOST, // GitHub secret for DB host
  database: process.env.DB_NAME, // GitHub secret for DB name
  password: process.env.DB_PASSWORD, // GitHub secret for DB password
  port: 5432, // Default PostgreSQL port
});

// Test the database connection
pool
  .connect()
  .then(() => {
    console.log('Database connection successful!');
    pool.end(); // Close the connection
  })
  .catch((err) => {
    console.error('Database connection error:', err.stack);
  });
