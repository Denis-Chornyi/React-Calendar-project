import React from "react";

import { days } from "../../utils/dateUtils.js";

const Navigation = ({ weekDates }) => {
  const today = new Date();

  return (
    <header className="calendar__header">
      {weekDates.map((dayDate) => {
        const isToday =
          today.toDateString() === new Date(dayDate).toDateString();

        return (
          <div className="calendar__day-label day-label" key={dayDate}>
            <span className="day-label__day-name">
              {days[dayDate.getDay()]}
            </span>
            <span
              className={`day-label__day-number ${
                isToday ? "day-label__day-number_today" : ""
              }`}
            >
              {dayDate.getDate()}
            </span>
          </div>
        );
      })}
    </header>
  );
};

export default Navigation;
