const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const userController = require('./controllers/userController');

const PORT = process.env.PORT || '3000';
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../../dist/')));
app.use((req, res, next) => {
  console.log(req.body);
  next();
});

app.post('/signup', userController.createUser);
app.post('/login', userController.verifyUser);

app.get('/getallUsers', userController.getAllUsers, (req, res) => {
  res.send('Getting all users');
});

app.get('/getChallenge', userController.getChallenge);

app.listen(PORT, (err) => {
  console.log(new Date(), err || `http://localhost:${PORT}/`);
});
