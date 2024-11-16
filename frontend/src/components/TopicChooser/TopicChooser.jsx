import React from "react";
import "./TopicChooser.css";
import ButtonLink from "../ButtonLink/ButtonLink";
import MiniHeader from "../MiniHeader/MiniHeader";
import { useFormAndValidation } from "../../hooks/useFormandValidate";
import { Link } from "react-router-dom";

function TopicChooser({ getTopicResponse }) {
  const { values, errors, isValid, resetForm, handleChange } =
    useFormAndValidation();

  const handleSubmit = (evt) => {
    console.log("submitted");
    console.log({ values });
    evt.preventDefault();
    if (!isValid) {
      return;
    }
    getTopicResponse({ values }, resetForm);
  };

  return (
    <div>
      <MiniHeader />
      <div className="topic-chooser">
        <h2 className="topic-chooser__heading">
          What do you want to learn about today?
        </h2>
        <form onSubmit={handleSubmit} className="topic-chooser__form">
          <input
            type="text"
            placeholder=""
            className="topic-chooser__input"
            name="userTopic"
            onChange={handleChange}
            value={values.userTopic || ""}
            minLength="4"
            maxLength="100"
          />
          {errors.name && (
            <span className="modal__input-error_active">{errors.name}</span>
          )}
          <button className="topic-chooser__submit" type="submit">
            BUTTON
          </button>
        </form>
      </div>
    </div>
  );
}

export default TopicChooser;
