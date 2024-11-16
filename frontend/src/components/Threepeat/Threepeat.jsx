import React from "react";
import "./Threepeat.css";
import ButtonLink from "../ButtonLink/ButtonLink";
import MiniHeader from "../MiniHeader/MiniHeader";
function Threepeat({ handleTipClick }) {
  return (
    <div className="threepeat">
      <MiniHeader />
      <h3 className="threepeat__title">You did it!</h3>
      <p>
        Wow! You've been through 3 study sessions and we recommend taking a
        longer break. Most people can concentrate on a single task for about an
        hour. You can choose to continue on this activity for one more 20-minute
        session or step away for now. You can also click below for another tip
        before you go!
      </p>
      <div>
        <div className="threepeat__buttons">
          <div className="threepeat__btn">
            <ButtonLink to="/studypage">I'll do 20 more minutes</ButtonLink>
          </div>
          <div className="threepeat__btn">
            <ButtonLink to="/">I'm done with this topic</ButtonLink>
          </div>
          <div className="threepeat__btn">
            {" "}
            <ButtonLink to="/farewell">Logout</ButtonLink>
          </div>
          <button className="btn" onClick={handleTipClick}>
            Get a tip for studying well
          </button>
        </div>
      </div>
    </div>
  );
}

export default Threepeat;
