import React from "react";

import "./Header.scss";

import Portal from "../Portal/Portal";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="container">
        <header className="header">
          <h1 className="header__title">Rick and Morty cool title.</h1>
          <Portal />
        </header>
      </div>
    </div>
  );
};

export default Header;
