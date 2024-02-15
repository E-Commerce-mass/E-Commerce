const router = require('express').Router()
const controller = require('../database/controller/userController')

router.post('/signin', controller.signIn)

router.post('/signup', controller.signUp)

router.post('/getuser', controller.fetchOneUser)

router.put('/edit/:id', controller.updateUser)

router.delete('/delete/:id', controller.destroyUser)


module.exports = router