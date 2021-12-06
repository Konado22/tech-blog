const app = require("express").Router();
const { Post, User, Comment } = require("../../models");

app.post("/", async (req, res) => {
  try {
  const postData = await Post.create({
    user_id: req.body.User,
    title: req.body.title,
  });
} catch (err) {
  console.log(err)
}});
app.post('/'), async (req,res) => {
  try {
    const userData = await User.create(
       req.body
    )
}catch (err) {
  console.log(err)
}}
app.post('/', async (req,res) => {
  try {
  const commentData = await Comment.create({
    user_id: req.body.user_id,
    comment_body:req.body.comment_body,
    post_id:req.body.post_id

  })}catch (err) {
    console.log(err)
}})
module.exports = app;