import React, { useState } from "react";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const SchoolCalendar = () => {
  const [current, setCurrent] = useState(new Date(2021, 2)); // March 2021

  const year = current.getFullYear();
  const month = current.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrev = new Date(year, month, 0).getDate();

  const prevMonth = () => setCurrent(new Date(year, month - 1));
  const nextMonth = () => setCurrent(new Date(year, month + 1));

  // Highlighted dates
  const highlights = {
    8: { bg: "bg-[#303972]", text: "text-white" },
    20: { bg: "bg-[#FCC43E]", text: "text-white" },
    23: { bg: "bg-[#FB7D5B]", text: "text-white" },
  };

  // Sundays & orange dates
  const getDateStyle = (day, isCurrentMonth) => {
    if (!isCurrentMonth) return "text-gray-300";
    if (highlights[day])
      return `${highlights[day].bg} ${highlights[day].text} rounded-full`;
    const date = new Date(year, month, day);
    if (date.getDay() === 0) return "text-[#FB7D5B] font-semibold"; // Sunday
    return "text-[#303972]";
  };

  // Build calendar grid
  const cells = [];

  // Prev month trailing days
  for (let i = firstDay - 1; i >= 0; i--) {
    cells.push({ day: daysInPrev - i, current: false });
  }
  // Current month days
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, current: true });
  }
  // Next month leading days
  const remaining = 32 - cells.length;
  for (let d = 1; d <= remaining; d++) {
    cells.push({ day: d, current: false });
  }

  return (
    <div className="bg-white rounded-2xl p-6 h-full shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[14px] font-bold text-[#303972]">
          School Calendar
        </h2>

        <div className="flex items-center gap-2">
          <button
            onClick={prevMonth}
            className="p-1 hover:opacity-70 transition-opacity text-[#303972]"
          >
            ‹
          </button>
          <span className="text-[14px] font-semibold text-[#303972]">
            {MONTHS[month]} {year}
          </span>
          <button
            onClick={nextMonth}
            className="p-1 hover:opacity-70 transition-opacity text-[#303972]"
          >
            ›
          </button>
        </div>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 mb-2">
        {DAYS.map((d) => (
          <div
            key={d}
            className="text-center text-[13px] text-[#A098AE] font-medium py-2"
          >
            {d}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7">
        {cells.map((cell, i) => (
          <div key={i} className="flex items-center justify-center py-3">
            <span
              className={`w-9 h-9 flex items-center justify-center text-[14px] font-semibold cursor-pointer
                hover:bg-[#F3F4FF] hover:rounded-full transition-colors
                ${getDateStyle(cell.day, cell.current)}`}
            >
              {cell.day}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolCalendar;
