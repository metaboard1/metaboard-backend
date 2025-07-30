'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Article.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    author: DataTypes.STRING,
    authorSocials: DataTypes.JSON,
    contentHtml: DataTypes.TEXT,
    contentCss: DataTypes.TEXT,
    estimateReadTime: DataTypes.INTEGER,
    coverImage: DataTypes.STRING,
    isFeatured: DataTypes.BOOLEAN,
    isActive: DataTypes.BOOLEAN,
    publishedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};