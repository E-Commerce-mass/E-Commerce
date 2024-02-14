const router = require('express').Router()
const controller = require('../database/controller/userController')

router.post('/signup', controller.signUp)

router.get('/signin', controller.signIn)

router.put('/edit/:id', controller.updateUser)

router.delete('/delete/:id', controller.destroyUser)

module.exports = router