import React from 'react';
import './event.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Event = ({ height, marginTop, title, time, description, handleEventDelete, id }) => {
  const eventStyle = {
    height,
    marginTop
  };

  const handleDeleteClick = e => {
    e.stopPropagation();
    handleEventDelete(id);
  };

  return (
    <div style={eventStyle} className="event">
      <button className="event__close-btn" onClick={handleDeleteClick}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      <div className="event__description">{description}</div>
    </div>
  );
};

Event.propTypes = {
  height: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleEventDelete: PropTypes.func.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired // Додаємо цей пропс, якщо він відсутній
};

export default Event;
