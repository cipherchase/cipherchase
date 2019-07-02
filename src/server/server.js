const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || '3000';
const app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../dist/')));
app.use((req, res, next) => { console.log(req.body); next(); });


app.get('/', (req, res) => {
  res.send('Game server is running');
});


app.listen(PORT, (err) => {
  console.log(new Date(), err || `http://localhost:${PORT}/`);
});