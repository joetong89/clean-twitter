const client = require("../services/twitterConnection");

describe("Twitter API Connection", () => {
  it("should successfully return tweets", async () => {
    const params = { screen_name: "nodejs" };
    const tweets = await client.get("statuses/user_timeline", params);
    expect(tweets).toBeDefined();
  });
});
