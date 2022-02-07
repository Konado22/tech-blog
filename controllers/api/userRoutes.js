const { User, Comment, Post } = require("../../models/");
const Router = require("express").Router();
const loginAuth = require("../../utils/login");
//create user
// update user
// delete user
//login
Router.post("/login", loginAuth, async (req, res) => {
  try {
    
    const userData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!userData) {
      console.log("please enter valid username");
      return;
    }
    const pass = await userData.checkPassword(req.body.password);
    if (!pass) {
      res.json({ message: "wrong password try again" });
      return
    }
    res.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.username = userData.username;
    });
  } catch (err) {
    console.log(err);
  }

});
Router.post("/logout", async (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(200).json("you are now logged out").end();
    });
  }
});
module.exports = Router;
