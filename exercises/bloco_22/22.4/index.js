const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/ping', (req,res) => {
  res.status(200).json({ message: 'pong' });
});

app.all('*', (req, res) => {
  res.status(404).json({ message: `Rota ${req.path} não existe!` });
});

app.listen(3001);