import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import TopicChooser from "../TopicChooser/TopicChooser";
import Activity from "../Activity/Activity";
import Instructions from "../Instructions/Instructions";
import Main from "../Main/Main";
import EduContent from "../EduContent/EduContent";
import StudyPage from "../StudyPage/StudyPage";
import BreakPage from "../BreakPage/BreakPage";
import Threepeat from "../Threepeat/Threepeat";
import Farewell from "../Farewell/Farewell";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";
import { studyTips } from "../../utils/constants";
import { getEduContent } from "../../utils/openAiAPI";

function App() {
  const [topic, setTopic] = useState("");
  const [activeModal, setActiveModal] = useState("");
  const [studyTip, setStudyTip] = useState({});
  const [activitiesCompleted, setActivitiesCompleted] = useState(0);

  const pickRandomStudyTip = () => {
    let randomStudyTip =
      studyTips[Math.floor(Math.random() * studyTips.length)];
    setStudyTip(randomStudyTip);
  };

  /*
  const getTopicResponse = ({ values }, resetForm) => {
    getEduContent(values.userTopic).then((data) => setTopic(data));
  };
  */

  const handleTipClick = () => {
    setActiveModal("healthyhabit");
    pickRandomStudyTip();
  };

  const countActivities = () => {
    setActivitiesCompleted(activitiesCompleted + 1);
  };

  const handleModalClose = () => {
    setActiveModal("");
  };

  return (
    <div className="app">
      <div className="app_content">
        <Routes>
          <Route path="/" element={<Main handleTipClick={handleTipClick} />} />
          <Route path="/picktopic" element={<TopicChooser />} />
          <Route path="/educontent" element={<EduContent />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route
            path="/studypage"
            element={
              <StudyPage
                countActivities={countActivities}
                activitiesCompleted={activitiesCompleted}
              />
            }
          />
          <Route
            path="/activitycomplete"
            element={<BreakPage handleTipClick={handleTipClick} />}
          />
          <Route
            path="/threepeat"
            element={<Threepeat handleTipClick={handleTipClick} />}
          />
          <Route path="/farewell" element={<Farewell />} />
        </Routes>
        <Footer />
      </div>
      <Modal
        activeModal={activeModal}
        handleModalClose={handleModalClose}
        studyTip={studyTip}
      />
    </div>
  );
}

export default App;
