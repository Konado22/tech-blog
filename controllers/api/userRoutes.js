const { User, Comment, Post } = require("../../models/");
const Router = require("express").Router();
const loginAuth = require("../../utils/login");
Router.post("/login", loginAuth, (req, res) => {
  try {
    const pass = await userData.checkPassword(req.body.password);
    const userData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!userData) {
      console.log("please enter valid username");
      return;
    }
    if (!pass) {
      res.json({ message: "wrong password try again" });
    }
    res.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
    });
  } catch (err) {
    console.log(err);
  }
});
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(200).json("you are now logged out").end();
    });
  }
});
module.exports = Router;
