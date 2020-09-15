const client = require("./twitterConnection");
const toUserModel = require("../models/user");

async function searchUser(user_handler, result_size = 10) {
  const params = { q: user_handler, count: result_size };
  let users = [];
  try {
    users = await client.get("users/search", params);
  } catch (error) {
    console.log("ERROR:" + error);
  }

  return rankUsers(users);
}

function rankUsers(users) {
  if (users.length === 0) return users;

  return users
    .sort((u1, u2) => u2.followers_count - u1.followers_count)
    .map((u) => toUserModel(u));
}

module.exports = searchUser;
