const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');

const PORT = process.env.PORT || '3000';
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../dist/')));
app.use((req, res, next) => { console.log(req.body); next(); });


app.get('/', (req, res) => {
  res.send('Game server is running');
});

app.post('/signup', userController.createUser);
app.post('/login', userController.verifyUser);

app.get('/getallUsers', userController.getAllUsers, (req, res) => {
  res.send('Getting all users');
});


app.listen(PORT, (err) => {
  console.log(new Date(), err || `http://localhost:${PORT}/`);
});
