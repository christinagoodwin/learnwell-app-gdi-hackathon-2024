import React from "react";
import "./MiniHeader.css";
import icon from "../../assets/learnwell.png";

function MiniHeader() {
  return (
    <header className="miniheader">
      <h1 className="miniheader__title">LearnWell</h1>
      <img src={icon} className="miniheader__icon" alt="Learn Well icon"></img>
    </header>
  );
}

export default MiniHeader;
