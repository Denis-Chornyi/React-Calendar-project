import React from "react";
import "./decoration.scss";

const Decoration = () => {
  const decorationSlot = Array(8)
    .fill()
    .map((val, index) => index);

  const getCurrentGMTOffset = () => {
    const offsetMinutes = new Date().getTimezoneOffset();
    const offsetHours = Math.abs(offsetMinutes / 60);
    const offsetSign = offsetMinutes < 0 ? "+" : "-";
    const offsetString = `GMT${offsetSign}${offsetHours
      .toString()
      .padStart(2, "0")}`;
    return offsetString;
  };
  console.log();
  return (
    <div className="calendar__week-decoration">
      {decorationSlot.map((slot) => (
        <div className="calendar__week-decoration-slot" key={slot}>
          {slot === 0 && getCurrentGMTOffset()}
        </div>
      ))}
    </div>
  );
};

export default Decoration;
