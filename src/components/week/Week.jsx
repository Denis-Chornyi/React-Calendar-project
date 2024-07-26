import React from 'react';
import Day from '../day/Day';
import { MILLISECONDS_IN_A_DAY } from '../../constants';
import PropTypes from 'prop-types';
import './week.scss';

const Week = ({ month, events, setEvents, weekDates }) => {
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
            setEvents={setEvents}
            month={month}
          />
        );
      })}
    </div>
  );
};

export default Week;

Week.propTypes = {
  month: PropTypes.string.isRequired,
  events: PropTypes.array.isRequired,
  setEvents: PropTypes.func.isRequired,
  weekDates: PropTypes.array.isRequired
};
