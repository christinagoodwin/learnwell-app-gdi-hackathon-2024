import React from "react";
import "./Main.css";
import ButtonLink from "../ButtonLink/ButtonLink";
import { Outlet } from "react-router-dom";

function Main({ handleTipClick }) {
  return (
    <main>
      <h2>Avoid cramming and stress! Learn new material, well.</h2>
      <p>
        Did you know that taking breaks and getting rest are part of learning?
        Let us know what you'd like to understand. We'll give you the content
        you need and the study tools to actuall learn.
      </p>
      <h3>
        Here are some steps you can take to set up a good study environment:
      </h3>
      <ul>
        <li>
          Find a place that you can associate with working, learning and
          concentrating.
        </li>
        <li>Try your best to remove distractions.</li>
        <li>Have a water bottle and snack on hand.</li>
        <li>
          If you're in a social environment, buddy up with someone else who is
          studying.
        </li>
      </ul>
      <button onClick={handleTipClick}>
        Get another tip for studying well.
      </button>
      <ButtonLink type="button" to="/picktopic" className="footer-btn">
        I'm ready to pick my topic.
      </ButtonLink>
      <Outlet />
    </main>
  );
}

export default Main;
