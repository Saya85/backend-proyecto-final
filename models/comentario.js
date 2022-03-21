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
      comentario.HasOne(models.user,{
        foreignKey: 'id',
        as: "user",
        onDelete: 'set null'
      })
      comentario.HasOne(models.capitulo,{
        foreignKey: 'id',
        as: 'capitulo',
        onDelete: 'set null' 
      })
      comentario.HasOne(models.votacion,{
        foreignKey: 'id',
        as: 'votacion',
        onDelete: 'set null' 
      })
    } 
  }
  comentario.init({
    comentario: DataTypes.STRING,
    idCapitulo: DataTypes.id,
    idVotacion: DataTypes.id,
    idUser: DataTypes.id
  }, {
    sequelize,
    modelName: 'comentario',
  });
  return comentario;
};