import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Wrapper from "./Wrapper";
import check from "../assets/check.png"
import { NavLink } from "react-router-dom";
import image from "../assets/Call.png";
import image2 from "../assets/Vector (4).png"
import Bell from "../assets/bell.png";
import gear from "../assets/gear.png";
import Placeholder from "../assets/Placeholder.png";
import Searchicon from "../assets/Search.png";
import dropdown from "../assets/dropdown.png";
import sign from "../assets/sign.png";
import StudentData from "./StudentData"


const Students = () => {
  const navigate = useNavigate();
  

  return (
    <div className="bg-[#F3F4FF] xl:ml-80 lg:h-130 md:h-130 h-300 xl:mt-50 min-h-screen">
      <Wrapper>
        {/* HEADER */}
        <div className="sticky xl:fixed top-0 items-end xl:left-80 xl:right-0 z-10 xl:z-0 bg-[#F3F4FF] pb-4 xl:pt-8 xl:shadow-lg  xl:px-10 flex flex-col gap-4 sm:flex-col sm:items-end xl:items-center xl:flex-row sm:mt-2 lg:mt-0 md:mt-0 sm:justify-between">
          <h1 className="text-[36px] font-bold text-[#303972]">Students</h1>

          <div className="xl:flex hidden items-center  gap-6">
            <div className="bg-white rounded-full p-3">
              <img src={Bell} alt="notifications" className="w-7 h-7" />
            </div>

            <div className="bg-white rounded-full p-3">
              <img src={gear} alt="settings" className="w-7 h-7" />
            </div>

            <div className="xl:flex  items-center gap-3">
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

        {/* SEARCH + BUTTONS */}
        <div className="sticky xl:top-22 xl:fixed top-0 xl:left-80 xl:right-0 z-20 xl:bg-[#F3F4FF] flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between py-4">
          <div className="hidden xl:flex md:hidden items-center bg-white xl:ml-10 rounded-full w-88 px-5 py-3 shadow-sm">
            <img src={Searchicon} alt="search" className="w-5 h-5" />

            <input
              type="text"
              placeholder="Search here..."
              className="flex-1 ml-3 bg-transparent outline-none text-sm text-[#A098AE]"
            />
          </div>

          <div className=" md:fixed md:top-0 md:mt-13 bg-[#F3F4FF] w-100 lg:static lg:mt-0 fixed top-0 mt-15 flex items-center  py-6 gap-4">
            <button className="flex ml-20 md:ml-0 lg:ml-0 xl:ml-15 items-center gap-2 bg-white px-5 py-3 rounded-full shadow-sm text-[#303972] font-medium">
              Newest
              <img src={dropdown} alt="dropdown" className="w-4 h-4" />
            </button>

            <NavLink to="/newstudent">
              <button className="flex items-center cursor-pointer gap-2 bg-[#4D44B5] text-white px-5 py-3  rounded-full shadow-sm font-medium">
                <img src={sign} alt="add" className="w-4 h-4" />
                New Student
              </button>
            </NavLink>
          </div>
        </div>

        {/* STUDENT TABLE GOES HERE */}

        <div className="lg:mt-10 md:mt-15 mt-20 bg-white rounded-xl shadow-sm overflow-hidden">
          {/* HEADER */}
          <div className=" hidden xl:grid lg:grid md:grid grid-cols-13 gap-4 px-6 py-4 bg-[#F7F8FF] text-[12px] font-semibold text-[#6B6F7B] uppercase tracking-wider">
            {/* NAME (WIDER) */}
            <div className="col-span-3 flex items-center gap-2">
              <img src={check} alt="" className="w-4 h-4" />
              <span>Name</span>
            </div>

            {/* ID */}
            <p className="col-span-1">ID</p>

            <p className="col-span-2 md:ml-6">Date</p>
            <p className="col-span-2">Parent</p>
            <p className="col-span-1">City</p>
            <p className="col-span-2 md:ml-3">Contact</p>
            <p className="col-span-1">Grade</p>
            <p className="col-span-1 text-center">Action</p>
          </div>

          {/* ROWS */}
          {StudentData.map((student) => {
            const gradeColor =
              student.grade === "A"
                ? "bg-green-100 text-green-700"
                : student.grade === "B"
                  ? "bg-blue-100 text-blue-700"
                  : student.grade === "C"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700";

            return (
              <div
                key={student.id}
                onClick={() => navigate(`/students/${student.id}`)}
                className="
                  flex flex-col md:grid md:grid-cols-13
                  gap-2 md:gap-4
                  px-4 md:px-6 py-4
                  border-b
                  hover:bg-[#F9FAFF]
                  cursor-pointer
                  transition
                "
              >
                {/* mobile */}
                <div className="md:hidden flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[#303972]">
                      {student.name}
                    </span>

                    <span
                      className={`px-2 py-1 text-xs rounded-full ${gradeColor}`}
                    >
                      {student.grade}
                    </span>
                  </div>

                  <p className="text-sm text-gray-500">ID: {student.id}</p>
                  <p className="text-sm text-gray-500">{student.parent}</p>
                  <p className="text-sm text-gray-500">{student.city}</p>
                </div>
                {/* NAME (NO WRAP + WIDE) */}
                <div className=" hidden col-span-3 lg:flex md:flex items-center gap-2 font-medium whitespace-nowrap">
                  <img src={check} alt="" className="w-4 h-4" />
                  <span className="truncate">{student.name}</span>
                </div>

                {/* ID */}
                <p className="hidden lg:flex md:flex col-span-1 text-[#6B6F7B] font-medium whitespace-nowrap">
                  {student.id}
                </p>

                <p className="hidden lg:flex md:flex md:mt-1 md:ml-4 col-span-2 text-[#6B6F7B] text-[10px]">
                  {student.date}
                </p>

                <p className="hidden lg:flex md:flex col-span-2 font-medium truncate">
                  {student.parent}
                </p>

                <p className=" hidden lg:flex md:flex col-span-1 text-[#6B6F7B]">
                  {student.city}
                </p>

                <p className="hidden col-span-2 lg:flex md:flex text-[#6B6F7B] gap-5 ml-3 truncate">
                  <img src={image} alt="" className="w-4 h-4" />
                  <img src={image2} alt="" className="w-4 h-4" />
                  {/* {student.contact} */}
                </p>

                {/* GRADE */}
                <div className="hidden lg:flex md:flex col-span-1">
                  <span
                    className={`px-3 py-1 text-xs rounded-full font-semibold ${gradeColor}`}
                  >
                    {student.grade}
                  </span>
                </div>

                {/* ACTION */}
                <div className="hidden lg:flex md:flex col-span-1 xl:flex justify-center">
                  <button className="px-3 py-1 text-xs rounded-md font-bold text-[14px] transition">
                    ....
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default Students;
