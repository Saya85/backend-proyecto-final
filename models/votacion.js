'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class votacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      votacion.hasOne(models.user, {
        foreignKey: 'id',
        as: 'user',
        onDelete: 'set null'
      })
    }
  }
  votacion.init({
    idUser: DataTypes.INTEGER,
    voto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'votacion',
  });
  return votacion;
};