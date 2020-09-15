const searchUser = require("../services/userService");

describe("Search User", () => {
  it("should return twitter user Donald Trump when search realdonaldtrump", async () => {
    const users = await searchUser("Trump", 6);
    expect(users.length).toBe(6);
    expect(users[0]).toBe("realDonaldTrump");
  });
});
