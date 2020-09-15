const client = require("./twitterConnection");
const toTweetModel = require("../models/tweet");

let params = {
  exclude_replies: true,
  include_rts: true,
  tweet_mode: "extended",
};

async function getTweetsByUser(user_handler) {
  params.screen_name = user_handler;
  const tweets = await client.get("statuses/user_timeline", params);

  return formatTweets(tweets);
}

function formatTweets(tweets) {
  return tweets.map((t) => toTweetModel(t));
}

async function getRawTweetsByUser(user_handler) {
  params.screen_name = user_handler;

  return await client.get("statuses/user_timeline", params);
}

async function getRawTweetsById(id) {
  params.id = id;
  return await client.get("statuses/show/" + id, params);
}

module.exports = { getTweetsByUser, getRawTweetsByUser, getRawTweetsById };
