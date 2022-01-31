require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());

app.get('/', (_req, res) => {
  res.send('Funcionando!!');
});

app.listen(PORT, () => {
  console.log(`Ovindo na porta ${PORT}!`);
});