import http from "./httpService";

export async function getTweets(user_handler) {
  const tweets = await http.get(
    `http://localhost:3900/tweets/user/${user_handler}`
  );
  return tweets;
}
