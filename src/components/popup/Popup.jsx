import React from "react";
import "./popup.scss";

const Popup = ({ closePopup, handleEventDelete, id }) => {
  return (
    <div className="popup ">
      <div className="popup__content">
        <button
          onClick={() => {
            handleEventDelete(id);
            closePopup();
          }}
          className="popup__btn delete-event-btn"
        >
          <i className="fas fa-trash"></i>
          <p className="popup__btn-description"></p>
        </button>
        <button onClick={closePopup} className="popup__close-btn">
          +
        </button>
      </div>
      <span className="events-colors">
        <ul className="events-colors__list"></ul>
      </span>
    </div>
  );
};

export default Popup;
