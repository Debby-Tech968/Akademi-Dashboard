import React from "react";
import Searchicon from "../assets/Search.png";
import Wrapper from "./Wrapper";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import icon7 from "../assets/icon7.png";
import icon8 from "../assets/icon8.png";
import Placeholder from "../assets/Placeholder.png";
import Bell from "../assets/bell.png";
import gear from "../assets/gear.png";
import mail from "../assets/mail button.png";
import Btn from "./Btn";
import Placeholder1 from "../assets/Placeholder1.png";
import PerformanceChart from "./PerformanceChart";
import SchoolCalendar from "./SchoolCalender";
import SchoolFinance from "./SchoolFinance";
import Print from "../assets/Print.png";
// import StudentTable from "./StudentTable";

const Dashboard = () => {
  const students = [
    "Samantha William",
    "Tony Soap",
    "Jordan Nico",
    "Karen Hope",
    "Nadila Adja",
  ];

  const recentStudents = [
    { name: "Samantha William", className: "Class VII A" },
    { name: "Tony Soap", className: "Class VII A" },
    { name: "Karen Hope", className: "Class VII A" },
    { name: "Jordan Nico", className: "Class VII B" },
    { name: "Nadila Adja", className: "Class VII B" },
  ];

  const messages = [
    {
      name: "Samantha William",
      preview: "Lorem ipsum dolor...",
      time: "12:45 PM",
    },
    { name: "Tony Soap", preview: "Lorem ipsum dolor...", time: "12:45 PM" },
    { name: "Jordan Nico", preview: "Lorem ipsum dolor...", time: "12:45 PM" },
    { name: "Nadila Adja", preview: "Lorem ipsum dolor...", time: "12:45 PM" },
  ];

  const foodMenu = [
    {
      title: "Beef Steak with Fried Potato",
      desc: "Lorem ipsum dolor sit amet...",
    },
    { title: "Pancake with Honey", desc: "Lorem ipsum dolor sit amet..." },
    { title: "Japanese Beef Ramen", desc: "Lorem ipsum dolor sit amet..." },
  ];

  return (
    <div className="flex flex-col xl:flex-row min-h-screen w-full xl:ml-80 xl:w-[calc(100%-20rem)]">
      {/* Main area - LEFT side */}
      <div className="flex flex-1 min-w-0 h-auto bg-[#F3F4FF] min-h-screen">
        <Wrapper>
          {/* Navbar - sticky below xl, truly fixed (no scroll-recompute) at xl */}
          <div className="sticky xl:fixed top-0 xl:left-80 xl:right-75 z-10 xl:z-20 bg-[#F3F4FF] pb-4 xl:pt-8  xl:px-10 flex flex-col gap-4 sm:flex-col sm:items-end xl:items-center xl:flex-row sm:mt-2 lg:mt-0 sm:justify-between">
            <h1 className="text-[28px] text-end sm:text-[32px] lg:text-[36px] text-[#303972] font-bold">
              Dashboard
            </h1>

            {/* Search bar */}
            <div className="flex flex-row items-center bg-white rounded-full w-full sm:w-80 px-4 py-2 gap-3">
              <img src={Searchicon} alt="Search" className="w-5 h-5 shrink-0" />
              <input
                type="text"
                placeholder="Search here....."
                className="flex-1 outline-none bg-transparent text-sm text-gray-500 min-w-0"
              />
            </div>
          </div>

          {/* Spacer: reserves the space the header used to occupy in-flow, now that it's removed from flow via xl:fixed. Adjust xl:h-28 if you see a gap or overlap. */}
          <div className="hidden xl:block xl:h-28" aria-hidden="true" />

          {/* Page content goes here */}

          <div className="bg-[#FFFFFF] rounded-2xl grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 p-4 sm:p-6 mt-6 sm:mt-10 shadow-sm">
            <div className="flex flex-row items-center gap-3 sm:gap-4">
              <img src={icon5} alt="icon" className="h-8 w-8 sm:h-10 sm:w-10" />
              <div>
                <h1 className="text-[14px] sm:text-[16px] text-[#A098AE]">
                  Students
                </h1>
                <p className="text-[20px] sm:text-[24px] font-bold text-[#303972]">
                  932
                </p>
              </div>
            </div>

            <div className="flex flex-row items-center gap-3 sm:gap-4">
              <img src={icon6} alt="icon" className="h-8 w-8 sm:h-10 sm:w-10" />
              <div>
                <h1 className="text-[14px] sm:text-[16px] text-[#A098AE]">
                  Teachers
                </h1>
                <p className="text-[20px] sm:text-[24px] font-bold text-[#303972]">
                  754
                </p>
              </div>
            </div>

            <div className="flex flex-row items-center gap-3 sm:gap-4">
              <img src={icon8} alt="icon" className="h-8 w-8 sm:h-10 sm:w-10" />
              <div>
                <h1 className="text-[14px] sm:text-[16px] text-[#A098AE]">
                  Event
                </h1>
                <p className="text-[20px] sm:text-[24px] font-bold text-[#303972]">
                  40
                </p>
              </div>
            </div>

            <div className="flex flex-row items-center gap-3 sm:gap-4">
              <img src={icon7} alt="icon" className="h-8 w-8 sm:h-10 sm:w-10" />
              <div>
                <h1 className="text-[14px] sm:text-[16px] text-[#A098AE]">
                  Food
                </h1>
                <p className="text-[20px] sm:text-[24px] font-bold text-[#303972]">
                  32k
                </p>
              </div>
            </div>
          </div>

          <PerformanceChart text="School Performance"/>

          <div className="flex flex-col md:flex-row gap-6 mt-12 sm:mt-16 lg:mt-25 items-stretch">
            <div className="flex-1 min-w-0">
              <SchoolCalendar />
            </div>
            <div className="flex-1 min-w-0">
              <SchoolFinance />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md mt-12 sm:mt-16 lg:mt-25 p-4 sm:p-5">
            <h1 className="text-[20px] sm:text-[24px] text-[#303972] font-extrabold mb-6">
              Unpaid Student Intuition
            </h1>

            {students.map((student, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 md:grid md:grid-cols-[2fr_1.3fr_1.3fr_1fr_60px] lg:grid-cols-[2.5fr_1.5fr_1.5fr_1fr_80px] md:items-center md:gap-4 py-4 border-b border-gray-100 last:border-b-0"
              >
                {/* Student + mobile actions */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={Placeholder}
                      alt=""
                      className="w-8 h-8 shrink-0"
                    />
                    <h1 className="text-[16px] xl:text-[14px] md:text-[18px] font-bold text-[#303972] truncate">
                      {student}
                    </h1>
                  </div>
                  <div className="flex items-center gap-3 md:hidden shrink-0">
                    <img
                      src={Print}
                      alt=""
                      className="w-6 h-6 cursor-pointer"
                    />
                    <p className="text-[#A098AE] text-xl cursor-pointer">...</p>
                  </div>
                </div>

                {/* ID */}
                <h3 className="text-[14px] text-[#4D44B5] pl-11 md:pl-0">
                  ID 123456789
                </h3>

                {/* Class */}
                <div className="flex items-center gap-3 pl-11 md:pl-0">
                  <img src={icon6} alt="" className="w-8 h-8" />
                  <div>
                    <p className="text-[14px] text-gray-500">Class</p>
                    <span className="text-[14px] font-semibold text-[#303972]">
                      VII A
                    </span>
                  </div>
                </div>

                {/* Amount */}
                <h3 className="text-[14px] font-semibold text-[#303972] pl-11 md:pl-0">
                  $50,036
                </h3>

                {/* Actions (desktop/tablet) */}
                <div className="hidden md:flex items-center justify-end gap-3">
                  <img src={Print} alt="" className="w-6 h-6 cursor-pointer" />
                  <p className="text-[#A098AE] text-xl cursor-pointer">...</p>
                </div>
              </div>
            ))}
          </div>
        </Wrapper>
      </div>

      {/* Sidebar - RIGHT side, hidden on mobile/tablet (incl. iPad mini), visible from xl up */}
      <div className="hidden xl:block xl:w-75 bg-white h-auto min-h-screen shrink-0">
        <Wrapper>
          <div className="w-full  lg:max-w-none">
            {/* Top bar: bell / gear / profile */}
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-4 sm:gap-5">
                <img
                  src={Bell}
                  alt=""
                  className="w-7 h-7 sm:w-8 sm:h-8 shrink-0"
                />
                <img
                  src={gear}
                  alt=""
                  className="w-7 h-7 sm:w-8 sm:h-8 shrink-0"
                />
              </div>

              <div className="flex items-center gap-3 min-w-0">
                <div className="min-w-0 text-right">
                  <h1 className="text-[14px] text-[#303972] font-bold truncate max-w-22.5">
                    Nabila A.
                  </h1>
                  <p className="text-[#A098AE] text-[14px]">Admin</p>
                </div>
                <img
                  src={Placeholder}
                  alt=""
                  className="h-10 w-10 sm:h-12 sm:w-12 shrink-0"
                />
              </div>
            </div>

            {/* Recent Students Header */}
            <div className="flex items-center justify-between gap-3 mt-7">
              <div className="min-w-0">
                <h2 className="text-[16px] font-bold text-[#303972]">
                  Recent Students
                </h2>
                <p className="text-[#A098AE] text-[13px]">
                  You have 456 students
                </p>
              </div>
              <button className="w-12 h-12 rounded-full bg-[#303972] text-white flex items-center justify-center text-lg hover:bg-[#252d5c] transition-colors shrink-0">
                +
              </button>
            </div>

            {recentStudents.map((student) => (
              <div
                key={student.name}
                className="flex items-center justify-between gap-3 mt-5 min-w-0"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={Placeholder}
                    alt=""
                    className="w-10 h-10 sm:w-12 sm:h-12 shrink-0"
                  />
                  <div className="min-w-0">
                    <h1 className="text-[14px] text-[#303972] font-bold truncate">
                      {student.name}
                    </h1>
                    <p className="text-[14px] text-[#A098AE] truncate">
                      {student.className}
                    </p>
                  </div>
                </div>

                <img
                  src={mail}
                  alt=""
                  className="h-10 w-10 sm:h-12 sm:w-12 shrink-0"
                />
              </div>
            ))}

            <Btn
              text="View More"
              className="bg-[#4D44B51A] text-[#4D44B5] text-[16px] sm:text-[18px] flex justify-center mt-8 sm:mt-10 font-bold rounded-[40px] text-center w-full h-12 sm:h-15"
            />

            {/* Messages */}
            <div>
              <h1 className="text-[20px] sm:text-[24px] text-[#303972] font-extrabold mt-10">
                Messages
              </h1>

              {messages.map((message) => (
                <div
                  key={message.name}
                  className="flex items-center justify-between gap-3 border-b border-[#A098AE] pb-3 mt-5 min-w-0"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={Placeholder}
                      alt=""
                      className="w-10 h-10 sm:w-12 sm:h-12 shrink-0"
                    />
                    <div className="min-w-0">
                      <h1 className="text-[14px] text-[#303972] font-bold truncate">
                        {message.name}
                      </h1>
                      <p className="text-[14px] text-[#A098AE] truncate">
                        {message.preview}
                      </p>
                    </div>
                  </div>

                  <p className="text-[#A098AE] text-[14px] shrink-0">
                    {message.time}
                  </p>
                </div>
              ))}

              <Btn
                text="View More"
                className="bg-[#4D44B51A] text-[#4D44B5] text-[16px] sm:text-[18px] flex justify-center mt-8 sm:mt-10 font-bold rounded-[40px] text-center w-full h-12 sm:h-15"
              />
            </div>

            {/* Current Foods Menu */}
            <div>
              <h1 className="text-[20px] sm:text-[24px] text-[#303972] font-extrabold mt-8">
                Current Foods Menu
              </h1>

              {foodMenu.map((item, index) => (
                <div key={item.title} className={index === 0 ? "mt-5" : "mt-7"}>
                  <img
                    src={Placeholder1}
                    alt=""
                    className="shadow-lg w-full h-auto rounded-lg object-cover"
                  />
                  <div className="mt-4 sm:mt-7">
                    <h1 className="text-[16px] sm:text-[18px] text-[#363B64] font-bold">
                      {item.title}
                    </h1>
                    <p className="text-[14px] text-[#A098AE]">{item.desc}</p>
                  </div>
                </div>
              ))}

              <Btn
                text="View More"
                className="bg-[#4D44B51A] text-[#4D44B5] text-[16px] sm:text-[18px] flex justify-center mt-8 sm:mt-10 font-bold rounded-[40px] text-center w-full h-12 sm:h-15"
              />
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Dashboard;
