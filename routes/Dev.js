const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("dev");
});

router.get('/data', (req, res) => {
  res.render('meData')
})

module.exports = router;
