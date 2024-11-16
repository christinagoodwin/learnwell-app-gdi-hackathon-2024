import React from "react";
import "./BreakPage.css";
import { Outlet } from "react-router-dom";
import ButtonLink from "../ButtonLink/ButtonLink";
import MiniHeader from "../MiniHeader/MiniHeader";
function BreakPage({ handleTipClick }) {
  return (
    <div className="breakpage">
      <MiniHeader />
      <h3 className="breakpage__title">You did it!</h3>
      <p>
        Good job! You've focused for 20 minutes and you should take a break,
        clear your mind, and reward yourself. Choose from your options below
        when you're ready to keep studying:
      </p>
      <ul className="breakpage__buttons">
        <div className="breakpage__activity-btn">
          <ButtonLink to="/activity">New activity</ButtonLink>
        </div>
        <div className="breakpage__activity-btn">
          <ButtonLink to="/studypage" className="breakpage__reset-btn">
            Reset timer
          </ButtonLink>
        </div>
        <button className="btn breakpage__studytipbtn" onClick={handleTipClick}>
          Get a tip for studying well
        </button>
      </ul>
      <Outlet />
    </div>
  );
}

export default BreakPage;
