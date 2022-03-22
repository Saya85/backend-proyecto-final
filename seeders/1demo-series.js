'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "series",
      [
        {
          name: 'Dragon Ball',
          description: 'Serie(1986-1989). 5 temporadas. 153 episodios. Dragon Ball narra la historia de Goku, un excepcional niño que llegó a la Tierra en una cápsula durante una noche tormentosa. Sin saber nada de su pasado, un anciano lo cuidó como su nieto hasta los ocho años. Después de morir su abuelo, Goku accede a la Kame House, lugar donde un estrambótico anciano le convertirá en un campeón de artes marciales. Conocerá por el camino a Bulma, una muchacha obsesionada con algo denominado las Bolas de Dragón, y Krilin, su compañero de aventuras, entre otros...',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Dragon Ball Z',
          description: 'Serie(1989-2003). 16 temporadas. 291 episodios. La historia de Dragon Ball Z se divide en cuatro ramas centrales, repartidas en un total de 291 episodios. La primera abarca desde que Son Gohan, hijo de Goku, es raptado por el saiyan Radish. La etapa de Freezer lleva a Goku, Krillin, Vegeta y Bulma al planeta Namek. Después viene la Saga de los Androides, que da comienzo cuando tres androides (C-16, C-17, C-18) comienzan a aterrorizar la tierra, hasta la llegada de Célula. La última etapa de Z la cubre la Saga de Buu. Comienza cuando Babidí, un brujo bastante ambicioso, comienza un plan para resucitar al poderoso monstruo Buu, un ente capaz de poner la tierra a su favor en un par de movimientos.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Dragon Quest: The Adventure of Dai(2020)',
          description: 'Serie(2020-?). 1 temporada. 72 episodios acualmente. En la historia, después de haber derrotado al señor demonio Hadlar, todos los monstruos fueron liberados de su control maligno y se mudaron a la isla de Delmurin para vivir de forma pacífica. Dai es el único humano que vive ahí. Habiendo sido criado por el monstruo Brass, el sueño de Dai es convertirse en un héroe. Él ve la oportunidad de convertirse en uno cuando se entera que el señor demonio Hadlar ha resucitado y que el héroe anterior, Avan, ha venido para entrenar a Dai. Pero Hadlar anuncia que ahora sirve a un señor demonio mucho más poderoso que él, y está cazando a Avan. Para salvar a su estudiante, el héroe utiliza el hechizo del auto-sacrificio, pero no es capaz de derrotar a Hadlar. Acorralado y a punto de morir, la marca del héroe aparece en la frente de Dai y obtiene el poder para hacerle frente. ¿Podrá salvar al mundo ahora que se ha convertido en un héroe?',
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
