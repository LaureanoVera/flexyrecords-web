const mainDev = (req, res) => {
  res.render("dev");
}

const dataDev =  (req, res) => {
  res.render('meData')
}

module.exports = {
  mainDev,
  dataDev,
}