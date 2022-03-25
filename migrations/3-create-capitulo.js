'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('capitulos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idSerie: {
        type: Sequelize.INTEGER,
        onDelete: 'set null',
        references: { 
          model: 'series',
          key: 'id'
        }
    },
      name: {
        type: Sequelize.STRING
      },
      description: {
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
    await queryInterface.dropTable('capitulos');
  }
};