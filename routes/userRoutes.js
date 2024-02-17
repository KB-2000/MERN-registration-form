const express = require('express')
const Router = express.Router()
const {getAllUsers,createAUser}=require('../controllers/userController')

Router.get('/',getAllUsers)
Router.post('/',createAUser)

module.exports = Router;