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

module.exports = router;
