'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('votacions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idUser: {
        type: Sequelize.INTEGER,
        onDelete: 'set null',
        references: { 
          model: 'users',
          key: 'id'
        }
      },
      idComentario: {
        type: Sequelize.INTEGER,
        onDelete: 'set null',
        references: { 
          model: 'comentarios',
          key: 'id'
        }
      },
      voto: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('votacions');
  }
};