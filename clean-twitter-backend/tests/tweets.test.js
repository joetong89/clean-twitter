const getTweets = require("../services/tweetService");

describe("GET tweets", () => {
  it("should return an array of tweets", async () => {
    const tweets = await getTweets("nodejs");
    expect(tweets.length).toBeGreaterThan(10);
  });
});
