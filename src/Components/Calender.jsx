import React from "react";
import Wrapper from "./Wrapper";
import Searchicon from "../assets/Search.png";
import placeholder from "../assets/Placeholder.png";
import Bell from "../assets/bell.png";
import gear from "../assets/gear.png";
import Btn from "./Btn";

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// Each cell: { day, muted (outside current month), highlighted (selected day), events: [{color}], label, count }
const calendarRows = [
  [
    { day: 31, muted: true },
    { day: 1 },
    { day: 2, events: ["#4D44B5", "#FB7D5B", "#FFC542"] },
    { day: 3 },
    { day: 4 },
    { day: 5 },
    {
      day: 6,
      highlightBg: true,
      avatars: 2,
      extra: "7+",
    },
  ],
  [
    { day: 7 },
    { day: 8 },
    { day: 9 },
    { day: 10, selected: true, label: "Karen, 2+" },
    { day: 11 },
    { day: 12 },
    { day: 13 },
  ],
  [
    { day: 14 },
    { day: 15, avatars: 2, extra: "2+" },
    { day: 16 },
    { day: 17 },
    { day: 18, label: "Tony, 2+", labelColor: "#FB7D5B" },
    { day: 19 },
    { day: 20, events: ["#4D44B5", "#FB7D5B"], borderColor: "#FFC542" },
  ],
  [
    { day: 21 },
    { day: 22 },
    { day: 23 },
    { day: 24, events: ["#4D44B5", "#FB7D5B", "#FFC542"] },
    { day: 25 },
    { day: 26 },
    { day: 27 },
  ],
  [
    { day: 28 },
    { day: 29, label: "Johnny", labelColor: "#FFC542" },
    { day: 30 },
    { day: 1, muted: true },
    { day: 2, muted: true },
    { day: 3, muted: true },
    { day: 4, muted: true },
  ],
];

const schedule = [
  {
    id: 1,
    title: "Basic Algorithm",
    subtitle: "Algorithm",
    date: "March 20, 2021",
    time: "09.00 - 10.00 AM",
    barColor: "#4D44B5",
  },
  {
    id: 2,
    title: "Basic Art",
    subtitle: "Art",
    date: "March 20, 2021",
    time: "09.00 - 10.00 AM",
    barColor: "#FB7D5B",
  },
  {
    id: 3,
    title: "HTML & CSS Class",
    subtitle: "Programming",
    date: "March 20, 2021",
    time: "09.00 - 10.00 AM",
    barColor: "#FFC542",
  },
  {
    id: 4,
    title: "Simple Past Tense",
    subtitle: "English",
    date: "March 20, 2021",
    time: "09.00 - 10.00 AM",
    barColor: "#303972",
  },
];

// Centralizes the cell color logic that used to be an inline cascading ternary.
const getCellStyles = ({ selected, highlightBg, muted }) => {
  if (selected) {
    return { bg: "bg-[#4D44B5] border-[#4D44B5]", text: "text-white" };
  }
  if (highlightBg) {
    return { bg: "bg-[#FB7D5B] border-[#FB7D5B]", text: "text-white" };
  }
  if (muted) {
    return { bg: "bg-gray-50 border-gray-100", text: "text-gray-300" };
  }
  return { bg: "bg-white border-gray-200", text: "text-[#303972]" };
};

const CalendarCell = ({ cell }) => {
  const {
    day,
    selected,
    events,
    label,
    labelColor,
    avatars,
    extra,
    highlightBg,
    muted,
    borderColor,
  } = cell;

  const { bg, text } = getCellStyles({ selected, highlightBg, muted });

  return (
    <div
      className={`h-14 sm:h-16 md:h-20 lg:h-24 rounded-lg md:rounded-xl border p-1.5 sm:p-2 md:p-3 flex flex-col justify-between ${bg}`}
      style={borderColor ? { borderColor, borderWidth: 1 } : undefined}
    >
      <span
        className={`text-[10px] sm:text-[11px] md:text-[13px] lg:text-[14px] font-semibold ${text}`}
      >
        {day}
      </span>

      {events && (
        <div className="flex gap-1">
          {events.map((c) => (
            <span
              key={c}
              className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
      )}

      {/* Single label block: white-on-color when selected, colored otherwise.
          (Two separate conditional blocks here previously both rendered when
          selected && label were both true, duplicating the text.) */}
      {label && (
        <div
          className={`border-l-2 pl-1 text-[8px] sm:text-[9px] md:text-[10px] font-semibold truncate ${
            selected ? "border-white text-white" : ""
          }`}
          style={
            !selected
              ? {
                  borderColor: labelColor || "#4D44B5",
                  color: labelColor || "#4D44B5",
                }
              : undefined
          }
        >
          {label}
        </div>
      )}

      {avatars && (
        <div className="flex items-center -space-x-1.5 md:-space-x-2">
          {Array.from({ length: avatars }).map((_, i) => (
            <img
              key={i}
              src={placeholder}
              alt="Attendee"
              className="w-4 h-4 md:w-6 md:h-6 rounded-full border-2 border-white"
            />
          ))}
          {extra && (
            <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#303972] text-white text-[7px] md:text-[9px] flex items-center justify-center border-2 border-white">
              {extra}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

const Events = () => {
  return (
    <div className="flex min-h-screen xl:ml-80 w-full xl:w-[calc(100%-20rem)] bg-white">
      <div className="min-h-screen bg-[#F3F4FF] w-full flex-1">
        <Wrapper>
          {/* Navbar — stacked on mobile/md, single row from lg, fixed (out of flow) only at xl */}
          <div className="sticky top-0 xl:fixed xl:left-80 xl:right-5 z-20 bg-[#F3F4FF] py-4  md: xl:px-10 xl:pt-8 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
            <h1 className="text-[22px] text-end lg:mt-5 xl:mt-0 sm:text-[26px] xl:text-[30px] font-bold text-[#303972]">
              Events
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 w-full lg:w-auto">
              <div className="lg:flex md:hidden items-center bg-white rounded-full w-full sm:w-64 md:w-72 lg:w-80 px-4 py-2 gap-3 shadow-sm">
                <img
                  src={Searchicon}
                  alt=""
                  className="w-5 h-5 shrink-0"
                />
                <label htmlFor="event-search" className="sr-only">
                  Search events
                </label>
                <input
                  id="event-search"
                  type="text"
                  placeholder="Search here..."
                  className="flex-1 min-w-0 outline-none bg-transparent text-sm text-gray-500"
                />
              </div>

              <div className="lg:flex hidden items-center justify-between sm:justify-start gap-4 sm:gap-5">
                <img
                  src={Bell}
                  alt="Notifications"
                  className="w-7 h-7 md:w-8 md:h-8"
                />
                <img
                  src={gear}
                  alt="Settings"
                  className="w-7 h-7 md:w-8 md:h-8"
                />
                <div className="flex flex-row gap-3 items-center">
                  <div className="hidden md:block">
                    <h1 className="text-[14px] text-[#303972] font-bold whitespace-nowrap">
                      Nabila A.
                    </h1>
                    <p className="text-[#A098AE] text-[12px]">Admin</p>
                  </div>
                  <img
                    src={placeholder}
                    alt="Nabila A. profile picture"
                    className="h-9 w-9 md:h-10 md:w-10 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Main layout. Top margin only needs to compensate for the navbar
              at xl, since that's the only breakpoint where it's `fixed`
              (removed from normal flow) rather than `sticky`. */}
          <div className="flex flex-col lg:flex-row gap-4 md:gap-5 mt-4 md:mt-6 xl:mt-24">
            {/* Calendar */}
            <div className="bg-white flex-1 min-w-0 rounded-xl shadow-sm p-4 md:p-6 lg:p-8">
              <div className="flex flex-row items-center justify-between mb-4 md:mb-6 lg:mb-8 flex-wrap gap-3 md:gap-4">
                <h1 className="font-extrabold text-[18px] md:text-[22px] lg:text-[24px] text-[#303972]">
                  Calendar
                </h1>

                <div className="flex items-center gap-2 md:gap-3 flex-wrap">
                  <label htmlFor="month-select" className="sr-only">
                    Month
                  </label>
                  <select
                    id="month-select"
                    defaultValue="March"
                    className="border border-gray-200 rounded-full px-3 md:px-4 py-1.5 md:py-2 text-[#303972] text-xs md:text-sm font-medium outline-none"
                  >
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                  </select>
                  <label htmlFor="year-select" className="sr-only">
                    Year
                  </label>
                  <select
                    id="year-select"
                    defaultValue="2021"
                    className="border border-gray-200 rounded-full px-3 md:px-4 py-1.5 md:py-2 text-[#303972] text-xs md:text-sm font-medium outline-none"
                  >
                    <option>2021</option>
                    <option>2022</option>
                  </select>
                  <Btn
                    text="+ New Student"
                    className="bg-[#4D44B5] text-white text-xs md:text-[14px] font-bold rounded-full px-4 md:px-6 py-2 md:py-2.5"
                  />
                </div>
              </div>

              {/* Weekday header — abbreviated below md to save space */}
              <div className="grid grid-cols-7 gap-1.5 sm:gap-2 md:gap-3 mb-2 md:mb-3">
                {weekDays.map((d) => (
                  <p
                    key={d}
                    className="text-[9px] sm:text-[10px] md:text-[12px] text-[#A098AE] font-medium text-center"
                  >
                    <span className="md:hidden">{d.slice(0, 3)}</span>
                    <span className="hidden md:inline">{d}</span>
                  </p>
                ))}
              </div>

              {/* Weeks */}
              <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-3">
                {calendarRows.map((row, weekIndex) => (
                  <div
                    key={weekIndex}
                    className="grid grid-cols-7 gap-1.5 sm:gap-2 md:gap-3"
                  >
                    {row.map((cell, dayIndex) => (
                      <CalendarCell
                        key={`${weekIndex}-${dayIndex}-${cell.day}`}
                        cell={cell}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule Details sidebar — full width until it gets its own
                column at lg, sized in rem (not a fixed px card width) so it
                can never force the row wider than the viewport. */}
            <div className="bg-[#F3F4FF] min-w-0 w-full lg:w-80 xl:w-88 rounded-xl p-4 md:p-6">
              <h1 className="font-extrabold text-[16px] md:text-[18px] lg:text-[20px] text-[#303972]">
                Schedule Details
              </h1>
              <p className="text-[#A098AE] text-[12px] md:text-[13px] mt-1">
                Thursday, 10th April, 2021
              </p>

              <div className="flex flex-col gap-3 md:gap-4 mt-4 md:mt-6">
                {schedule.map((s) => (
                  <div
                    key={s.id}
                    className="bg-white w-full rounded-xl shadow-sm flex flex-row overflow-hidden"
                  >
                    <div
                      className="w-1.5 shrink-0"
                      style={{ backgroundColor: s.barColor }}
                    />
                    <div className="flex flex-row justify-between items-center flex-1 min-w-0 p-3 md:p-4 gap-2">
                      <div className="min-w-0">
                        <h1 className="text-[#303972] font-bold text-[13px] md:text-[14px] truncate">
                          {s.title}
                        </h1>
                        <p className="text-gray-400 text-[11px] md:text-[12px] mb-2">
                          {s.subtitle}
                        </p>
                        <div className="flex items-center gap-1 text-[#A098AE] text-[10px] md:text-[11px]">
                          <span>📅</span>
                          <span>{s.date}</span>
                        </div>
                        <div className="flex items-center gap-1 text-[#A098AE] text-[10px] md:text-[11px] mt-1">
                          <span>🕒</span>
                          <span>{s.time}</span>
                        </div>
                      </div>
                      <img
                        src={placeholder}
                        alt={`${s.title} instructor`}
                        className="w-9 h-9 md:w-10 md:h-10 rounded-full shrink-0"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <Btn
                  text="View More"
                  className="bg-[#4D44B51A] text-[#4D44B5] text-[14px] md:text-[18px] flex justify-center items-center mt-6 md:mt-10 font-bold rounded-[40px] text-center w-full h-12 md:h-14"
                />
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Events;
