import React from "react";
import "./Modal.css";

function Modal({ handleModalClose, activeModal, studyTip }) {
  return (
    <div
      className={`modal ${activeModal === "healthyhabit" && "modal_opened"}`}
    >
      <div className="modal__overlay">
        <div className="modal__card">
          <button
            type="button"
            className="modal__close-btn"
            onClick={handleModalClose}
          >
            X
          </button>
          <img className="modal__item-image" src={studyTip.img}></img>
          <h3>{studyTip.title}</h3>
          <p>
            Take a break for 10 minutes! When you come back, see what you
            remember about your last study session. Then go over what you
            learned or try a new activity!
          </p>
          <p>{studyTip.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
