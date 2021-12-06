const Router = require('express').Router()
const homeRoutes = require('./homeRoutes')
const apiRoutes = require('./api')
Router.use('/homeRoutes', homeRoutes)
Router.use('/api', apiRoutes)
module.exports= Router;