
const userData = require('./userData');
const postData = require('./postData');
const commentData = require('./commentData');
const sequelize = require('../config/connection');

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    await userData();
    await postData();
    await commentData();
    process.exit(0);
  }
  catch (err) {
    console.log(err)
  }
};
seedAll();

