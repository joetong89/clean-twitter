const getTweets = require("./services/tweetService");

const tweets = getTweets("nodejs");
console.log(tweets);
