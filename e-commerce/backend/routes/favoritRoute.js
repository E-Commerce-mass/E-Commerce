const router = require('express').Router()
const controller = require('../database/controller/favoritsController')

router.post('/like', controller.likeProduct)

module.exports = router