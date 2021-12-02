const {Model, Datatypes} = require("sequelize")
const sequelize = require("../config/connection")
class User extends Model{}
User.init(
    {
        id:{
            type:Datatypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },username: {
            type:Datatypes.STRING,
            allowNull:false
        },
        password: {
            type:Datatypes.STRING,
            allowNull:false,
        }
    }
)