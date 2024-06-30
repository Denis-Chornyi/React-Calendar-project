import React, { useState } from "react";
import Modal from "../modal/Modal";
import "./header.scss";

const Header = ({ weekBefore, weekAfter, currentWeek, month, onCreate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
        <span className="navigation__displayed-month">{month}</span>
      </div>
      {isModalOpen && <Modal closeModal={closeModal} onCreate={onCreate} />}
    </header>
  );
};

export default Header;
