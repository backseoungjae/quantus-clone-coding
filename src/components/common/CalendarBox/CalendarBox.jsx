import React from "react";
import "./CalendarBox.scss";
import Calendar from "react-calendar";
import dayjs from "dayjs";

export default function CalendarBox({ date, minDate, handleChangeDate }) {
  return (
    <div className="cotainer">
      <Calendar
        minDate={minDate}
        value={date}
        onChange={handleChangeDate}
        formatDay={(locale, date) => dayjs(date).format("D")}
        tileDisabled={({ date }) => {
          const d = dayjs(date).format("YYYY-MM-DD");
          return dayjs(d).isBefore(minDate);
        }}
      />
    </div>
  );
}
