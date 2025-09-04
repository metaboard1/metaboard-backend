'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publication extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Publication.init({
    title: DataTypes.STRING,
    subTitle: DataTypes.STRING,
    description: DataTypes.TEXT,
    pages: DataTypes.INTEGER,
    isbn: DataTypes.STRING,
    publisher: DataTypes.STRING,
    publicationDate: DataTypes.DATE,
    price: DataTypes.INTEGER,
    storeLink: DataTypes.STRING,
    coverImage: DataTypes.STRING,
    coverUrl: DataTypes.TEXT,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Publication',
  });
  return Publication;
};