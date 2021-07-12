// MODEL DB
const Member = require("../models/model_member");

// CONNECTION DB
const pool = require("../settings/db");

// MEMBERS
// app
const listMembers = async (req, res) => {
  const model = await Member.find();
  Member.countDocuments({}, (err, total) => {
    if (err) {
      return res.json({
        status: 400,
        msg: `Error to read: ${err}`,
      });
    }
    res.json({ status: 200, total, model });
    console.log(model);
  });
};

// web
const listContent = async (req, res) => {
  const member = await Member.find();
  Member.countDocuments({}, (err, total) => {
    if (err) {
      return res.json({
        status: 400,
        msg: `Error to read: ${err}`,
      });
    }
    res.render('team', { member })
  });
};

// ROUTES
const home = (req, res) => {
  res.render("index");
};
const team = (req, res) => {
  res.render("team");
};
const contact = (req, res) => {
  res.render("contact");
};
const services = (req, res) => {
  res.render("services");
};

module.exports = {
  home,
  team,
  contact,
  services,
  listMembers,
  listContent
};
