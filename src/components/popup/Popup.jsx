import React from "react";
import "./popup.scss";

const Popup = ({ closePopup, handleEventDelete, id }) => {
  return (
    <div className="popup ">
      <div className="popup__content">
        <button onClick={closePopup} className="popup__close-btn">
          +
        </button>
        <button
          onClick={() => {
            closePopup();
          }}
          className="popup__btn edit__event-btn"
        >
          <i className="fas fa-pencil-alt"></i>
          <p className="popup__btn-description">Edit</p>
        </button>
        <button
          onClick={() => {
            handleEventDelete(id);
            closePopup();
          }}
          className="popup__btn delete-event-btn"
        >
          <i className="fas fa-trash"></i>
          <p className="popup__btn-description">Delete</p>
        </button>
        <button className="popup__btn events-colors__btn">
          <i className="fas fa-palette"></i>
          <p className="popup__btn-description">Color</p>
        </button>
      </div>
      <span className="events-colors">
        <ul className="events-colors__list"></ul>
      </span>
    </div>
  );
};

export default Popup;
