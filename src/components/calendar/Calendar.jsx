import React, { useState } from 'react';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import Modal from '../modal/Modal';
import './calendar.scss';
import Decoration from '../decoration/Decoration';
import PropTypes from 'prop-types';
import { generateWeekRange, getDisplayedMonth, getWeekStartDate } from '../../utils/dateUtils';

const Calendar = ({ events, onCreate, setEvents, weekStartDate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          {isModalOpen && <Modal closeModal={() => setIsModalOpen(false)} onCreate={onCreate} />}
        </div>
      </div>
    </section>
  );
};

export default Calendar;

Calendar.propTypes = {
  events: PropTypes.array.isRequired
};
