import React from "react";
// import { motion } from "framer-motion";

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
          <img className="morty" src={morty} alt="morty" />
          <img className="rick" src={rick} alt="rick" />
          <Portal />
        </header>
      </div>
    </div>
  );
};

export default Header;
