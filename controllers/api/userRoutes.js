const { User, Comment, Post } = require("../../models/");
const app = require("express").Router();
app.get("/", async (req, res) => {
  try {
    const getUser = await User.findByPk(req.params.id);
    const thisUser = getUser.get({ plain: true });
    res.render("homepage", User);
  } catch (err) {
    res.status(400).json(err);
  }
});
app.post("/login", async (req, res) => {
  try {
    const getUser = await User.findOne({where: {username:req.body.username}});
    console.log(getUser)
    // if(getUser)
    const thisUser = getUser.get({ plain: true });
    // res.render("homepage", User);
  } catch (err) {
    res.status(400).json(err);
  }
});
module.exports = app;