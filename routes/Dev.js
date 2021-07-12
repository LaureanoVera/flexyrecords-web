const express = require("express");
const router = express.Router();
const { mainDev, dataDev } = require('../controller/route_dev')

router.get("/", mainDev);
router.get('/data', dataDev)

module.exports = router;
