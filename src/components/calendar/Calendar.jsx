import React from 'react';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import Decoration from '../decoration/Decoration';
import PropTypes from 'prop-types';
import { generateWeekRange, getDisplayedMonth, getWeekStartDate } from '../../utils/dateUtils';
import './calendar.scss';

const Calendar = ({ events, setEvents, weekStartDate }) => {
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  const month = getDisplayedMonth(getWeekStartDate(weekStartDate));

  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Decoration />
          <Sidebar />
          <Week weekDates={weekDates} month={month} events={events} setEvents={setEvents} />
        </div>
      </div>
    </section>
  );
};

export default Calendar;

Calendar.propTypes = {
  events: PropTypes.array.isRequired,
  setEvents: PropTypes.func.isRequired
};
