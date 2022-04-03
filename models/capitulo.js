'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class capitulo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      capitulo.hasOne(models.serie,{
        foreignKey: 'id',
        as: 'serie',
        onDelete: 'set null'
      })
    }
  }
  capitulo.init({
    idSerie: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    canon: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'capitulo',
  });
  return capitulo;
};