import React from "react";
import Wrapper from "./Wrapper";
import Print from "../assets/print.png";
import Searchicon from "../assets/Search.png";
import Placeholder from "../assets/Placeholder.png";
import Bell from "../assets/bell.png";
import gear from "../assets/gear.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import icon8 from "../assets/icon8.png";
import line from "../assets/line.png";
import PerformanceChart from "./PerformanceChart";
import icon17 from "../assets/icon17.png";

const Finance = () => {
  const students = [
    "Samantha William",
    "Tony Soap",
    "Jordan Nico",
    "Karen Hope",
    "Nadila Adja",
  ];

  const expenses = [
    {
      id: "#123456789",
      date: "12 May 2026",
      amount: "$50,036",
      status: "Complete",
    },
    {
      id: "#123456790",
      date: "15 May 2026",
      amount: "$32,500",
      status: "Pending",
    },
    {
      id: "#123456791",
      date: "18 May 2026",
      amount: "$12,000",
      status: "Failed",
    },
    {
      id: "#123456792",
      date: "20 May 2026",
      amount: "$8,500",
      status: "Complete",
    },
    {
      id: "#123456793",
      date: "25 May 2026",
      amount: "$15,250",
      status: "Pending",
    },
  ];
  return (
    <div className="min-h-screen xl:ml-80 bg-[#F3F4FF]">
      <Wrapper>
        {/* HEADER */}
        <div className="sticky  xl:fixed  top-0 xl:left-80 xl:right-5 z-20 bg-[#F3F4FF] py-4 xl:pt-8 xl:px-10 flex flex-col lg:flex-row justify-between items-end md:items-end lg:items-center gap-4">
          {/* TITLE */}
          <h1 className="text-[36px] font-bold text-[#303972]">Finance</h1>

          {/* SEARCH */}
          <div className="flex items-center bg-white rounded-full px-4 py-2 w-full lg:w-80 shadow-sm">
            <img src={Searchicon} className="w-5 h-5" />
            <input
              type="text"
              placeholder="Search here..."
              className="ml-3 flex-1 outline-none bg-transparent text-sm text-gray-500"
            />
          </div>

          {/* RIGHT ACTIONS */}
          <div className="xl:flex hidden md:hidden items-center gap-6">
            <img src={Bell} className="w-7 h-7 cursor-pointer" />
            <img src={gear} className="w-7 h-7 cursor-pointer" />

            <div className="flex items-center gap-3">
              <div className="text-right">
                <h1 className="text-[14px] font-bold text-[#303972]">
                  Nabila A.
                </h1>
                <p className="text-[12px] text-[#A098AE]">Admin</p>
              </div>

              <img src={Placeholder} className="w-12 h-12 rounded-full" />
            </div>
          </div>
        </div>

        {/* CARDS SECTION */}
        <div className="mt-10 xl:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* STUDENTS */}
          <div className="col-span-1 flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm">
            <img src={icon5} className="w-10 h-10" />

            <div>
              <h1 className="text-[14px] text-[#A098AE]">Total Students</h1>
              <p className="text-[24px] font-bold text-[#303972]">932</p>
              <p className="text-[14px] text-[#A098AE]">
                <span className="text-green-500">+10% </span>than last month
              </p>
            </div>
          </div>

          {/* TEACHERS */}
          <div className="col-span-1 flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm">
            <img src={icon6} className="w-10 h-10" />

            <div>
              <h1 className="text-[14px] text-[#A098AE]">Total Teachers</h1>
              <p className="text-[24px] font-bold text-[#303972]">754</p>
              <p className="text-[14px] text-[#A098AE]">
                <span className="text-red-500">+10% </span>than last month
              </p>
            </div>
          </div>

          {/* EVENTS (WIDER CARD) */}
          <div className="col-span-1 sm:col-span-2 flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm">
            <img src={icon8} className="w-10 h-10" />

            <div>
              <h1 className="text-[14px] text-[#A098AE]">School Performance</h1>
              <p className="text-[24px] font-bold text-[#303972]">40</p>
              <p className="text-[14px] text-[#A098AE]">
                <span className="text-green-500">+23% </span>than last month
              </p>
            </div>
            <div className="hidden sm:block w-40 ml-10">
              <img src={line} alt="" />
            </div>
          </div>
        </div>

        {/* FUTURE SECTION PLACEHOLDER */}
        <div className="mt-10">
          <PerformanceChart text="Balance Analytics" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="bg-white rounded-lg shadow-md mt-6 lg:mt-25 p-5 w-full lg:w-auto">
            <h1 className="text-[24px] text-[#303972] font-extrabold mb-6">
              Unpaid Student Intuition
            </h1>

            {students.map((student, index) => (
              <div
                key={index}
                className="flex flex-wrap lg:grid lg:grid-cols-[2.5fr_1.5fr_1.5fr_1fr_80px] items-center gap-4 py-4 border-b border-gray-100 last:border-b-0"
              >
                {/* Student */}
                <div className="flex items-center gap-3 w-full lg:w-auto">
                  <img src={Placeholder} alt="" className="w-8 h-8" />
                  <h1 className="text-[18px] font-bold text-[#303972]">
                    {student}
                  </h1>
                </div>

                {/* ID */}
                <h3 className="text-[14px] text-[#4D44B5]">ID 123456789</h3>

                {/* Class */}
                <div className="flex items-center gap-3">
                  <img src={icon6} alt="" className="w-8 h-8" />
                  <div>
                    <p className="text-[14px] text-gray-500">Class</p>
                    <span className="text-[14px] font-semibold text-[#303972]">
                      VII A
                    </span>
                  </div>
                </div>

                {/* Amount */}
                <h3 className="text-[14px] font-semibold text-[#303972]">
                  $50,036
                </h3>

                {/* Actions */}
                <div className="flex items-center justify-end gap-3 ml-auto lg:ml-0">
                  <img src={Print} alt="" className="w-6 h-6 cursor-pointer" />
                  <p className="text-[#A098AE] text-xl cursor-pointer">...</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl h-auto lg:h-150 shadow-sm mt-6 lg:mt-24 p-6 w-full lg:w-110">
            <h1 className="text-[24px] font-bold text-[#303972] mb-6">
              School Expenses
            </h1>

            {expenses.map((expense, index) => (
              <div
                key={index}
                className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-2 py-4 border-b border-gray-100 last:border-b-0"
              >
                {/* Left Side */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F3F4FF] flex items-center justify-center">
                    <img src={icon17} alt="" className="w-5 h-5" />
                  </div>

                  <div>
                    <h2 className="text-[12px] font-bold text-[#303972]">
                      {expense.id}
                    </h2>
                    <p className="text-[10px] text-[#A098AE]">{expense.date}</p>
                  </div>
                </div>

                {/* Amount */}
                <p className="text-[12px] font-semibold text-[#303972]">
                  {expense.amount}
                </p>

                {/* Status */}
                <span
                  className={`px-4 py-2 rounded-full text-[10px] font-semibold ${
                    expense.status === "Complete"
                      ? "bg-green-100 text-green-600"
                      : expense.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                  }`}
                >
                  {expense.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Finance;
