const { User, Comment, Post } = require("../models");
const sequelize = require("sequelize");
const app = require("express").Router();
app.get("/login", async (req, res) => {
  try {
  res.render("login");
} catch (err) {
  console.log(err)
}});
app.get("/", async (req, res) => {
  try {
  const postData = await Post.findAll();
  const post = postData.get({plain:true})
  res.render("posts", Post);
} catch (err) {
  console.log(err)
}});
app.get("/:id", async (req, res) => {
  try {
  const postData = await Post.findByPk(req.params.id);
  const post = postData.get({plain:true})
  res.render("singlePost", Post);
} catch (err) {
  console.log(err)
}});
module.exports = app;
