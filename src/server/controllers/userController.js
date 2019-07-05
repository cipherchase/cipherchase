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
  client.query('INSERT INTO users (username, password, firstname, lastname, email) VALUES ($1, $2, $3, $4, $5);',
    [username, password, firstname, lastname, email],
    (err, results) => {
      if (err) res.status(500).json({ Error: err });
      else res.json({ success: 'User registered' });
      next();

    });
};

userController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  client.query(`SELECT username, password from users WHERE username = '${username}';`, (err, results) => {
    if (err) {
      res.status(500).json({ Error: err });
    } else if (results.rows.length > 0) {
      const dbUsername = results.rows[0].username;
      const dbPassword = results.rows[0].password;
      if (password === dbPassword) res.json({ username: dbUsername, login: true });
      else res.json({ username: dbUsername, login: false });

    } else res.json({ username, login: false });

  });
};

userController.getChallenge = (req, res, next) => {
  client.query('SELECT * FROM codechallenges', (err, results) => {
    res.set('Content-Type', 'application/json');
    const i = Math.floor(Math.random() * results.rows.length);
    res.send(JSON.stringify(results.rows[i].challenge));
    next();
  });
};

userController.updateScore = (req, res, next) => {
  const { username, score } = req.body;
  const sql = `UPDATE users SET score = ${score} WHERE username = '${username}';`;
  client
    .query(sql)
    .then(() => res.set('Content-Type', 'application/json').send(JSON.stringify({ Update: 'Success!' })))
    .catch(err => res.status(500).json({ Error: err }));
};

module.exports = userController;
