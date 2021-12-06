const Router = require("express").Router();
const { Post, User, Comment } = require("../../models");

Router.post("/", async (req, res) => {
  try {
  const postData = await Post.create({
    user_id: req.body.User,
    title: req.body.title,
  })
  res.render('')
} catch (err) {
  console.log(err)
}});
Router.post('/'), async (req,res) => {
  try {
    const userData = await User.create(
       req.body
    )
    res.render('')
}catch (err) {
  console.log(err)
}}
Router.post('/', async (req,res) => {
  try {
  const commentData = await Comment.create({
    user_id: req.body.user_id,
    comment_body:req.body.comment_body,
    post_id:req.body.post_id

  })
res.render('')}catch (err) {
    console.log(err)
}})
module.exports = Router;