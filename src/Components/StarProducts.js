import React from "react";
import "./StarProducts.css";
const StarProducts = ({ star }) => {
  return (
    <div className="star">
      <div>
        <a href={star[0].url}>
          <img src={star[0].image} alt="/" />
        </a>
      </div>

      {/* Second Block  */}
      <div>
        <a href={star[1].url}>
          <img src={star[1].image} alt="/" />
        </a>

        <a href={star[2].url}>
          <img src={star[2].image} alt="/" />
        </a>

        <a href={star[3].url}>
          <img src={star[3].image} alt="/" />
        </a>
      </div>
    </div>
  );
};

export default StarProducts;
