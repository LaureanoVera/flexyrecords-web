const express = require("express");
const router = express.Router();

// ROUTES
router.get("/", (req, res) => {
  res.render("index");
});

router.get("/team", (req, res) => {
  res.render("team");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.get("/services", (req, res) => {
  res.render("services");
});

module.exports = router;
