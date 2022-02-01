module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Books',
    [
      {
        title: 'Harry Potter e a Pedra Filosofal',
        author: 'J. K. Rowling',
        page_quantity: 309,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Harry Potter e a Câmara Secreta',
        author: 'J. K. Rowling',
        page_quantity: 251,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Harry Potter e o Prisioneiro de Azkaban',
        author: 'J. K. Rowling',
        page_quantity: 345,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Harry Potter e o Cálice de Fogo',
        author: 'J. K. Rowling',
        page_quantity: 590,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Books', null, {}),
};