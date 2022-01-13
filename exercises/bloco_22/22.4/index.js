const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/ping', (req,res) => {
  res.status(200).json({ message: 'pong' });
});

app.post('/hello', (req,res) => {
  const { name } = req.body;
  res.status(201).json({ message: `Hello, ${name}`});
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (age <= 17) res.status(401).json({ message: 'Unauthorized' });
  res.status(200).json({ message: `Hello, ${name}!` });
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.all('*', (req, res) => {
  res.status(404).json({ message: `Rota ${req.path} não existe!` });
});

app.listen(3001);