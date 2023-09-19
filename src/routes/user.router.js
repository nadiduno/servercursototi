const route = require('express').Router()
const userController = require('../controllers/user.controller')

route.get('/', userController.curso)

module.exports = route