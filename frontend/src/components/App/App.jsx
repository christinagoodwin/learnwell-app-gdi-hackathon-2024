import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import EduContent from "../EduContent/EduContent";
import StudyPage from "../StudyPage/StudyPage";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";

function App() {
  const [topic, setTopic] = useState("");
  const [activeModal, setActiveModal] = useState("");

  const handleTipClick = () => {
    setActiveModal("healthyhabit");
  };

  const handleModalClose = () => {
    setActiveModal("");
  };

  return (
    <div className="app">
      <div className="app_content">
        <Header handleTipClick={handleTipClick} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/educontent" element={<EduContent />} />
          <Route path="/studypage" element={<StudyPage />} />
        </Routes>
        <Footer />
      </div>
      <Modal activeModal={activeModal} handleModalClose={handleModalClose} />
    </div>
  );
}

export default App;
