import React from "react";
import "./Threepeat.css";
import ButtonLink from "../ButtonLink/ButtonLink";

function Threepeat({ handleTipClick }) {
  return (
    <div className="breakpage">
      <h3 className="breakpage__title">You did it!</h3>
      <p>
        Wow! You've been through 3 study sessions and we recommend taking a
        longer break. Most people can concentrate on a single task for about an
        hour. You can choose to continue on this activity for one more 20-minute
        session or step away for now. You can also click below for another tip
        before you go!
      </p>
      <ul className="breakpage__buttons">
        <ButtonLink to="/studypage" className="breakpage__reset-btn">
          I'll do 20 more minutes
        </ButtonLink>
        <ButtonLink to="/" className="threepeat__done-btn">
          I'm done with this topic
        </ButtonLink>
        <ButtonLink to="/farewell" className="threepeat__logout-btn">
          Logout
        </ButtonLink>
        <button className="breakpage__studytipbtn" onClick={handleTipClick}>
          Get a tip for studying well
        </button>
      </ul>
    </div>
  );
}

export default Threepeat;
