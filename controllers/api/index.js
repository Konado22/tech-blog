const app = require('express').Router()
const postRoutes = require('./postRoutes')
const userRoutes = require('./userRoutes')
app.use('/user', userRoutes)
app.use('/post', postRoutes)
module.exports = app