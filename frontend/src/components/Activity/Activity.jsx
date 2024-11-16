import React from "react";
import "./Activity.css";
import ButtonLink from "../ButtonLink/ButtonLink";

//Would be nice if the user could click a button to get a new activity response from API

function Activity({}) {
  return (
    <div className="activity__wrapper">
      <h3 className="activity__title">Try this!</h3>
      <p className="activity__intro-text">
        Below is an activity recommendation from the OpenAI API. Make this an
        active learning activity! Write, make, do, repeat. Challenge yourself to
        bring in information from new resources and synthesize what you learn in
        a single document.
      </p>
      <p className="activity__instructions">
        This is where we would display a response from the API. I'm not too
        familiar with the API. Is it possible to display one activity at a time?
        Here's an example:
      </p>
      <p>
        2. Create a Timeline Visualizing the events in a timeline can help you
        see how everything fits together. Here’s a simplified timeline with key
        dates: 1900–1914: Tensions build due to militarism, nationalism, and
        alliances. June 28, 1914: Assassination of Archduke Franz Ferdinand in
        Sarajevo. July 28, 1914: Austria-Hungary declares war on Serbia. August
        1, 1914: Germany declares war on Russia. August 3, 1914: Germany
        declares war on France. August 4, 1914: Britain declares war on Germany
        after the invasion of Belgium. Seeing the sequence of events in a linear
        way can help you remember the escalation process and the
        interconnectedness of these events.
      </p>
      <ButtonLink to="/instructions" className="">
        Start
      </ButtonLink>
      <button to="/instructions" className="educontent__go-btn">
        Back
      </button>
    </div>
  );
}

export default Activity;
