const toUserModel = require("./user");
const toMediaModel = require("./media");

function toTweetModel({
  id_str,
  created_at,
  full_text,
  user,
  retweet_count,
  favorite_count,
  extended_entities,
}) {
  return {
    id_str,
    created_at,
    text: full_text.replace(/(https?:\/\/[^\s]+)/g, ""),
    user: toUserModel(user),
    retweet_count,
    favorite_count,
    media:
      extended_entities && extended_entities.media.map((m) => toMediaModel(m)),
  };
}

module.exports = toTweetModel;
