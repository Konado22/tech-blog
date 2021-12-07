const Router = require("express").Router();
const { Post, User, Comment } = require("../../models");
const loginAuth = require("../../utils/login");

Router.post("/", loginAuth, async (req, res) => {
  try {
    const postData = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.render('homepage')
  } catch (err) {
    console.log(err);
  }
});
Router.post("/"),
  loginAuth,
  async (req, res) => {
    try {
      const userData = await User.create(req.body);
      res.redirect("/api/user/login");
    } catch (err) {
      console.log(err);
    }
  };
Router.post("/post/:id", loginAuth, async (req, res) => {
  try {
    const commentData = await Comment.create({
      user_id: req.body.user_id,
      comment_body: req.body.comment_body,
      post_id: req.body.post_id,
    });
    res.redirect("/post/:id");
  } catch (err) {
    console.log(err);
  }
});
module.exports = Router;
