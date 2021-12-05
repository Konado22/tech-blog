const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
class Posts extends Model {}
Posts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    article_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    article_body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize, // not optional
  }
);
module.exports = Posts;
