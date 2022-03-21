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
        type: Sequelize.id,
        onDelete: 'set null',
        references: { 
          model: 'users',
          key: 'id'
        }
      },
      idCapitulo: {
        type: Sequelize.id,
        onDelete: 'set null',
        references: { 
          model: 'capitulo',
          key: 'id'
        }
      },
      idVotacion: {
        type: Sequelize.id,
        onDelete: 'set null',
        references: { 
          model: 'votacion',
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