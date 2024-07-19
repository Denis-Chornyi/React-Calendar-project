import React from 'react';
import Event from '../event/Event';
import { formatMins } from '../../../src/utils/dateUtils.js';
import './hour.scss';
import CurrentTime from '../currentTime/CurrentTime.jsx';
import PropTypes from 'prop-types';
import { MILLISECONDS_IN_A_MINUTE } from '../../constants.js';

const Hour = ({ dataHour, hourEvents, setEvents, dataDay, month }) => {

  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {hourEvents.map(({ id, dateFrom, dateTo, title, description }) => {
        const eventStart = `${dateFrom.getHours()}:${formatMins(dateFrom.getMinutes())}`;
        const eventEnd = `${dateTo.getHours()}:${formatMins(dateTo.getMinutes())}`;
        const eventSize = (dateTo.getTime() - dateFrom.getTime()) / MILLISECONDS_IN_A_MINUTE;
        return (
          <Event
            key={id}
            height={eventSize}
            marginTop={dateFrom.getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            description={description}
            closeEvent={() => closeEvent(id)}
            setEvents={setEvents}
            id={id}
          />
        );
      })}
      {dataHour === new Date().getHours() && <CurrentTime dataDay={dataDay} month={month} />}
    </div>
  );
};

export default Hour;

Hour.propTypes = {
  dataHour: PropTypes.number.isRequired,
  hourEvents: PropTypes.array.isRequired
};
