import React from "react";
import "./VidList.css";

const playButton = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M8 5v14l11-7z" />
  </svg>
);

const VidList = ({ image, name }) => {
  return (
    <div className="vid-list" style={{ backgroundImage: `url(${image})` }}>
      {/* <img src={image} alt="vidImage" /> */}
      <a href="/">{playButton}</a>
      <p>{name}</p>
    </div>
  );
};

export default VidList;
