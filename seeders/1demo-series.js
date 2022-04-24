'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "series",
      [
        {
          id: 1,
          name: 'DragonBall',
          image: 'https://static.wikia.nocookie.net/doblaje/images/4/4a/DragonBall.jpeg/revision/latest?cb=20200915224214&path-prefix=es',
          description: 'Serie(1986-1989). 5 temporadas. 153 episodios. Dragon Ball narra la historia de Goku, un excepcional niño que llegó a la Tierra en una cápsula durante una noche tormentosa. Sin saber nada de su pasado, un anciano lo cuidó como su nieto hasta los ocho años. Después de morir su abuelo, Goku accede a la Kame House, lugar donde un estrambótico anciano le convertirá en un campeón de artes marciales. Conocerá por el camino a Bulma, una muchacha obsesionada con algo denominado las Bolas de Dragón, y Krilin, su compañero de aventuras, entre otros...',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: 'Naruto',
          image: 'https://www.formulatv.com/images/series/posters/100/135/dest_1.jpg',
          description: 'Serie (2002-2007). 220 episodios. La historia transcurre en un mundo dominado por aldeas ninja. En las cuales el papel del ninja se traduce como el poder de cada país. Cada uno de estos cuenta con su aldea oculta que es donde estudian, entrenan, graduan y forman cada ninja. Los ninjas utilizan todo tipo de artes marciales desde la lucha cuerpo a cuerpo a ilusiones o técnicas secretas como por ejemplo la manipulación de elementos',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: 'DragonQuest',
          image: 'https://pics.filmaffinity.com/dragon_quest_dai_no_daiboken-965407874-large.jpg',
          description: 'Serie(2020-?). 1 temporada. 72 episodios acualmente. El mundo estuvo una vez a merced de Hadler, el Señor Oscuro, pero recuperó la paz gracias a un espadachín conocido como "el héroe" y su grupo de compañeros. Han pasado los años y en la isla Derlín, una isla perdida en el oceáno del sur, acabaron viviendo todos los monstruos que en su día sirvieron al Señor Oscuro',
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
