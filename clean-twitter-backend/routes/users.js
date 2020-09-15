const express = require("express");
const router = express.Router();
const searchUser = require("../services/userService");

router.get("/search/:handler", async (req, res) => {
  let users = [];
  try {
    users = await searchUser(req.params.handler);
  } catch (error) {
    console.log(error);
  }
  res.set("Access-Control-Allow-Origin", "*");
  res.send(users);
});

module.exports = router;
