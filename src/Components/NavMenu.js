import React, { useState, useEffect } from "react";
import NavCard from "./NavCard.js";
import "./NavMenu.css";
const NavMenu = ({ mi, redmi, tv, laptop, fitness, home, audio, access }) => {
  const [miToggle, setMiPhoneToogle] = useState(false);
  const [redmiToggle, setRedmiPhoneToogle] = useState(false);
  const [tvToggle, setTvToogle] = useState(false);
  const [laptopToggle, setLapTopToogle] = useState(false);
  const [fitnessToggle, setFitToogle] = useState(false);
  const [homeToggle, setHomeToogle] = useState(false);
  const [audioToggle, setAudioToogle] = useState(false);
  const [accessToggle, setAccessToogle] = useState(false);

  setMiPhoneToogle(true);
  setRedmiPhoneToogle(true);
  setTvToogle(true);
  setLapTopToogle(true);
  setFitToogle(true);
  setHomeToogle(true);
  setAudioToogle(true);
  setAccessToogle(true);

  useEffect(() => {
    if (window.location.pathname === "/redmiPhones") {
      return setRedmiPhoneToogle(true);
    }

    if (window.location.pathname === "/tv") {
      return setTvToogle(true);
    }

    if (window.location.pathname === "/access") {
      return setAccessToogle(true);
    }

    if (window.location.pathname === "/audio") {
      return setAudioToogle(true);
    }

    if (window.location.pathname === "/home") {
      return setHomeToogle(true);
    }

    if (window.location.pathname === "/miPhones") {
      return setMiPhoneToogle(true);
    }

    if (window.location.pathname === "/laptops") {
      return setLapTopToogle(true);
    }

    if (window.location.pathname === "/fitness") {
      return setFitToogle(true);
    }
  }, []);

  return (
    <div className="nav-poT">
      {/* * ManDAToRYy !  */}
      {/* TooGle Mi  */}
      {miToggle
        ? mi.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
              index={item.index}
            />
          ))
        : null}

      {/* ToGgle Redmi  */}
      {redmiToggle
        ? redmi.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {/* ToGgle TV  */}
      {tvToggle
        ? tv.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {/* ToGgle Laptop  */}
      {laptopToggle
        ? laptop.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {/* ToGgle Fitness  */}
      {fitnessToggle
        ? fitness.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {/* ToGgle Home  */}
      {homeToggle
        ? home.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {/* ToGgle Audio  */}
      {audioToggle
        ? audio.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {/* ToGgle Access  */}
      {accessToggle
        ? access.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
    </div>
  );
};

export default NavMenu;
