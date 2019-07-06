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
  const sql = 'INSERT INTO users (username, password, firstname, lastname, email, score) VALUES ($1, $2, $3, $4, $5, $6);';
  client
    .query({
      text: sql,
      values: [username, password, firstname, lastname, email, 0],
    })
    .then(() => res.json({ username, isAuthenticated: true, score: 0 }))
    .catch(err => res.status(500).json({ Error: err }));
};

userController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  client.query(`SELECT username, score, password from users WHERE username = '${username}';`, (err, results) => {
    if (err) res.status(500).json({ Error: err });
    else if (results.rows.length > 0) {
      const dbUsername = results.rows[0].username;
      const dbPassword = results.rows[0].password;
      const { score } = results.rows[0];
      if (password === dbPassword) res.json({ username: dbUsername, isAuthenticated: true, score });
      else res.json({ username: dbUsername, isAuthenticated: false, score: 0 });
    } else res.json({ username, isAuthenticated: false, score: 0 });

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
  const { player, score } = req.body;
  const sql = `UPDATE users SET score = ${score} WHERE username = '${player}';`;
  client
    .query(sql)
    .then(() => res.set('Content-Type', 'application/json').send(JSON.stringify({ update: 'Success!' })))
    .catch(err => res.status(500).json({ Error: err }));
};

module.exports = userController;
