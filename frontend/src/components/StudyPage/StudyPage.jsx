import React from "react";
import "./StudyPage.css";
import EduContent from "../EduContent/EduContent";
import Activity from "../Activity/Activity";
import Timer from "../Timer/Timer";

function StudyPage({}) {
  return (
    <div className="studypage">
      <EduContent />
      <Activity />
      <Timer />
    </div>
  );
}

export default StudyPage;
