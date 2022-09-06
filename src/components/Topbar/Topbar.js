import React from "react";
import Logo from "../../assets/logo.svg";

import "./Topbar.scss";

const Topbar = () => {
  let i = 1;
  return (
    <div className="topbar-wrapper">
      <div className="container">
        <div className="topbar">
          <img className="logo" src={Logo} alt="Rick and Morty logo" />
          <nav className="nav">
            <ul className="nav__list">
              {["About", "Characters", "Episodes", "Locations"].map((item) => {
                return (
                  <li className="nav__item" key={item}>
                    <span>0{i++}.</span> {item}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
