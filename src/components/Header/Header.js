import React from "react";

import "./Header.scss";
import morty from "../../assets/morty.webp";
import rick from "../../assets/rick_cut.webp";

import Portal from "../Portal/Portal";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="container">
        <header className="header">
          <h1 className="header__title">Rick and Morty cool title.</h1>
          <button className="header__cta">Discover more</button>
          <img className="rick" src={rick} alt="rick" />
          <img className="morty" src={morty} alt="morty" />
          <Portal />
        </header>
      </div>
    </div>
  );
};

export default Header;
