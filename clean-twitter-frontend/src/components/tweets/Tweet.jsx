import React from "react";
import Media from "../media/Media";
import { getRelativeTime } from "../../services/momentFormater";

const Tweet = ({ tweetContent }) => {
  const {
    created_at,
    text,
    user,
    retweet_count,
    favorite_count,
    media,
  } = tweetContent;

  return (
    <blockquote className="twitter-tweet blockquote">
      <span className="author">{user.display_name}</span>
      <span className="time">{getRelativeTime(created_at)}</span>
      <p lang="en" dir="ltr">
        <span>{text}</span>
        {media && <Media media={media} />}
      </p>
      <footer>
        <h6>
          <i className="fa fa-retweet"></i> {retweet_count} &nbsp;
          <i className="fa fa-heart-o"></i> {favorite_count} &nbsp;
        </h6>
      </footer>
    </blockquote>
  );
};

export default Tweet;
