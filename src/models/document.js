'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Document extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Document.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    estimateReadTime: DataTypes.INTEGER,
    file: DataTypes.STRING,
    fileUrl: DataTypes.TEXT,
    fileSize: DataTypes.STRING,
    fileType: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Document',
  });
  return Document;
};