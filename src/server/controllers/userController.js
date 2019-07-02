const client = require('../models/cipherModel');

function getAllUsers(req, res, next) {
  client.query('SELECT * FROM users', (err, results) => {
    console.log(results.rows);
  });
}

module.exports = { getAllUsers };
