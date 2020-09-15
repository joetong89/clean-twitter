const express = require("express");
const router = express.Router();
const {
  getTweetsByUser,
  getRawTweetsByUser,
  getRawTweetsById,
} = require("../services/tweetService");

router.get("/user/:handler", async (req, res) => {
  let tweets = [];
  try {
    tweets = await getTweetsByUser(req.params.handler);
  } catch (error) {
    console.log("ERROR:" + error);
  }
  res.set("Access-Control-Allow-Origin", "*");
  res.send(tweets);
});

router.get("/raw/user/:handler", async (req, res) => {
  const tweets = await getRawTweetsByUser(req.params.handler);
  res.send(tweets);
});
router.get("/raw/id/:id", async (req, res) => {
  const tweets = await getRawTweetsById(req.params.id);
  res.send(tweets);
});

module.exports = router;
