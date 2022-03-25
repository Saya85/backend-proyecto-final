'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('comentarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      comentario: {
        type: Sequelize.STRING
      },
      idUser: {
        type: Sequelize.INTEGER,
        onDelete: 'set null',
        references: { 
          model: 'users',
          key: 'id'
        }
      },
      idCapitulo: {
        type: Sequelize.INTEGER,
        onDelete: 'set null',
        references: { 
          model: 'capitulos',
          key: 'id'
        }
      },
      idVotacion: {
        type: Sequelize.INTEGER,
        onDelete: 'set null',
        references: { 
          model: 'votacions',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('comentarios');
  }
};