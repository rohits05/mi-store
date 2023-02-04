import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./ShowCase.css";
// import ShowDescription from "./ShowDescription.js";
const ShowCase = ({ showcase }) => {
  return (
    <Carousel
      showThumbs={false}
      interval="5000"
      transitionTime="2000"
      controls={false}
      showIndicators={false}
      autoPlay
      infiniteLoop
    >
      {showcase.end.map((item, index) => (
        <div key={item.image} id="showcase" interval={1000} keyboard={true}>
          <img
            className="showcase-mode"
            src={item.image}
            alt={`${index} showxcase`}
          />
          <div className="showcase-description">
            <h3>{item.name}</h3> <span id="sp">﹏﹏﹏﹏</span>
            <p id="desc">{item.description}</p>
            <p>{item.source}</p>
            <u>Read more</u>
          </div>{" "}
        </div>
      ))}
    </Carousel>
  );
};

export default ShowCase;
