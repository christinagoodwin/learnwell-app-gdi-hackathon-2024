import React from "react";
import "./Header.css";

function Header({ handleTipClick }) {
  return (
    <header className="header">
      <h1 className="header_title">Welcome to LearnWell</h1>
      <h2>Avoid cramming and stress! Learn new material, well.</h2>
      <p>
        Did you know that taking breaks and getting rest are part of learning?
      </p>
      <p>
        Let us know what you'd like to understand. We'll give you the content
        you need and the study tools to actually learn.
      </p>
      <button onClick={handleTipClick} className="button">Get Started</button>

      {/* <button onClick={handleTipClick}>Get a tip for studying well</button> */}
    </header>
  );
}

export default Header;
