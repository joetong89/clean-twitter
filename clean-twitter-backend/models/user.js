function toUserModel({
  screen_name,
  name,
  location,
  description,
  url,
  created_at,
  followers_count,
  favourites_count,
  statuses_count,
  verified,
  profile_image_url,
}) {
  return {
    handler: screen_name,
    display_name: name,
    location,
    description,
    url,
    created_at,
    followers_count,
    favourites_count,
    statuses_count,
    verified,
    profile_image_url_small: profile_image_url,
    profile_image_url: profile_image_url.replace("normal", "400x400"),
  };
}

module.exports = toUserModel;
