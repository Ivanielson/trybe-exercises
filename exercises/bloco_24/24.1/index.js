require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const bookController = require('./controllers/bookController');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());

app.get('/', (_req, res) => {
  res.send('Funcionando!!');
});

app.use('/books', bookController);

app.listen(PORT, () => {
  console.log(`Ovindo na porta ${PORT}!`);
});