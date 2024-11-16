import React from "react";
import "./Header.css";
import icon from "../../assets/learnwell.png";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img src={icon} className="header__icon" alt="Learn Well icon"></img>
        <div className="header__text">
          <h2 className="header__title-welcome">Welcome to</h2>
          <h1 className="header__title">LearnWell</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
