import React from "react";
import "./TopicChooser.css";
import ButtonLink from "../ButtonLink/ButtonLink";

function TopicChooser({}) {
  return (
    <div className="topic-chooser">
      <h2 className="topic-chooser__heading">
        What would you like to learn about?
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
          placeholder="outbreak of WWI"
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
