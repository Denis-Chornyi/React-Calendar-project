import React, { useState } from "react";

import "./header.scss";
import Modal from "../modal/Modal";
import { getDisplayedMonth } from "../../utils/dateUtils";

const Header = ({ weekBefore, weekAfter, currentWeek, month }) => {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };
  return (
    <header className="header">
      <button onClick={openModal} className="button create-event-btn">
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button onClick={currentWeek} className="navigation__today-btn button">
          Today
        </button>
        <button
          onClick={weekBefore}
          className="icon-button navigation__nav-icon"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          onClick={weekAfter}
          className="icon-button navigation__nav-icon"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month"></span>
      </div>
      {modal && <Modal closeModal={closeModal} />}
      <span>{month}</span>
    </header>
  );
};

export default Header;
