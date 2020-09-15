import React from "react";
import { getShortDate } from "../../services/momentFormater";

const User = ({ user }) => {
  const {
    handler,
    display_name,
    location,
    description,
    url,
    created_at,
    followers_count,
    favourites_count,
    statuses_count,
    verified,
    profile_image_url,
  } = user;

  return (
    <div className="card" id="author_card">
      <img
        src={profile_image_url}
        className="card-img-top"
        alt={display_name}
      />
      <div className="card-body">
        <h5 className="card-title">
          {display_name} {verified && <i className="fa fa-check-circle"></i>}
          <br />
          <a href={"/tweets/" + handler}>@{handler}</a>
        </h5>
        <p>
          <i className="fa fa-map-marker"></i>&nbsp;{" "}
          {location || "No Location Info"}
          <br />
          <i className="fa fa-calendar"></i> Joined since{" "}
          {getShortDate(created_at)}
        </p>
        <p>
          <span className="text-primary">{statuses_count}</span> Tweets <br />
          <span className="text-primary">{followers_count}</span> Followers{" "}
          <br />
          <span className="text-primary">{favourites_count}</span> Likes <br />
        </p>

        <p className="card-text">{description}</p>
        <a className="btn btn-primary" href={url} role="button">
          More
        </a>
      </div>
    </div>
  );
};

export default User;
