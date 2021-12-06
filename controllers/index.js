const app = require('express').Router()
const homeRoutes = require('./homeRoutes')
const apiRoutes = require('./api')
app.use('/', homeRoutes)
app.use('/api', apiRoutes)
module.exports= app;