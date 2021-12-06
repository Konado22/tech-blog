const {User, Comment, Post} = require('../../models/')
const Router = require('express').Router();
app.get('/', async (req,res) => {
    try{
    const getUser = await User.findByPk(req.params.id);
    const thisUser = getUser.get({plain: true});
    res.render('homepage', User)
} catch (err){
    res.status(400).json(err)
}
})
app.post('/', async (req,res) => {
    const createUser= await User.create({
        user: req.body.user,
        password:req.body.password
    })
})