import React from "react";
// import {Link} from "react-router-dom";
import "./hotAccessories.css";
const HotAccessories = () => {
  return (
    <div className="ha">
      <a className="halink" href="/music">
        Music Store
      </a>
      <a className="halink" href="/smartDevice">
        Smart Device
      </a>
      <a className="halink" href="/home">
        Home
      </a>
      <a className="halink" href="/lifeStyle">
        LifeStyle
      </a>
      <a className="halink" href="/mobileAccessories">
        Mobile Accessories
      </a>
    </div>
  );
};

export default HotAccessories;
