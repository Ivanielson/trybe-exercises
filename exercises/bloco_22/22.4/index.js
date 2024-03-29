const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const arraySimpsons = [];

const readSimpsons = (arquivo) => {
  try {
    const simpsons = fs.readFileSync(arquivo, 'utf-8');
    arraySimpsons.push(JSON.parse(simpsons));
    return 200;
  } catch (err) {
    return 500;
  }
}

app.get('/ping', (_req,res) => {
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

app.get('/simpsons', (_req, res) => {
  const status = readSimpsons('simpsons.json');
  if (status === 500) res.status(status).json({ message: 'Internal Server Error' });
  res.status(status).json(arraySimpsons[0]);
});

app.get('/simpsons/:id', (req,res) => {
  const { id } = req.params;
  readSimpsons('simpsons.json');

  const simpsonID = arraySimpsons[0].find((s) => s.id === id);
  if (!simpsonID) res.status(404).json({ message: 'simpson not found' });
  res.status(200).json(simpsonID);
});

app.all('*', (req, res) => {
  res.status(404).json({ message: `Rota ${req.path} não existe!` });
});

app.listen(3001);