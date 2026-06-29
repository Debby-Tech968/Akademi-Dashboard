import React, { useState } from "react";
import logo from "../assets/logo.png";
import Activity from "../assets/Activity.png";
import Calendar from "../assets/Calendar.png";
import ChatIcon from "../assets/Chat.png";
import Finance from "../assets/Finance.png";
import User from "../assets/User.png";
import food from "../assets/food.png";
import Teachers from "../assets/Teacher.png";
import Students from "../assets/Student.png";
import Home from "../assets/Home.png";
import { NavLink } from "react-router-dom";

const Mainbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-[#F3F4FF] text-[#4D44B5] text-[16px] xl:text-[18px] w-full xl:w-68 rounded-l-full flex flex-row items-center gap-4 xl:gap-5 px-4 py-2"
      : "text-[#C1BBEB] text-[16px] xl:text-[18px] flex flex-row items-center gap-4 xl:gap-5 px-4 py-2";

  const navLinks = [
    { to: "/", icon: Home, label: "Dashboard" },
    { to: "/students", icon: Students, label: "Students" },
    { to: "/teachers", icon: Teachers, label: "Teachers" },
    { to: "/calender", icon: Calendar, label: "Calendar" },
    { to: "/finance", icon: Finance, label: "Finance" },
    { to: "/food", icon: food, label: "Food" },
    { to: "/Users", icon: User, label: "User" },
    { to: "/chat", icon: ChatIcon, label: "Chat" },
    { to: "/activity", icon: Activity, label: "Latest Activity" },
  ];

  return (
    <>
      {/* Mobile / tablet top bar (shown below xl, includes iPad Pro) - hamburger only, no background, pinned to top */}
      <div className="flex xl:hidden items-center justify-start px-5 py-4 fixed top-0 left-0 right-0 z-30">
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="flex flex-col bg-amber-50 justify-center gap-1.5 p-2"
        >
          <span className="block w-6 h-0.5 bg-[#4D44B5] rounded"></span>
          <span className="block w-6 h-0.5 bg-[#4D44B5] rounded"></span>
          <span className="block w-6 h-0.5 bg-[#4D44B5] rounded"></span>
        </button>
      </div>

      {/* Backdrop, only when drawer is open on mobile/tablet (below xl) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 xl:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar: slide-in drawer below xl (covers iPad Pro), fixed column from xl up */}
      <div
        className={`bg-[#4D44B5] h-auto w-72 sm:w-80 p-6 sm:p-10 flex flex-col gap-8 fixed top-0 left-0 z-50 overflow-hidden transform transition-transform duration-300 ease-in-out
        xl:fixed xl:translate-x-0 xl:flex xl:w-80 xl:h-screen xl:py-8 xl:px-8 xl:gap-0
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-row items-center justify-between shrink-0">
          <div className="flex flex-row items-center gap-2">
            <img src={logo} alt="Logo" />
            <h1 className="text-[28px] xl:text-[36px] text-[#FFFFFF] font-bold">
              Akademi
            </h1>
          </div>

          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="xl:hidden text-white text-3xl leading-none"
          >
            &times;
          </button>
        </div>

        <div className="flex flex-col gap-1 xl:flex-1 xl:gap-2 xl:justify-evenly xl:py-4 xl:px-5">
          {navLinks.map(({ to, icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              <img src={icon} alt={label} className="w-6 h-6 shrink-0" />
              <h3>{label}</h3>
            </NavLink>
          ))}
        </div>

        <div className="mt-auto xl:mt-0 shrink-0">
          <h2 className="text-[#FFFFFF] text-[12px] font-bold">
            Akademi - School Admission Dashboard
          </h2>
          <p className="text-[#FFFFFF] text-[12px]">
            Made with <span className="text-red-500 text-lg">♥</span> by Debby
          </p>
        </div>
      </div>
    </>
  );
};

export default Mainbar;
