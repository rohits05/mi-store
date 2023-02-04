import "./App.css";
import React from "react";
import PreNav from "./Components/PreNav.js";
import NavBar from "./Components/NavBar.js";
import Banner from "./Components/Slider.js";
import Offers from "./Components/Offers.js";
// import { Router } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
// import { banner } from "./Data/data.json";
import data from "./Data/data.json";
// import Offer from "./Components/Offer";
// import { offer } from "./Data/data.json";
// import ReactDOM from "react-dom/client";
import { BrowserRouter as Route } from "react-router-dom";
import Heading from "./Components/Heading.js";
import StarProducts from "./Components/StarProducts.js";
import HotAccessories from "./Components/HotAccessories.js";
import HotAccessoriesMenu from "./Components/HotAccessoriesMenu.js";
import ProductReviews from "./Components/ProductReviews.js";
import Videos from "./Components/Videos.js";
import ShowCase from "./Components/ShowCase.js";
import Footer from "./Components/Footer.js";
// import NavMenu from "./Components/NavMenu.js";
// const BrowserRouter = require("react-router-dom").BrowserRouter;
// const Route = require("react-router-dom").Route;
// const Link = require("react-router-dom").Link;
function App() {
  return (
    <div>
      <PreNav />
      <NavBar />
      {/* <NavMenu
        mi={data.miPhones}
        redmi={data.redmiPhones}
        tv={data.tv}
        laptop={data.laptop}
        fitness={data.fitnessAndLifeStyle}
        home={data.home}
        audio={data.audio}
        access={data.accessories}
      /> */}
      <Banner start={data.banner.start} />
      <Offers offer={data.offer} />

      {/* Top - ProDucTs Mania */}
      <Heading title="STAR PRODUCTS" />
      <StarProducts star={data.starProduct} />
      <Heading title="HOT ACCESSORIES" />

      {/* Accessories-Mania  */}
      <HotAccessories />
      {/* <Route path="/music" component={HotAccessoriesMenu} /> */}
      <Route exact path="/music">
        {/* Music - Devices Section  */}
        <HotAccessoriesMenu
          music={data.hotAccessories.music}
          musicCover={data.hotAccessoriesCover.music}
        />
      </Route>

      {/* <Route exact path="/smartDevice"> */}
      {/* Smart - Devices Section  */}
      {/* <HotAccessoriesMenu
          smartDevice={data.hotAccessories.smartDevice}
          smartDeviceCover={data.hotAccessoriesCover.smartDevice}
        />
      </Route> */}

      {/* <Route exact path="/home"> */}
      {/* Home - Devices Section  */}
      {/* <HotAccessoriesMenu
          home={data.hotAccessories.home}
          homeCover={data.hotAccessoriesCover.home}
        />
      </Route> */}

      {/* <Route exact path="/lifeStyle"> */}
      {/* LifeStyle - Devices Section  */}
      {/* <HotAccessoriesMenu
          lifeStyle={data.hotAccessories.lifeStyle}
          lifeStyleCover={data.hotAccessoriesCover.lifeStyle}
        />
      </Route>

      <Route exact path="/mobileAccessories">
        <HotAccessoriesMenu
          mobileAccessories={data.hotAccessories.mobileAccessories}
          mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}
        />
      </Route> */}

      {/* Reviews  */}
      <Heading title="PRODUCT REVIEWS" />
      <ProductReviews review={data.productReviews} />

      {/* Recommended Videos  */}
      <Heading title="VIDEOS" />
      <Videos vid={data.videos} />
      <Heading title="IN THE PRESS" />
      <ShowCase showcase={data.banner} />
      <Footer footer={data.footer} />
    </div>
  );
}

export default App;
