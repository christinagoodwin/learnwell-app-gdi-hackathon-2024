import React from "react";
import "./Header.css";
import icon from "../../assets/learnwell.png";

function Header() {
  return (
    <header className="header">
      <div className="headerContainer">
        <div className="container">
          <img src={icon} className="icon" alt="Learn Well icon"></img>
          <h2 className="header_title_welcome">Welcome to</h2>
        </div>
        <h1 className="header_title">LearnWell</h1>
      </div>
      
    </header>
  );
}

export default Header;
