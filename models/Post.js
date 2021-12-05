
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model { }

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        post_body: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
        
       
    }
);

module.exports = Post;
