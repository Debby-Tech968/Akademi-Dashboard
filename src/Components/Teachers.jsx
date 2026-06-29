import React from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "./Wrapper";
import { NavLink } from "react-router-dom";
import Placeholder from "../assets/Placeholder.png";
import Phone from "../assets/Phone.png";
import Mail from "../assets/Mail.png";
import Bell from "../assets/bell.png";
import gear from "../assets/gear.png";
import Searchicon from "../assets/Search.png";
import dropdown from "../assets/dropdown.png";
import sign from "../assets/sign.png";

import teachersData from "./teachersData";

const Teachers = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F3F4FF] min-h-screen xl:ml-80 h-900 md:h-320 lg:h-300">
      <Wrapper>
        {/* HEADER */}
        <div className="sticky items-end xl:fixed top-0 xl:left-80 xl:right-0 z-10 xl:z-0 bg-[#F3F4FF] pb-4 xl:pt-8 xl:shadow-lg  xl:px-10 flex flex-col gap-4  sm:flex-col sm:items-end xl:items-center xl:flex-row sm:mt- lg:mt-0 sm:justify-between">
          <h1 className="text-[36px] font-bold text-[#303972]">Teachers</h1>

          <div className="xl:flex md:flex hidden lg:hidden items-center gap-6">
            <div className="bg-white rounded-full p-3">
              <img src={Bell} alt="notifications" className="w-7 h-7" />
            </div>

            <div className="bg-white rounded-full p-3">
              <img src={gear} alt="settings" className="w-7 h-7" />
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <h2 className="text-[14px] font-bold text-[#303972]">
                  Nabila A.
                </h2>
                <p className="text-[12px] text-[#A098AE]">Admin</p>
              </div>

              <img
                src={Placeholder}
                alt="profile"
                className="w-12 h-12 rounded-full"
              />
            </div>
          </div>
        </div>

        {/* SEARCH + ACTIONS */}
        <div className="sticky xl:top-22 xl:fixed top-0 xl:left-80 xl:right-0 z-20 xl:bg-[#F3F4FF] flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between py-4">
          {/* SEARCH */}
          <div className="hidden md:hidden lg:flex items-center xl:ml-10 bg-white rounded-full w-88 px-5 py-3 shadow-sm">
            <img src={Searchicon} alt="search" className="w-5 h-5" />
            <input
              type="text"
              placeholder="Search here..."
              className="flex-1 ml-3 bg-transparent outline-none text-sm text-[#A098AE]"
            />
          </div>

          {/* BUTTONS */}
          <div className=" md:fixed md:top-0 md:mt-13 bg-[#F3F4FF] w-100 lg:static lg:mt-0 fixed top-0 mt-15 flex items-center  py-6 gap-4">
            <button className="flex xl:ml-12 lg:ml-22 items-center gap-2 bg-white px-5 py-3 rounded-full shadow-sm text-[#303972] font-medium">
              Newest
              <img src={dropdown} alt="dropdown" className="w-4 h-4" />
            </button>

            <NavLink to="/Newteacher">
              <button className="flex xl:mr-10 items-center gap-2 bg-[#4D44B5] text-white px-5 py-3 rounded-full shadow-sm font-medium">
                <img src={sign} alt="add" className="w-4 h-4" />
                New Teachers
              </button>
            </NavLink>
          </div>
        </div>

        {/* 12 TEACHER CARDS */}
        <div className="grid grid-cols-1 xl:mt-50 md:mt-0 lg:grid-cols-4 md:grid-cols-3 gap-6 mt-18">
          {teachersData.map((teacher) => (
            <div
              key={teacher.id}
              onClick={() => navigate(`/teachers/${teacher.id}`)}
              className="bg-white cursor-pointer flex flex-col items-center justify-center rounded-[20px] p-6 hover:shadow-lg transition"
            >
              <img
                src={Placeholder}
                alt="teacher"
                className="h-20 w-20 rounded-full"
              />

              <h1 className="text-[20px] font-extrabold text-[#303972] mt-4">
                {teacher.name}
              </h1>

              <p className="text-[16px] text-[#A098AE]">{teacher.subject}</p>

              <div className="flex items-center gap-5 mt-5">
                <img src={Phone} className="w-6 h-6" alt="phone" />
                <img src={Mail} className="w-6 h-6" alt="mail" />
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Teachers;
