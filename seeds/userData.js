
const { User } = require('../models');

const userData = [
    {
    username: "Konado22",
    password: "password",
},
    {
    username: "bRAD",
    password: "skisnow",
}
];

const genUserdata = () => User.bulkCreate(userData);

module.exports = genUserdata;