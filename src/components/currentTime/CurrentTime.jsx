import React, { useEffect, useState } from 'react';
import { getDisplayedMonth, getWeekStartDate } from '../../utils/dateUtils';
import './currentTime.scss';
import PropTypes from 'prop-types';
import { MILLISECONDS_IN_A_MINUTE } from '../../constants';

const CurrentTime = ({ dataDay, month }) => {


  const [style, setStyle] = useState({
    top: `${new Date().getMinutes() - 2.5}px`
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStyle({ top: `${new Date().getMinutes() - 2.5}px` });
    }, MILLISECONDS_IN_A_MINUTE);

    return () => clearInterval(interval);
  }, []);

  const now = new Date();
  const currentMonth = getDisplayedMonth(getWeekStartDate(now));

  const currentDay = now.getDate();

  if (currentDay !== dataDay || currentMonth !== month) {
    return null;
  }

  return (
    <div style={style} className="current-time" data-month={currentMonth} data-day={currentDay}>
      <div className="current-time__circle"></div>
      <div className="current-time__line"></div>
    </div>
  );
};

export default CurrentTime;

CurrentTime.propTypes = {
  dataDay: PropTypes.number.isRequired,
  month: PropTypes.string.isRequired
};
