import React from "react";
import "./NavCard.css";
const NavCard = ({ name, price, image, index }) => {
  return (
    <div className="nav-cards">
      <img src={image} alt={`${index.image} phone`} />
      <p>{name}</p>
      <span>{price}</span>
    </div>
  );
};

export default NavCard;
