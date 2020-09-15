import React from "react";
import Medium from "./Medium";

const Media = ({ media }) => {
  return (
    <React.Fragment>
      {media.map((medium) => (
        <Medium key={medium.id_str} medium={medium} />
      ))}
    </React.Fragment>
  );
};

export default Media;
