const express = require('express')
const users = require('./controllers/users')
const login = require('./controllers/login')
const loginCheck = require('./filters/loginCheck')

const routes = express();

routes.post('/signup', users.signupUser)

routes.post('/login', login.login)

routes.use(loginCheck)

routes.put('/update_user', users.updateUser)
routes.delete('/delete_user', users.deleteUser)

module.exports = routes;