const router = require('express').Router()
const controller = require('../database/controller/BlockController')




router.post('/addblock',controller.addBlock)



module.exports = router