const sequelize = require("../config/connection");
const { Users, Comments, Posts } = require("../models/");

const usersData = require("./user.json");
const commentsData = require("./comment.json");
const postsData = require("./post.json");

const seedUsers = async () => {
  await Users.bulkCreate(usersData);
};
const seedComments = async () => {
  await Comments.bulkCreate(commentsData);
};
const seedPosts = async () => {
  await Posts.bulkCreate(postsData);
};
const seedDatabase = () => {
  seedUsers();
  seedComments();
  seedPosts();
};
seedDatabase();
