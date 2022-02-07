const Router = require("express").Router();
const { Post, User, Comment } = require("../../models");
const loginAuth = require("../../utils/login");
//post create
//post update
//post delete
//find post by id

Router.post("/", loginAuth, async (req, res) => {
  try {
    const postData = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.render("homepage");
  } catch (err) {
    console.log(err);
  }
});
Router.post("/:id", loginAuth, async (req, res) => {
  try {
    const commentData = await Comment.create({
      ...req.body,
    });
    res.redirect("/:id");
  } catch (err) {
    console.log(err);
  }
});
// Router.put(update comment by id) 
//Router.put(update post by id)
module.exports = Router;
