import React from "react";
import "./Modal.css";
import squirrelglasses from "../../assets/squirrelglass.avif";

function Modal({ handleModalClose, activeModal }) {
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
          <img className="modal__item-image" src={squirrelglasses}></img>
          <h3>Healthy Habit</h3>
          <p>
            Take a break for 10 minutes! When you come back, see what you
            remember about your last study session. Then go over what you
            learned or try a new activity!
          </p>
          <p>
            **These tips would change. We could rotate through a database of
            different tips? I was also thinking that these would pop up after a
            certain amount of time, instead of waiting for a user click**
          </p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
