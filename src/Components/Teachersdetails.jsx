import React from "react";
import { NavLink, useParams } from "react-router-dom";
import Wrapper from "./Wrapper";
import teachersData from "./Teachersdata";
import Masking from "../assets/Masking.png";
import Bell from "../assets/bell.png";
import gear from "../assets/gear.png";
import Placeholder from "../assets/Placeholder.png";
import Phone from "../assets/Phone.png";
import Mail from "../assets/Mail.png";
import Searchicon from "../assets/Search.png";
import dropdown from "../assets/dropdown.png";
import sign from "../assets/sign.png";
import Phone1 from "../assets/Phone1.png";
import Mail1 from "../assets/Mail1.png";
import location from "../assets/location1.png";
import Btn from "./Btn";

const Teachersdetails = () => {
  const { id } = useParams();
  const teacher = teachersData.find((t) => t.id === Number(id));

  if (!teacher) {
    return <div className="p-6 text-red-500">Teacher not found</div>;
  }

  return (
    <div className="bg-[#F3F4FF] lg:h-383 xl:h-270  h-500 xl:ml-80 md:h-500 min-h-screen">
      <Wrapper>
        {/* TOP BAR */}
        <div className="sticky  xl:fixed top-0 xl:left-80 xl:right-5 z-20 bg-[#F3F4FF] py-4 xl:pt-8 xl:px-10 flex flex-col lg:flex-row justify-between items-end md:items-end lg:items-center gap-4">
          <h1 className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold text-[#303972] lg:mt-4 xl:mt-0">
            Teachers Details
          </h1>

          <div className="lg:flex hidden md:hidden  items-center bg-white rounded-full md:w-full w-full lg:w-65 ml-20 px-5 py-3 shadow-sm">
            <img src={Searchicon} alt="Search" className="w-5 h-5" />
            <input
              type="text"
              placeholder="Search here..."
              className="flex- ml-3 bg-transparent outline-none text-sm text-[#A098AE]"
            />
          </div>

          <div className="hidden items-center gap-6 md:hidden lg:flex">
            <div className="bg-white rounded-full p-2">
              <img
                src={Bell}
                alt="Notifications"
                className="w-5 h-5 cursor-pointer"
              />
            </div>
            <div className="bg-white rounded-full p-2">
              <img
                src={gear}
                alt="Settings"
                className="w-5 h-5 cursor-pointer"
              />
            </div>
            <div className="flex items-center gap-3 ">
              <div className="text-right">
                <h2 className="text-[12px] font-bold text-[#303972]">
                  Nabila A.
                </h2>
                <p className="text-[10px] text-[#A098AE]">Admin</p>
              </div>
              <img
                src={Placeholder}
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
            </div>
          </div>
        </div>

        {/* SEARCH + ACTIONS */}
        <div className="flex items-center justify-between mt-2">
          {/* <div className="flex items-center py-6 gap-4">
            <button className="flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-sm text-[#303972] font-medium">
              Newest
              <img src={dropdown} alt="Dropdown" className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 bg-[#4D44B5] text-white px-5 py-3 rounded-full shadow-sm font-medium">
              <img src={sign} alt="Add" className="w-4 h-4" />
              New Student
            </button>
          </div> */}
        </div>

        <div className="flex lg:flex-row flex-col ml-15 md:ml-0 xl:p-0 md:flex-col md:items-center gap-6 items-start xl:mt-20">
          {/* PROFILE CARD */}
          <div className="mt-10">
            {/* Banner */}
            <div className="bg-[#4D44B5] rounded-t-2xl h-32 w-140 relative overflow-hidden">
              <img
                src={Masking}
                alt=""
                className="w-full h-full object-cover opacity-30"
              />
            </div>

            {/* White card body */}
            <div className="bg-white rounded-b-2xl px-10 w-140 h-160 pt-16 pb-8 relative shadow-sm">
              {/* Avatar — overlaps banner */}
              <div className="absolute -top-12 left-10">
                <img
                  src={Placeholder}
                  alt="Teacher"
                  className="w-24 h-24 rounded-full border-4 border-white object-cover shadow"
                />
              </div>

              {/* Teacher Info */}
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-[26px] font-extrabold text-[#303972]">
                    {teacher.name}
                  </h1>
                  <p className="text-[#A098AE] mt-1">
                    {teacher.subject} Teacher
                  </p>
                  {/* <p className="text-[#A098AE] mt-1">{teacher.expertise}</p> */}
                  <div className="flex gap-4 mt-3">
                    <div className="flex flex-row gap-2">
                      <img
                        src={location}
                        alt=""
                        className="w-6 h-6 cursor-pointer"
                      />
                      <p className="text-[#303972] text-[14px] ">
                        {" "}
                        {teacher.location}{" "}
                      </p>
                    </div>

                    <div className="flex flex-row gap-2">
                      <img
                        src={Phone1}
                        alt="Phone"
                        className="w-6 h-6 cursor-pointer"
                      />
                      <p className="text-[#303972] text-[14px] ">
                        {teacher.contact}
                      </p>
                    </div>
                    <div className="flex flex-row gap-2">
                      <img
                        src={Mail1}
                        alt="Mail"
                        className="w-6 h-6 cursor-pointer"
                      />

                      <p className="text-[#303972] text-[14px] ">
                        {teacher.email}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Grid */}
              {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-[#F3F4FF] p-5 rounded-2xl">
                  <h2 className="text-[#A098AE] text-sm mb-1">Department</h2>
                  <p className="font-bold text-[#303972]">
                    {teacher.department}
                  </p>
                </div>
                <div className="bg-[#F3F4FF] p-5 rounded-2xl">
                  <h2 className="text-[#A098AE] text-sm mb-1">Experience</h2>
                  <p className="font-bold text-[#303972]">
                    {teacher.experience}
                  </p>
                </div>
                <div className="bg-[#F3F4FF] p-5 rounded-2xl">
                  <h2 className="text-[#A098AE] text-sm mb-1">Class</h2>
                  <p className="font-bold text-[#303972]">{teacher.class}</p>
                </div>
              </div> */}

              {/* Bio */}
              <div className="mt-6">
                <h2 className="font-bold text-[#303972] mb-2">About :</h2>
                <p className="text-[#303972] leading-relaxed">
                  {teacher.about}
                </p>
              </div>

              <div className="mt-6">
                <h2 className="font-bold text-[#303972] mb-2">Education:</h2>
                <p className="text-[#303972] text-[16px] font-semibold">
                  {teacher.education}
                </p>
                <p className="text-[#A098AE] text-[14px]">{teacher.date}</p>

                <p className="text-[#303972] text-[16px] font-semibold mt-6">
                  {teacher.education2}
                </p>
                <p className="text-[#A098AE] text-[14px]">{teacher.date2}</p>
              </div>

              <div className="mt-6">
                <h2 className="font-bold text-[#303972] mb-2">Expertise:</h2>
                <p className="text-[#303972] text-[16px] font-semibold">
                  {teacher.expertise}
                </p>
              </div>
            </div>
          </div>

          {/* SCHEDULE CARD */}
          <div className=" md:ml-10  w-142 lg:mr-0  mr-15 xl:w-75 lg-w-120 md:w-140 md:mr-10 h-182">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <h1 className="text-[20px] font-bold text-[#303972]">
                  Schedule Details
                </h1>

                <p className="text-[#A098AE] mt-2">
                  Thursday, 10th April, 2021
                </p>
              </div>

              <div className="mt-6 space-y-4">
                {/* Schedule 1 */}
                <div className="bg-white border-l-8 mt-6 border-[#4D44B5] rounded-xl p-4 shadow-sm">
                  <h2 className="font-bold text-[#303972]">
                    Mathematics Class
                  </h2>
                  <p className="text-[#A098AE] text-sm">09:00 AM - 10:30 AM</p>
                  <p className="text-[#A098AE] text-sm">SS2A Classroom</p>
                </div>

                {/* Schedule 2 */}
                <div className="bg-white border-l-8 mt-6 border-[#FB7D5B] rounded-xl p-4 shadow-sm">
                  <h2 className="font-bold text-[#303972]">
                    Physics Practical
                  </h2>
                  <p className="text-[#A098AE] text-sm">11:00 AM - 12:30 PM</p>
                  <p className="text-[#A098AE] text-sm">Science Laboratory</p>
                </div>

                {/* Schedule 3 */}
                <div className="bg-white border-l-8 mt-6 border-[#FCC43E] rounded-xl p-4 shadow-sm">
                  <h2 className="font-bold text-[#303972]">Staff Meeting</h2>
                  <p className="text-[#A098AE] text-sm">01:00 PM - 02:00 PM</p>
                  <p className="text-[#A098AE] text-sm">Conference Room</p>
                </div>

                {/* Schedule 4 */}
                <div className="bg-white border-l-8 mt-6 border-[#303972] rounded-xl p-4 shadow-sm">
                  <h2 className="font-bold text-[#303972]">Grade Submission</h2>
                  <p className="text-[#A098AE] text-sm">02:30 PM - 03:00 PM</p>
                  <p className="text-[#A098AE] text-sm">Academic Portal</p>
                </div>
              </div>
            </div>

            <div>
              <Btn
                text="View More"
                className="bg-[#4D44B51A] text-[#4D44B5] text-[16px] sm:text-[18px] flex justify-center lg:mt-5 sm:mt-10 font-bold rounded-[40px] text-center w-full h-12 sm:h-15"
              />

              <NavLink to="/teachers" className="w-full sm:w-auto">
                <Btn
                  text="Back"
                  className="w-full mt-5 bg-blue-800 text-white rounded-[20px] px-8 py-3 flex items-center justify-center"
                />
              </NavLink>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Teachersdetails;
