import React from "react";
import "./Heading.css";
const Heading = ({ title }) => {
  return (
    <div className="heading">
      <div></div>
      <p> {title}</p>
      <div></div>
    </div>
  );
};

export default Heading;
