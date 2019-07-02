const client = require('../models/cipherModel');

function getAllUsers(req, res, next) {
  client.query('SELECT * FROM users', (err, results) => {
    res.json(results.rows);
  });
}

module.exports = { getAllUsers };
