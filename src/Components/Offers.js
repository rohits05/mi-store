// import { Carousel } from "bootstrap";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Carousel } from "react-responsive-carousel";
import Offer from "./Offer.js";
import "./Offers.css";
const Offers = ({ offer }) => {
  return (
    <div className="offer-lists">
      <div className="lists">
        <a href="https://in.event.mi.com/in/why-mi">
          <img
            src="https://i02.appmifile.com/111_operator_in/10/11/2021/0309e1a3461cf465a08c6dcc7c9e6fd8.jpg?width=398&height=230"
            alt="/"
          />
        </a>
      </div>

      <div className="lists">
        {/* SmarTeR - Eseential  */}
        <a href="https://in.event.mi.com/in/live-better-live-smarter">
          <img
            src="https://i02.appmifile.com/862_operator_in/26/10/2022/833d25077496416c563589281859d733.jpg?width=398&height=230"
            alt="/"
          />{" "}
        </a>
      </div>

      <div className="lists">
        {/* Work from Home  */}
        <a href="https://in.event.mi.com/in/work-from-home-essentials">
          <img
            src="https://i02.appmifile.com/884_operator_in/30/05/2021/1e91f02cd9aca02f7caf3c5ddadd2747.jpg?width=398&height=230"
            alt="/"
          />
        </a>
      </div>
    </div>
  );
};

export default Offers;
