import moment from "moment";

moment.updateLocale("en", {
  week: {
    dow: 1,
  },
});

export const getWeekStartDate = (date) => {
  const dateCopy = new Date(date);
  const dayOfWeek = dateCopy.getDay();
  const difference = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;

  const monday = new Date(dateCopy.setDate(date.getDate() + difference));
  return new Date(monday.getFullYear(), monday.getMonth(), monday.getDate());
};

export const generateWeekRange = (startDate) => {
  const result = [];
  for (let i = 0; i < 7; i += 1) {
    const base = new Date(startDate);
    result.push(new Date(base.setDate(base.getDate() + i)));
  }
  return result;
};

export const getDateTime = (date, time) => {
  const [hours, minutes] = time.split(":");
  const withHours = new Date(new Date(date).setHours(Number(hours)));
  const withMinutes = new Date(new Date(withHours).setMinutes(Number(minutes)));
  return withMinutes;
};

export const formatMins = (mins) => {
  return mins < 10 ? `0${mins}` : mins;
};

export const getDisplayedMonth = (date) => {
  const weekStart = moment(date).startOf("week");
  const weekEnd = moment(date).endOf("week");

  const startMonth = weekStart.format("MMM");
  const startYear = weekStart.format("YYYY");
  const endMonth = weekEnd.format("MMM");
  const endYear = weekEnd.format("YYYY");

  if (startMonth === endMonth) {
    return `${startMonth} ${startYear}`;
  }

  return startYear === endYear
    ? `${startMonth}-${endMonth} ${startYear}`
    : `${startMonth} ${startYear}-${endMonth} ${endYear}`;
};

export const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
