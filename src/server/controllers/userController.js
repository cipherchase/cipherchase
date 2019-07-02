const client = require('../models/cipherModel');

const userController = {};

userController.getAllUsers = (req, res, next) => {
  client.query('SELECT * FROM users', (err, results) => {
    res.json(results.rows);
  });
};

userController.createUser = (req, res, next) => {
  const {
    username, password, firstname, lastname, email,
  } = req.body;
  console.log(`I signed up ${username}, ${password}, ${firstname}, ${lastname}, ${email}`);
  client.query('INSERT INTO users (username, password, firstname, lastname, email) VALUES ($1, $2, $3, $4, $5);',
    [username, password, firstname, lastname, email],
    (err, results) => {

    });
};

module.exports = userController;
