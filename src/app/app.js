const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const pg = require('pg');
const postgres = require('postgres');

const app = express();
const port = 3000;

app.use(cors());


// PostgreSQL connection
const pool = new pg.Pool({
  user: 'skillsculpt',
  host: 'dpg-co03sdqcn0vc73ca94f0-a.oregon-postgres.render.com',
  database: 'skillsculpt',
  password: 'JSWzywQudFt3x6ReIYOYMAY9Whzrxtyu',
  port: 5432,

  ssl: {
    rejectUnauthorized: false
  }
});

// ENDPOINTS

// GET ALL
app.get('/api/data', async (req, res) => {
  try {
    const query = 'SELECT * FROM employees';
    const data = await pool.query(query); // Executing the query using the connection pool
    res.json(data.rows); // Sending the retrieved rows as JSON
  } catch (error) {
    console.error('Error fetching data from PostgreSQL:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// NEW ENTRY
app.post('/api/newentry', async (req, res) => {
  const query = 'INSERT INTO employees (name, age) VALUES (john, 21)';
  const data = await pool.query(query, ['John Doe', 30]);
  res.json(data);
});




// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'sjszuch',
//   password: 'password',
//   database: 'senior'
// });

// db.connect(err => {
//   if (err) {
//     console.error('Database connection failed: ' + err.stack);
//     return;
//   }
//   console.log('Connected to database');
// });

// // Define API endpoint for fetching data
// app.get('/api/data', (req, res) => {
//   const query = 'SELECT * FROM emp';
//   db.query(query, (err, result) => {
//     if (err) throw err;
//     res.json(result);
//   });
// });








app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});