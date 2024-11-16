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
          <h3 className="modal__title">{studyTip.title}</h3>
          <p className="modal__text">{studyTip.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
