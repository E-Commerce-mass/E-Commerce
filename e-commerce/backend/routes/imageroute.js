const router = require('express').Router();
const controllers = require("../database/controller/imagecontroller");

router.get("/getone/:productIdProducts",controllers.getimage);


module.exports = router;