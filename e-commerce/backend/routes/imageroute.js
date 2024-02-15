const router = require('express').Router();
const controllers = require("../database/controller/imagecontroller");

router.get("/getone/:id",controllers.getimage);


module.exports = router;