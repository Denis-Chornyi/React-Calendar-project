import React, { useState, useEffect } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";
import {
  getWeekStartDate,
  generateWeekRange,
  getDisplayedMonth,
} from "../src/utils/dateUtils.js";
import {
  createEvent,
  deleteEvent,
  fetchEvent,
  updateEvent,
} from "../src/gateway/eventsGateways";
import "./common.scss";
import Modal from "./components/modal/Modal.jsx";

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventToEdit, setEventToEdit] = useState(null);

  useEffect(() => {
    fetchEvent().then(setEvents);
  }, []);

  const changeWeek = (days) => {
    setWeekStartDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + days);
      return newDate;
    });
  };

  const weekBefore = () => changeWeek(-7);
  const weekAfter = () => changeWeek(7);
  const currentWeek = () => setWeekStartDate(new Date());
  const month = getDisplayedMonth(getWeekStartDate(weekStartDate));
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const onCreate = (newEvent) => {
    createEvent(newEvent).then(() => fetchEvent().then(setEvents));
  };

  const onUpdate = (updatedEvent) => {
    updateEvent(updatedEvent.id, updatedEvent).then(() =>
      fetchEvent().then(setEvents)
    );
  };

  const handleEventDelete = (id) => {
    deleteEvent(id).then(() => fetchEvent().then(setEvents));
  };

  const openEditModal = (event) => {
    setEventToEdit(event);
    setIsModalOpen(true);
  };

  const closeEditModal = () => {
    setEventToEdit(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <Header
        weekBefore={weekBefore}
        weekAfter={weekAfter}
        currentWeek={currentWeek}
        month={month}
        onCreate={onCreate}
      />
      <Calendar
        weekDates={weekDates}
        month={month}
        events={events}
        handleEventDelete={handleEventDelete}
        openEditModal={openEditModal}
      />
      {isModalOpen && (
        <Modal
          closeModal={closeEditModal}
          event={eventToEdit}
          onCreate={onCreate}
          onUpdate={onUpdate}
        />
      )}
    </>
  );
};

export default App;
