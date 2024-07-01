import React from "react";
import Day from "../day/Day";

import "./week.scss";

const Week = ({ month, events, handleEventDelete, weekDates }) => {
  return (
    <div className="calendar__week">
      {weekDates.map((dayStart) => {
        const dayEnd = new Date(dayStart.getTime() + 24 * 60 * 60 * 1000);

        const dayEvents = events.filter(
          (event) =>
            new Date(event.dateFrom) >= dayStart &&
            new Date(event.dateFrom) < dayEnd
        );

        return (
          <Day
            key={dayStart}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            handleEventDelete={handleEventDelete}
            month={month}
          />
        );
      })}
    </div>
  );
};

export default Week;
