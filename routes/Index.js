const express = require("express");
const router = express.Router();
const { home, team, contact, services } = require("../controller/route_main");

// ROUTES
router.get("/", home);
router.get("/team", team);
router.get("/contact", contact);
router.get("/services", services);

module.exports = router;
