import React from "react";

const Medium = ({ medium }) => {
  return getMedium(medium);
};

const getMedium = (medium) => {
  if (medium.type === "video") return getVideo(medium);
  return getPhoto(medium);
};

const getVideo = (medium) => {
  const { photo_url, video_content_type, video_url } = medium;

  return (
    <video poster={photo_url} controls>
      <source src={video_url} type={video_content_type} />
    </video>
  );
};

const getPhoto = (medium) => {
  const { photo_url } = medium;

  return (
    <a href={photo_url}>
      <img className="img-thumbnail" alt={photo_url} src={photo_url} />
    </a>
  );
};

export default Medium;
