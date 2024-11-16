import React from "react";
import "./Main.css";
import ButtonLink from "../ButtonLink/ButtonLink";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

function Main({ handleTipClick }) {
  const handleGetStartedClick = () => {
    navigate("/next");
  };

  return (
    <div>
      <Header />
      <main className="mainContent">
        <h2>PICK A QUIET, FAMILIAR PLACE.</h2>
        <h2>REMOVE DISTRACTIONS.</h2>
        <h2>BE RESTED AND HYDRATE.</h2>
        <h2>GATHER MATERIALS (E.G, PEN, PAPER, WATER, SNACK)</h2>
        <button className="btn" onClick={handleTipClick}>
          Get another tip for studying well.
        </button>
        <h1></h1>
        <ButtonLink className="btn" type="button" to="/picktopic">
          Get Started
        </ButtonLink>
        {/* <h2>Avoid cramming and stress! Learn new material, well.</h2>
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
      </ul> */}

        {/* <ButtonLink type="button" to="/picktopic" className="footer-btn">
        I'm ready to pick my topic.
      </ButtonLink> */}
        <Outlet />
      </main>
    </div>
  );
}

export default Main;
