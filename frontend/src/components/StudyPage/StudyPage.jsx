import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./StudyPage.css";
import EduContent from "../EduContent/EduContent";
import Timer from "../Timer/Timer";
import ButtonLink from "../ButtonLink/ButtonLink";
import MiniHeader from "../MiniHeader/MiniHeader";

//Needs to be setup so that user is taken to the breakpage when the timer goes off

function StudyPage({ countActivities, activitiesCompleted }) {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      countActivities();
      if (activitiesCompleted < 3) {
        navigate("/activitycomplete");
      } else {
        navigate("/threepeat");
      }
    }, 1200000);
  }, []);

  return (
    <div className="studypage">
      <MiniHeader />
      <Timer />
    </div>
  );
}

export default StudyPage;
