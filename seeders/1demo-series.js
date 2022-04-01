'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "series",
      [
        {
          id: 1,
          name: 'Dragon Ball',
          description: 'Serie(1986-1989). 5 temporadas. 153 episodios. Dragon Ball narra la historia de Goku, un excepcional niño.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: 'Dragon Ball Z',
          description: 'Serie(1989-2003). 16 temporadas. 291 episodios. La historia de Dragon Ball Z se divide en cuatro ramas centrales',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: 'Dragon Quest: The Adventure of Dai(2020)',
          description: 'Serie(2020-?). 1 temporada. 72 episodios acualmente. En la historia, después de haber derrotado al señor demonio Hadlar',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("series", null, {});
  }
};
