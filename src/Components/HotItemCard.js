import React from "react";
import "./HotItemCard.css";
const HotItemCard = ({ image, index, price, name }) => {
  return (
    <div className="hot-card">
      <img src={image} alt={`${index} product`} />
      <p>{name}</p>
      <span>{price}</span>
    </div>
  );
};

export default HotItemCard;
