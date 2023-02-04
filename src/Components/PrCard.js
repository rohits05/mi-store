import React from "react";
import "./PrCard.css";
const PrCard = ({ name, review, price, index, image }) => {
  return (
    <div className="pr-card">
      <img src={image} alt={`${index} review`} />
      <h5>{review}</h5>
      <span>{name}</span>
      <b>{price}</b>
    </div>
  );
};

export default PrCard;
