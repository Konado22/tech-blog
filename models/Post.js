const { Model, Datatypes } = require("sequelize");
const sequelize = require("../config/connection");
class Post extends Model {}
Post.init({
  id: {
    type: Datatypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  article_title: {
    type: Datatypes.STRING,
    allowNull: false,
  },
  article_body: {
    type: Datatypes.STRING,
    allowNull: false,
  },
  author_id: {
    type: Datatypes.INTEGER,
    references: {
      model: "user",
      key: "id",
    },
  },
});
