const app = require("express").Router();
const { Post, User, Comment } = require("../../models");

app.post("/", async (req, res) => {
  const postData = await Post.create({
    user_id: req.body.User,
    title: req.body.title,
  });
});
app.post('/'), async (req,res) => {
    const userData = await User.create({
        username: req.body.user,
        password:req.body.password
    })
}
app.post('/', async (req,res) => {
  const commentData = await Comment.create({
    user_id: req.body.user_id,
    comment_body:req.body.comment_body,
    post_id:req.body.post_id

  })
})
module.exports = app;