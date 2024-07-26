import React from 'react';
import Hour from '../hour/Hour';
import PropTypes from 'prop-types';

const Day = ({ month, dataDay, dayEvents, setEvents }) => {
  const hours = Array(24)
    .fill()
    .map((_, index) => index);

  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map(hour => {
        const hourEvents = dayEvents.filter(event => event.dateFrom.getHours() === hour);

        return (
          <Hour
            key={dataDay + hour}
            dataHour={hour}
            hourEvents={hourEvents}
            setEvents={setEvents}
            dataDay={dataDay}
            month={month}
          />
        );
      })}
    </div>
  );
};

export default Day;

Day.propTypes = {
  dayEvents: PropTypes.array.isRequired,
  month: PropTypes.string.isRequired,
  dataDay: PropTypes.number.isRequired,
  setEvents: PropTypes.func.isRequired
};
