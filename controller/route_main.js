// MODEL DB
const Member = require('../models/model_member')

// CONNECTION DB
const pool = require('../settings/db')

// ROUTES
const home = (req, res) => {
  res.render("index");
} 

const team = (req, res) => {
  res.render("team");
}

const contact = (req, res) => {
  res.render("contact");
}

const services = (req, res) => {
  res.render("services");
}

module.exports = {
  home,
  team,
  contact,
  services
}