import React from "react";
import "./TopicChooser.css";
import ButtonLink from "../ButtonLink/ButtonLink";
import MiniHeader from "../MiniHeader/MiniHeader";
import { useFormAndValidation } from "../../hooks/useFormandValidate";

function TopicChooser() {
  const { values, errors, isValid, resetForm } = useFormAndValidation();

  /*
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!isValid) {
      return;
    }
    getTopicResponse({ values }, resetForm);
  };
  */

  return (
    <div>
      <MiniHeader />
      <div className="topic-chooser">
        <h2 className="topic-chooser__heading">
          What do you want to learn about today?
        </h2>
        <form className="topic-chooser__form">
          <input
            type="text"
            placeholder=""
            className="topic-chooser__input"
            name="userTopic"
            value={values.userTopic || ""}
            minLength="4"
            maxLength="100"
          />
          {errors.name && (
            <span className="modal__input-error_active">{errors.name}</span>
          )}
          <ButtonLink
            type="submit"
            to="/educontent"
            className="topic-chooser__submit"
            /*
            onClick={getTopicResponse(value)}
            */
          >
            Tell me what I need to know
          </ButtonLink>
        </form>
      </div>
    </div>
  );
}

export default TopicChooser;
