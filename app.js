const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const port = process.env.PORT || 3006;

// MIDDLEWARE
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true })); // middleware para analizar cuerpos desde URL
app.use(bodyParser.json({ extended: true })); //middleware para analizar objetos json

// TEMPLATE ENGINE
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// STATICS
app.use(express.static(path.join(__dirname, "public")));

// ROUTES
app.use("/", require("./routes/Index"));
app.use("/dev", require("./routes/Dev"));

// 404 ERROR
app.use((req, res, next) => {
  res.status(404).render("404");
});

// SERVER LISTEN
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
