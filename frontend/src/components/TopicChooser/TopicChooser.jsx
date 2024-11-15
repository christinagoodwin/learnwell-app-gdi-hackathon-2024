import React from "react";
import "./TopicChooser.css";
import ButtonLink from "../ButtonLink/ButtonLink";

function TopicChooser({}) {
  return (
    <div className="topic-chooser">
      
      <h2 className="topic-chooser__heading">
        What do you want
      </h2>
      <h2 className="topic-chooser__heading">
        to learn about
      </h2>
      <h2 className="topic-chooser__heading">
        today?
      </h2>
      <p className="topic-chooser__hint">
        We recommend entering a concept, historical event, or scientific process
      </p>
      <form action="" className="topic-chooser__form">
        <label htmlFor="" className="topic-chooser__label">
          I want to understand...
        </label>
        <input
          type="text"
          placeholder=""
          className="topic-chooser__input"
        />
        <ButtonLink
          type="submit"
          to="/educontent"
          className="topic-chooser__submit"
        >
          Tell me what I need to know
        </ButtonLink>
      </form>
    </div>
  );
}

export default TopicChooser;
