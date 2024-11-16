import React from "react";
import { Outlet } from "react-router-dom";
import "./EduContent.css";
import ButtonLink from "../ButtonLink/ButtonLink";
import MiniHeader from "../MiniHeader/MiniHeader";

//This is where OpenAI API response would go
//Placeholder structure/content can then be deleted

function EduContent({}) {
  return (
    <div>
      <MiniHeader />
      <div className="educontent">
        <div className="educontent__placeholder">
          <h2 className="educontent__heading">Summary</h2>
          <p className="educontent__subheading">Text from AI</p>
          <div className="educontent__text">
            <p>
              The outbreak of World War I, also known as the Great War, was the
              result of a complex set of factors that had been building up over
              decades. The war began in the summer of 1914, and its causes can
              be broadly understood through the lens of several key factors:
              nationalism, militarism, alliances, imperialism, and the specific
              events that triggered the war. Let’s break them down:
            </p>
            <h3>1. Nationalism</h3>
            <p>
              Nationalism, the belief in the superiority and interests of one's
              own nation, was a powerful force in Europe in the early 20th
              century. Nationalist sentiments, especially in the Balkans, were a
              major contributor to tensions between the great powers. Balkan
              Nationalism: The Balkans were a particularly volatile region, with
              various Slavic groups seeking independence from the
              Austro-Hungarian Empire or the Ottoman Empire. Serbia, in
              particular, supported these nationalist movements, which angered
              Austria-Hungary, which feared the breakup of its empire.
              Pan-Slavism: Russia saw itself as the protector of Slavic peoples,
              which included supporting Serbia in its conflicts with
              Austria-Hungary.
            </p>
            <h3>2. Militarism</h3>
            <p>
              The major European powers had been building up their military
              forces throughout the late 19th and early 20th centuries. This
              arms race, particularly between Germany and Britain (naval arms
              race), created an environment where countries were ready to resort
              to military conflict to settle disputes. Mobilization Plans: Many
              countries had detailed plans for how they would mobilize their
              forces in the event of war. These plans were often rigid and did
              not leave room for diplomatic solutions once war seemed imminent.
              For example, Germany had the Schlieffen Plan, which called for a
              rapid attack on France through Belgium to avoid a two-front war
              with France and Russia.
            </p>
          </div>
        </div>
        <div className="educontent__btn-box">
          <ButtonLink to="/activity" className="educontent__go-btn">
            How can I learn all this?
          </ButtonLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default EduContent;
