const { User, Comment, Post } = require("../models");
const sequelize = require("sequelize");
const Router = require("express").Router();
const loginAuth = require('../utils/login')
Router.get("/login", async (req, res) => {
  try {
  res.render("login",);
} catch (err) {
  console.log(err)
}});
Router.get("/", loginAuth, async (req, res) => {
  try {
  const postData = await Post.findAll({
    include: {
      model: 'user'
    }
  });
  const post = postData.get({plain:true})
  res.render("posts", Post);
} catch (err) {
  console.log(err)
}});
Router.get("/:id", loginAuth, async (req, res) => {
  try {
  const postData = await Post.findByPk(req.params.id);
  const post = postData.get({plain:true})
  res.render("singlePost", Post);
} catch (err) {
  console.log(err)
}});
module.exports = Router;
