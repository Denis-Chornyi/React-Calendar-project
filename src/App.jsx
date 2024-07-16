import React, { useState, useEffect } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import { getWeekStartDate, generateWeekRange, getDisplayedMonth } from '../src/utils/dateUtils.js';
import { createEvent, deleteEvent, fetchEvent } from '../src/gateway/eventsGateways';
import './common.scss';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvent().then(setEvents);
  }, []);

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  const month = getDisplayedMonth(getWeekStartDate(weekStartDate));

  const onCreate = newEvent => {
    createEvent(newEvent).then(() => fetchEvent().then(setEvents));
  };

  const handleEventDelete = id => {
    deleteEvent(id).then(() => fetchEvent().then(setEvents));
  };

  return (
    <>
      <Header month={month} onCreate={onCreate} setWeekStartDate={setWeekStartDate} />
      <Calendar
        weekDates={weekDates}
        month={month}
        events={events}
        handleEventDelete={handleEventDelete}
      />
    </>
  );
};

export default App;
