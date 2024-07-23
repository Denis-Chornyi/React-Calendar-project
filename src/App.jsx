import React, { useState, useEffect } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import { fetchEvent } from '../src/gateway/eventsGateways';
import './common.scss';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvent().then(setEvents);
  }, []);

  return (
    <>
      <Header
        weekStartDate={weekStartDate}
        setEvents={setEvents}
        setWeekStartDate={setWeekStartDate}
      />
      <Calendar weekStartDate={weekStartDate} events={events} setEvents={setEvents} />
    </>
  );
};

export default App;
