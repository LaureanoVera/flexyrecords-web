const express = require("express");
const app = express();
const port = 3000;

// TEMPLATE ENGINE
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// STATICS
app.use(express.static(__dirname + "/public"));

// ROUTES
app.use('/', require('./routes/Index'))

// 404 ERROR
app.use((req, res, next) => {
  res.status(404).render("404");
});

// SERVER LISTEN
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
