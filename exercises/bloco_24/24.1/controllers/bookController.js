const router = require('express').Router();
const { Book } = require('../models');

router.get('/', async (_req, res) => {
  try {
    const bookAll = await Book.findAll();

    return res.status(200).json(bookAll);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const bookId = await Book.findByPk(id);

    return res.status(200).json(bookId);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.post('/', async (req,res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await Book.create({ title, author, pageQuantity });
    res.status(201).json(newBook);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

module.exports = router;
