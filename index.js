const express = require('express');
const cors = require('cors');
const app = express();
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'books_nest',
  password: 'admin',
  port: 5432,
});

app.use(cors());
app.use(express.json());

app.get('/users', async (req, res) => {
    const result = await pool.query('SELECT * FROM users_table');
    console.log(result)
    res.json(result.rows);
  });


app.listen(3009, () => console.log('Server running on port 3009'));