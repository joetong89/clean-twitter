import React from "react";
import Tweet from "./Tweet";

const Tweets = ({ tweets }) => {
  return (
    <React.Fragment>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id_str} tweetContent={tweet} />
      ))}
    </React.Fragment>
  );
};

export default Tweets;
