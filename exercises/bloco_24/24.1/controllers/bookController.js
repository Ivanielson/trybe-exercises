const router = require('express').Router();
const { Book } = require('../models');

router.get('/', async (_req, res) => {
  try {
    const bookAll = await Book.findAll();

    return res.status(200).json(bookAll);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: 'Algo deu errado'
    });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const bookId = await Book.findByPk(id);

    return res.status(200).json(bookId);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: 'Algo deu errado'
    });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await Book.create({
      title, author, pageQuantity,
    });

    return res.status(201).json(newBook);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: 'Algo deu errado'
    });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const { id } = req.params;
    const [bookUpdate] = await Book.update(
      { title, author, pageQuantity },
      { where: { id } },
    );

    if (!bookUpdate) return res.status(404).json({
      message: 'Book não encontrado!',
    });

    return res.status(200).json({
      message: 'Book atualizado com sucesso!',
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: 'Algo deu errado',
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await Book.destroy({ where: { id } });

    if (!deleteBook) return res.status(404).json({
      message: 'Book não encontrado!',
    });

    return res.status(200).json({
      message: 'Book removido com sucesso!',
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: 'Algo deu errado',
    });
  }
});

module.exports = router;