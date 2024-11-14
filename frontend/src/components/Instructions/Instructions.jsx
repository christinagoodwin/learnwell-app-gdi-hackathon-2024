import React from "react";
import "./Instructions.css";
import ButtonLink from "../ButtonLink/ButtonLink";

function Instructions({}) {
  return (
    <div className="instructions">
      <h3>Here's what's next</h3>
      <p>
        You'll work on the activity described on the previous screen. Click the
        button below when you're ready to start. We'll remind you to take a
        break every 20 minutes and give you a chance to get some healthy study
        tips. After your break you can decide to reset your timer or get a new
        activity.
      </p>
      <ButtonLink to="/studypage" className="instructions__go-btn">
        I'm ready to start!
      </ButtonLink>
    </div>
  );
}

export default Instructions;
