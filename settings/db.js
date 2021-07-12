const mongoose = require("mongoose");
const user = "admin_deah";
const pass = "CuPX6ZDi9Ie1JT49";
const dbName = "flexy_team";

mongoose
  .connect(
    `mongodb+srv://${user}:${pass}@clusterflexy.hzb7x.mongodb.net/${dbName}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )
  .then((data) => console.log("DB is Connected"))
  .catch((err) => console.log(`ERROR: ${err}`));
