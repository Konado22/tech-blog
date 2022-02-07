const { User, Comment, Post } = require("../models");
const Router = require("express").Router();
const loginAuth = require("../utils/login");
Router.get("/", async (req, res) => {
  console.log("homeroute")
  try {
    const postData = await Post.findAll({
      include: [{
        model: User,
        attributes: ["username"],
      }],
    })
    

    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
  }
});
Router.get("/post/:id", loginAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          attributes: ["comment"],
        },
      ],
    });
    const post = postData.get({ plain: true });
    res.render("singlePost", Post);
  } catch (err) {
    console.log(err);
  }
});
Router.get("/api/user/login", async (req, res) => {
  if (req.session.logged_in) {
    res.render("homepage");
  } else {
    res.render("login");
  }
});
module.exports = Router;
