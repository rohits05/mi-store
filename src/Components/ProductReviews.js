import React from "react";
import PrCard from "./PrCard.js";
import "./ProductReviews.css";
const ProductReviews = ({ review }) => {
  return (
    <div className="prdt-review">
      {review.map((item, index) => (
        <PrCard
          price={item.price}
          image={item.image}
          name={item.name}
          review={item.review}
          index={index}
          key={item.image}
        />
      ))}
    </div>
  );
};

export default ProductReviews;
