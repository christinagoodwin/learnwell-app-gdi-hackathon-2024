import React from "react";
import "./BreakPage.css";
import ButtonLink from "../ButtonLink/ButtonLink";

function BreakPage({ handleTipClick }) {
  return (
    <div className="breakpage">
      <h3 className="breakpage__title">You did it!</h3>
      <p>
        Good job! You've focused for 20 minutes and you should take a break,
        clear your mind, and reward yourself. Choose from your options below
        when you're ready to keep studying:
      </p>
      <ul className="breakpage__buttons">
        <ButtonLink to="/activity" className="breakpage__activity-btn">
          New activity
        </ButtonLink>
        <ButtonLink to="/studypage" className="breakpage__reset-btn">
          Reset timer
        </ButtonLink>
        <button className="breakpage__studytipbtn" onClick={handleTipClick}>
          Get a tip for studying well
        </button>
      </ul>
    </div>
  );
}

export default BreakPage;
