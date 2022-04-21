const Router = require('express').Router()
const Admin = require('../modules/controllers/adminController')
Router.post('/login', Admin.login)
module.exports = Router;
