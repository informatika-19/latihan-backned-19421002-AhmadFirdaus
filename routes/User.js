const routes = require('express').Router()
const userController = require('../controller/user')

routes.post('/register', (req, res) => {
    usercontroller.register(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

routes.post('/register', (req, res) => {
    usercontroller.login(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
module.exports = routes