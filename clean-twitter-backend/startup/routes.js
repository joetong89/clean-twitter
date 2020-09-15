const tweets = require("../routes/tweets");
const users = require("../routes/users");

module.exports = function (app) {
  //app.use(express.json());
  app.use("/tweets", tweets);
  app.use("/users", users);
};
