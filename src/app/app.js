const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const pg = require('pg');
const postgres = require('postgres');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



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
    const data = await pool.query(query);
    res.json(data.rows);
  } catch (error) {
    console.error('Error fetching data from PostgreSQL:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// NEW ENTRY
app.post('/api/newentry', async (req, res) => {
  try {
    const { first_name, last_name, position, id } = req.body;

    const query = 'INSERT INTO employees (first_name, last_name, position, id) VALUES ($1, $2, $3, $4)';
    const data = await pool.query(query, [first_name, last_name, position, id]);

    res.json({ success: true, message: 'New entry added successfully', data });
  } catch (error) {
    console.error('Error adding new entry:', error);
    res.status(500).json({ error: 'Error' });
  }
});


// DELETE request to delete an employee
app.delete('/api/delete/:id', async (req, res) => {
  try {
    const id = req.params.id;

    // database query
    const query = 'DELETE FROM employees WHERE id = $1';
    await pool.query(query, [id]);

    res.json({ success: true, message: 'Entry deleted successfully' });
  } catch (error) {
    console.error('Error deleting entry:', error);
    res.status(500).json({ error: 'Error' });
  }
});

// DELETE by ID



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