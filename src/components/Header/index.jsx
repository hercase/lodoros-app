import React from "react";
import "./styles.scss";

const Header = () => {
  return (
    <div className="header">
      <div class="logo">
        Lodoros <span>App</span>
      </div>
      <nav className="navigation">
        <span className="navigation__item">Links útiles</span>
        <span className="navigation__item">Clocks</span>
      </nav>
    </div>
  );
};

export default Header;
