const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
class Comments extends Model {}
Comments.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  user_id: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "user",
      key: "id",
    },
  },
  comment_body: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  post_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "post",
      id: "id",
    },
  },
},
{
  sequelize, // not optional
});
module.exports = Comments
