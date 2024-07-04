import React from "react";
import "./event.scss";
import PropTypes from "prop-types";

const Event = ({ height, marginTop, title, time, description, openPopup }) => {
  const eventStyle = {
    height,
    marginTop,
  };

  return (
    <div onClick={openPopup} style={eventStyle} className="event">
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      <div className="event__description">{description}</div>
    </div>
  );
};

export default Event;

Event.propTypes = {
  height: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  openPopup: PropTypes.func.isRequired,
};