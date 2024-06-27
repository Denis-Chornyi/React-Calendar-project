import React, { useState } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";

import { getWeekStartDate, generateWeekRange, getDisplayedMonth } from "../src/utils/dateUtils.js";

import "./common.scss";

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());

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

  const month = getDisplayedMonth(weekStartDate)

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  return (
    <>
      <Header
        weekBefore={weekBefore}
        weekAfter={weekAfter}
        currentWeek={currentWeek}
        month={month}
      />
      <Calendar weekDates={weekDates} />
    </>
  );
};

export default App;
