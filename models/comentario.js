'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comentario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      comentario.hasOne(models.user,{
        foreignKey: 'id',
        as: "user",
        onDelete: 'set null'
      })
      comentario.hasOne(models.capitulo,{
        foreignKey: 'id',
        as: 'capitulo',
        onDelete: 'set null' 
      })
    } 
  }
  comentario.init({
    comentario: DataTypes.STRING,
    idCapitulo: DataTypes.INTEGER,
    idUser: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'comentario',
  });
  return comentario;
};