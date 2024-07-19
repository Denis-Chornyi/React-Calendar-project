import React, { useState } from 'react';
import Modal from '../modal/Modal';
import './header.scss';
import { getDisplayedMonth, getWeekStartDate } from '../../utils/dateUtils';
import PropTypes from 'prop-types';

const Header = ({ weekStartDate, setEvents, setWeekStartDate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  console.log(weekStartDate);
  const month = getDisplayedMonth(getWeekStartDate(weekStartDate));

  const changeWeek = days => {
    setWeekStartDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + days);
      return newDate;
    });
  };

  const weekBefore = () => changeWeek(-7);
  const weekAfter = () => changeWeek(7);
  const currentWeek = () => setWeekStartDate(new Date());

  return (
    <header className="header">
      <button onClick={openModal} className="button create-event-btn">
        <svg className="create-event-btn-plus" width="36" height="36" viewBox="0 0 36 36">
          <path fill="#34A853" d="M16 16v14h4V20z"></path>
          <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
          <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
          <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
          <path fill="none" d="M0 0h36v36H0z"></path>
        </svg>
        <span className="create-event-description">Create</span>
      </button>
      <div className="navigation">
        <button onClick={currentWeek} className="navigation__today-btn button">
          Today
        </button>
        <button onClick={weekBefore} className="icon-button navigation__nav-icon">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button onClick={weekAfter} className="icon-button navigation__nav-icon">
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">{month}</span>
      </div>
      {isModalOpen && <Modal closeModal={closeModal} setEvents={setEvents} />}
    </header>
  );
};

export default Header;

Header.propTypes = {
  setEvents: PropTypes.func.isRequired,
  setWeekStartDate: PropTypes.func.isRequired
};
