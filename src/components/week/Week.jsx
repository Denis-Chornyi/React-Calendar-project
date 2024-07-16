import React from 'react';
import Day from '../day/Day';

import './week.scss';

const Week = ({ month, events, handleEventDelete, weekDates }) => {
  const MILLISECONDS_IN_A_SECOND = 1000;
  const SECONDS_IN_A_MINUTE = 60;
  const MINUTES_IN_AN_HOUR = 60;
  const HOURS_IN_A_DAY = 24;

  const MILLISECONDS_IN_A_DAY =
    HOURS_IN_A_DAY * MINUTES_IN_AN_HOUR * SECONDS_IN_A_MINUTE * MILLISECONDS_IN_A_SECOND;
  return (
    <div className="calendar__week">
      {weekDates.map(dayStart => {
        const dayEnd = new Date(dayStart.getTime() + MILLISECONDS_IN_A_DAY);

        const dayEvents = events.filter(
          event => new Date(event.dateFrom) >= dayStart && new Date(event.dateFrom) < dayEnd
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
