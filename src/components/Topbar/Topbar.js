import React from "react";
import Logo from "../../assets/logo.svg";

import "./Topbar.scss";

const Topbar = () => {
  return (
    <div className="topbar-wrapper">
      <div className="container">
        <div className="topbar">
          <img className="logo" src={Logo} alt="Rick and Morty logo" />
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <span>01.</span> Characters
              </li>
              <li className="nav__item">
                <span>02.</span> Episodes
              </li>
              <li className="nav__item">
                <span>03.</span> Locations
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
