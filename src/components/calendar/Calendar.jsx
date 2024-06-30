import React, { useState } from "react";
import Navigation from "./../navigation/Navigation";
import Week from "../week/Week";
import Sidebar from "../sidebar/Sidebar";
import Modal from "../modal/Modal";
import "./calendar.scss";

const Calendar = ({
  month,
  events,
  onCreate,
  handleEventDelete,
  weekDates,
  handleEventChange,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week
            weekDates={weekDates}
            month={month}
            events={events}
            handleEventDelete={handleEventDelete}
            handleEventChange={handleEventChange}
          />
          {isModalOpen && (
            <Modal
              closeModal={() => setIsModalOpen(false)}
              onCreate={onCreate}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Calendar;
