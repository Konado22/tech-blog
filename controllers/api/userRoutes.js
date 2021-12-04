const {User} = require('../../models/User')
const sequelize = require('sequelize')
const { Router } = require('express')
const app = require('express').Router();
app.get('/', async (req,res) => {
    try{
    const getUser = await User.findByPk(req.params.id);
    const thisUser = getUser.get({plain: true});
    res.render('homepage', User)
} catch (err){
    res.status(400).json(err)
}
})