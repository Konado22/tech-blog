const Router = require('express').Router()
const postRoutes = require('./postRoutes')
const userRoutes = require('./userRoutes')
Router.use('/user', userRoutes)
Router.use('/post', postRoutes)
module.exports = Router