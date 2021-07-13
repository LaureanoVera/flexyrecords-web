const express = require("express");
const router = express.Router();
const { mainDev } = require("../controller/route_dev");
// const { listMembers, listContent } = require("../controller/route_main");

router.get("/", mainDev);
// router.get("/data", dataDev);
// router.get("/list-members", listMembers);
// router.get("/list-content", listContent);

module.exports = router;
