'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "capitulos",
      [
        {
          idSerie: 1,
          name: 'Capitulo 1 - ',
          description: 'Serie(1986-1989). 5 temporadas. 153 episodios. Dragon Ball narra la historia de Goku, un excepcional niño',
          canon: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idSerie: 1,
          name: 'Capitulo 2 - ',
          description: 'Serie(1986-1989). 5 temporadas. 153 episodios. Dragon Ball narra la historia de Goku, un excepcional niño',
          canon: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idSerie: 1,
          name: 'Capitulo 3 - ',
          description: 'Serie(1986-1989). 5 temporadas. 153 episodios. Dragon Ball narra la historia de Goku, un excepcional niño',
          canon: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idSerie: 1,
          name: 'Capitulo 4 - ',
          description: 'Serie(1986-1989). 5 temporadas. 153 episodios. Dragon Ball narra la historia de Goku, un excepcional niño',
          canon: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idSerie: 1,
          name: 'Capitulo 5 - ',
          description: 'Serie(1986-1989). 5 temporadas. 153 episodios. Dragon Ball narra la historia de Goku, un excepcional niño',
          canon: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idSerie: 2,
          name: 'Capitulo 1 - ',
          description: 'Serie(1986-1989). 5 temporadas. 153 episodios. Dragon Ball narra la historia de Goku, un excepcional niño',
          canon: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idSerie: 2,
          name: 'Capitulo 2 - ',
          description: 'Serie(1986-1989). 5 temporadas. 153 episodios. Dragon Ball narra la historia de Goku, un excepcional niño',
          canon: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idSerie: 2,
          name: 'Capitulo 3 - ',
          description: 'Serie(1986-1989). 5 temporadas. 153 episodios. Dragon Ball narra la historia de Goku, un excepcional niño',
          canon: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idSerie: 2,
          name: 'Capitulo 4 - ',
          description: 'Serie(1986-1989). 5 temporadas. 153 episodios. Dragon Ball narra la historia de Goku, un excepcional niño',
          canon: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idSerie: 2,
          name: 'Capitulo 5 - ',
          description: 'Serie(1986-1989). 5 temporadas. 153 episodios. Dragon Ball narra la historia de Goku, un excepcional niño',
          canon: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
       
      ],
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("capitulos", null, {});
  }
};
