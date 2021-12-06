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
module.exports = app;