const mainDev = (req, res) => {
  res.render("dev");
}

const dataDev =  (req, res) => {
  res.render('me')
}

module.exports = {
  mainDev
}