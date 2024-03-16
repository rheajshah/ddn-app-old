const express = require('express');
const mysql = require('mysql2');

const app = express();

// Create MySQL connection pool
const pool = mysql.createPool({
  host: 'ddn-db.cdq2kosuaao7.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'rhearuhi',
  database: 'ddn-db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// API endpoint to fetch teams data
app.get('/api/teams', (req, res) => {
  pool.query('SELECT * FROM teams', (error, results) => {
    if (error) {
      console.error('Error executing SQL query:', error);
      res.status(500).json({ error: 'An error occurred while fetching teams data' });
    } else {
      res.json(results);
    }
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
