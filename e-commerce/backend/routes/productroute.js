const router = require('express').Router();
const controllers = require("../database/controller/productcontroller");

router.get("/getall",controllers.getall);


module.exports = router;