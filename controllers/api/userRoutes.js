const { User, Comment, Post } = require("../../models/");
const Router = require("express").Router();
Router.post("/login", async (req, res) => {
  try {
    const getUser = await User.findOne({
      where: { username: req.body.username },
    });
    const getPass = await getUser.password(req.body.password);
    console.log(getUser);
    if (!getUser) {
      console.log("please enter a valid username");
    } else if (!getPass) {
      console.log("please enter a valid password");
    } else {
      req.session.save(() => {
        req.session.userId = newUser.id;
        req.session.userName = newUser.username;
        req.session.loggedIn = true;
        res.status(200).json(userNameData);
        res.render("homepage", User);
      });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

Router.get("/:id", async (req, res) => {
  try {
    const getUser = await User.findByPk(req.params.id);
    const thisUser = getUser.get({ plain: true });
    res.render("homepage", User);
  } catch (err) {
    res.status(400).json(err);
  }
  req.session.save(() => {
    req.session.userId = newUser.id;
    req.session.userName = newUser.username;
    req.session.loggedIn = true;
    res.status(200).json(userNameData);
    res.render("homepage", User);
  });
});
module.exports = Router;
