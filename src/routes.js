const express = require('express')
const users = require('./controllers/users')
const login = require('./controllers/login')
// const loginCheck = require('./filters/loginCheck')
// const images = require('./controllers/images')

const routes = express();

routes.post('/signup', users.signupUser)

routes.post('/login', login)

// routes.post('/upload', images.uploadImage)

// routes.use(loginCheck)

// routes.put('/update_user', users.updateUser)
// routes.delete('/delete_user', users.deleteUser)
// routes.delete('/delete_image', images.deleteImage)

module.exports = routes;