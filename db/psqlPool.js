const { Pool } = require('pg');
require('dotenv').config();

let pool; 
if (process.env.NODE_ENV === 'production') {
  pool = new Pool({
    user: process.env.PROD_DB_USR,
    host: process.env.PROD_HOST,
    database: process.env.PROD_DB,
    password: process.env.PROD_DB_PW,
    ssl: true,
    port: 5432,
  });
} else {
  console.log(process.env.DEV_DB_PW);
  pool = new Pool({
    host: 'localhost',
    database: process.env.DEV_DB,
    user: process.env.DEV_DB_USR,
    password: process.env.DEV_DB_PW,
  });
}

pool.connect((err, client, done) => {
  if (err) return console.error('Unsuccessfully connected to db');
  console.log('Successfully connected to db!');
});

module.exports = pool;
