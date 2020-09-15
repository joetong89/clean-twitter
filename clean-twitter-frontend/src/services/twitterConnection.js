const Twitter = require("twitter");
// const config = require("config");

// const client = new Twitter({
//   consumer_key: config.get("consumer_key"),
//   consumer_secret: config.get("consumer_secret"),
//   access_token_key: config.get("access_token_key"),
//   access_token_secret: config.get("access_token_secret"),
// });

const client = new Twitter({
  consumer_key: "Q6ErT76CgleA6MsesYKTHBACC",
  consumer_secret: "mSeXKOEtekvIskdg8Cpg886QOcpOd5mJwQqGfnPBSzd44ebpPm",
  access_token_key: "793009927-i0tubRU9a4bT4LRvj8PmJnv8ZZV4yxd5YGsks5Sp",
  access_token_secret: "hlIDtpFCY028dH1LC701ZIw2hrTEDyUDMzb2UxG1yDxXd",
});

module.exports = client;
