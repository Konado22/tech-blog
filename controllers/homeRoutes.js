const { User, Comment, Post } = require("../models");
const sequelize = require("sequelize");
const app = require("express").Router();
app.get('/login',
async (req,res) =>{
  res.render('login')
})
app.get("/", async (req, res) => {if(this.email)
  const postData = await Post.findAll({
    include: {
      model: "Post",
    },
  });
res.render('posts', {Post} )
});
app.get('/:id', async (req,res) => {
  const postData = await Post.findByPk(req.params.id);
  res.render('singlePost', {Post})
})
module.exports = app;