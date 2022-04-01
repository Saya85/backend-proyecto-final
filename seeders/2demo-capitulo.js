'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "capitulos",
      [
        {
          idSerie: 1,
          name: 'Capitulo 1 - Bulma y Son Goku',
          description: 'Son Goku, un niño huérfano pero fuerte que vive solo en la Montaña Paoz, y Bulma, una adolescente de 16 años, se conocen cuando ella lo atropella mientras conduce por la Montaña Paoz. Bulma está buscando, las Esferas del Dragón',
          canon: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idSerie: 1,
          name: 'Capitulo 2 - ¡Aaaaargh! ¡No están las bolas! ',
          description: 'Bulma saca una cápsula, la cual contiene una casa para pasar la noche. Mientras, Mai le cuenta al emperador Pilaf que a cien kilómetros al norte de su castillo, en el Valle Esqueleto...',
          canon: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idSerie: 1,
          name: 'Capitulo 3 - La Nube Kinto de Kame Sennin ',
          description: 'Goku y Bulma llevan a Umigame al mar y éste les dice que se esperen. Tiempo después llega con un anciano en su espalda quien le da un regalo a Goku y pide un trueque con Bulma.',
          canon: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idSerie: 1,
          name: 'Capitulo 4 - El demonio secuestrador, Oolong',
          description: 'El Radar del Dragón lleva a Goku y a Bulma a la Aldea Aru, y se enteran de que la aldea está siendo aterrorizada por un monstruo que puede cambiar su apariencia llamado Oolong.',
          canon: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idSerie: 1,
          name: 'Capitulo 5 - El malvado y poderoso Yamcha del desierto',
          description: 'Se dice que un bandido peligroso llamado Yamcha vive en este desierto, acompañado de su gato Puar, quien también puede transformarse.',
          canon: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idSerie: 2,
          name: 'Capitulo 1 - ¡Naruto Uzumaki ya está aquí!',
          description: 'Naruto es un joven aprendiz de ninja lleno de energía y bastante rebelde que no deja de hacer travesuras en su aldea, Konoha. No obstante, parece que guarda un gran secreto que ni él mismo conoce.',
          canon: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idSerie: 2,
          name: 'Capitulo 2 - ¡Soy Konohamaru!',
          description: 'Konohamaru es el nieto del Tercer Hokage y está dispuesto a derrotar a su propio abuelo para quedarse con el título de Hokage y que así lo reconozca la gente. Para ello, le pide a Naruto que sea su maestro',
          canon: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idSerie: 2,
          name: 'Capitulo 3 - ¿Mi archienemigo? Sasuke y Sakura',
          description: 'Ahora que por fin Naruto va a ser ninja, tendrá que formar equipo con dos compañeros: Sasuke, el chico al que más odia, y Sakura, la chica que le gusta, pese a que no es correspondido',
          canon: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idSerie: 2,
          name: 'Capitulo 4 - ¡La prueba de supervivencia!',
          description: 'Naruto ya forma parte de un equipo, el siete. El instructor encargado de ese equipo parece tener muy mala fama por no haber permitido que ninguno de sus alumos aprobase su prueba',
          canon: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idSerie: 2,
          name: 'Capitulo 5 - ¿Reprobamos? La conclusión de Kakashi',
          description: 'La prueba de Kakashi es realmente dura y tendrán que aprender a leer más allá de lo que pueden ver. ¿Serán capaces de quitarle algún cascabel a su maestro?',
          canon: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idSerie: 3,
          name: 'Capitulo 1 - Dai, el pequeño Héroe',
          description: 'Dai vive en una isla repleta de monstruos que viven sus vidas en paz tras la muerte del Señor Oscuro y haberse librado de su yugo. Dai sueña con ser el Héroe, pero su abuelo, el monstruo Blas, quiere entrenarlo como mago. ',
          canon: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idSerie: 3,
          name: 'Capitulo 2 - Dai y la princesa Leona',
          description: 'La princesa Leona de Papunica llega a la isla Derlín para realizar un ritual de la familia real, así que solicita la ayuda de Dai como autóctono para que sea su guía.',
          canon: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idSerie: 3,
          name: 'Capitulo 3 - El maestro del Héroe',
          description: 'Llega a la isla Derlín un hombre que dice ser un maestro especializado en entrenar Héroes. ¿Aceptará Dai entrenar a sus órdenes?',
          canon: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idSerie: 3,
          name: 'Capitulo 4 - El regreso de Hadler, el señor oscuro',
          description: 'Mientras Aván y Dai entrenan, alguien intenta penetrar el círculo mágico que protege la isla, pero no esperaban que quien apareciera ante ellos fuera...',
          canon: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idSerie: 3,
          name: 'Capitulo 5 - La insignia de Aván',
          description: 'Aván parece no tener suficiente fuerza para derrotar a Hadler, quien es incluso más poderoso que cuando era el Señor Oscuro. Por eso tendrá que tomar una dura decisión, tanto para él como para sus discípulos',
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
