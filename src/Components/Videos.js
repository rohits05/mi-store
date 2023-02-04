import React from "react";
import VidList from "./VidList.js";
import "./Videos.css";
const Videos = ({ vid }) => {
  return (
    <div className="vid-card">
      {vid.map((item, index) => (
        <VidList
          index={index}
          key={item.image}
          image={item.image}
          name={item.name}
        />
      ))}
    </div>
  );
};

export default Videos;
