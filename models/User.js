const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
class Users extends Model {}
Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, // not optional
    timestamps: false, // timestamps adds createdAt and updatedAt if true
    freezeTableName: true,
    underscored: true,
    modelName: "User", //same as Class name by default
  }
);
module.exports = Users;
