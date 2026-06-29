import React from "react";
import { NavLink, useParams } from "react-router-dom";
import StudentData from "./StudentData";
import Wrapper from "./Wrapper";
import detailicon from "../assets/detailicon.png";
import Masking from "../assets/Masking.png";
import Bell from "../assets/bell.png";
import gear from "../assets/gear.png";
import Placeholder from "../assets/Placeholder.png";
import Location from "../assets/location.png";
import Phone1 from "../assets/phone1.png";
import Mail1 from "../assets/mail1.png";
import Btn from "./Btn";


const Studentdetails = () => {
  const { id } = useParams();

  const student = StudentData.find((s) => s.id.toString() === id);

  if (!student) {
    return (
      <div className="p-10 text-center text-red-500 font-semibold">
        Student not found
      </div>
    );
  }

  return (
    <div className="bg-[#F3F4FF] xl:ml-80 min-h-screen">
      <Wrapper>
        {/* HEADER */}
        <div className="sticky  xl:fixed top-0 xl:left-80 xl:right-5 z-20 bg-[#F3F4FF] py-4 xl:pt-8 xl:px-10 flex flex-col lg:flex-row justify-between items-end md:items-end lg:items-center gap-4">
          <h1 className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold text-[#303972] lg:mt-4 xl:mt-0">
            Student Details
          </h1>

          <div className="lg:flex hidden items-center gap-4 sm:gap-6">
            <img
              src={Bell}
              className="w-6 h-6 sm:w-7 sm:h-7"
              alt="Notifications"
            />
            <img src={gear} className="w-6 h-6 sm:w-7 sm:h-7" alt="Settings" />

            <div className="text-right hidden sm:block">
              <h2 className="text-[14px] font-bold text-[#303972]">Admin</h2>
              <p className="text-[12px] text-[#A098AE]">Dashboard</p>
            </div>

            <img
              src={Placeholder}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
              alt="Admin avatar"
            />
          </div>
        </div>

        {/* MAIN LAYOUT */}
        <div className="flex flex-col gap-6 mt-20">
          {/* TOP: PROFILE + SCHEDULE */}
          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            {/* PROFILE CARD — gets a bigger share of the row */}
            <div className="w-full lg:flex-3 flex flex-col">
              <div className="bg-[#4D44B5] w-full rounded-t-[20px] overflow-hidden">
                <img src={Masking} alt="" className="w-full" />
              </div>

              <div className="bg-white w-full flex-1 rounded-b-[20px]">
                <div className="relative">
                  <div className="absolute -top-12 left-6 sm:left-10">
                    <img
                      src={Placeholder}
                      alt="Student"
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white object-cover shadow"
                    />
                  </div>
                </div>
                <div className="p-6 sm:p-10">
                  <h1 className="text-[18px] mt-7 sm:mt-3 font-bold text-[#303972]">
                    {student.name}
                  </h1>

                  <div className="flex flex-wrap gap-x-10 gap-y-5 mt-5">
                    <div>
                      <h2 className="text-[#303972] font-bold text-[14px]">
                        Parent Name
                      </h2>
                      <p className="text-[#A098AE] text-[14px] mt-2">
                        {student.parent}
                      </p>
                    </div>

                    <div>
                      <h2 className="text-[#303972] font-bold text-[14px]">
                        Address
                      </h2>
                      <div className="flex items-center gap-1 mt-2">
                        <img src={Location} alt="" className="w-5 h-5" />
                        <p className="text-[#A098AE] text-[14px]">
                          {student.city}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-[#303972] font-bold text-[14px]">
                        Phone Number
                      </h2>
                      <div className="flex items-center gap-2 mt-2">
                        <img src={Phone1} alt="" className="w-8 h-8" />
                        <p className="text-[#303972] text-[14px] font-medium">
                          {typeof student.contact === "string"
                            ? student.contact
                            : "N/A"}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-[#303972] font-bold text-[14px]">
                        Email
                      </h2>
                      <div className="flex items-center gap-3 mt-2">
                        <img src={Mail1} alt="" className="w-8 h-8" />
                        <p className="text-[#303972] text-[14px] font-medium break-all">
                          {student.email || ""}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SCHEDULE — smaller share than the profile card */}
            <div className="w-full lg:flex-2 bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#303972]">
                Schedule Details
              </h2>

              <p className="text-[#A098AE] mt-1">Today's Classes</p>

              <div className="mt-6 space-y-4">
                <div className="border-l-4 border-[#4D44B5] p-4 rounded-xl shadow-sm">
                  <p className="font-bold text-[#303972]">Mathematics</p>
                  <p className="text-sm text-gray-500">09:00 AM - 10:30 AM</p>
                  <p className="text-sm text-gray-500">SS2A Classroom</p>
                </div>

                <div className="border-l-4 border-[#FB7D5B] p-4 rounded-xl shadow-sm">
                  <p className="font-bold text-[#303972]">Physics Practical</p>
                  <p className="text-sm text-gray-500">11:00 AM - 12:30 PM</p>
                  <p className="text-sm text-gray-500">Science Laboratory</p>
                </div>

                <div className="border-l-4 border-[#FCC43E] p-4 rounded-xl shadow-sm">
                  <p className="font-bold text-[#303972]">Staff Meeting</p>
                  <p className="text-sm text-gray-500">01:00 PM - 02:00 PM</p>
                  <p className="text-sm text-gray-500">Conference Room</p>
                </div>

                <div className="border-l-4 border-[#303972] p-4 rounded-xl shadow-sm">
                  <p className="font-bold text-[#303972]">Grade Submission</p>
                  <p className="text-sm text-gray-500">02:30 PM - 03:00 PM</p>
                  <p className="text-sm text-gray-500">Academic Portal</p>
                </div>
              </div>
            </div>
          </div>

          {/* PAYMENT HISTORY */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-[#303972] mb-4">
              Payment History
            </h2>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 border-b border-gray-100 pb-4 mb-4">
              <div className="flex flex-row items-center gap-5">
                <img src={detailicon} alt="" className="w-10 h-10" />
                <p className="text-[#303972] font-extrabold">#123456789</p>
              </div>
              <p className="text-[#A098AE]">2 March 2021, 13:45 PM</p>
              <p className="text-[#303972] font-extrabold">$ 50,036</p>
              <p className="text-green-600 font-medium">Complete</p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 border-b border-gray-100 pb-4 mb-4">
              <div className="flex flex-row items-center gap-5">
                <img src={detailicon} alt="" className="w-10 h-10" />
                <p className="text-[#303972] font-extrabold">#123456789</p>
              </div>
              <p className="text-[#A098AE]">2 March 2021, 13:45 PM</p>
              <p className="text-[#303972] font-extrabold">$ 50,036</p>
              <p className="text-[#A098AE] font-medium">Pending</p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 border-b border-gray-100 pb-4 mb-4">
              <div className="flex flex-row items-center gap-5">
                <img src={detailicon} alt="" className="w-10 h-10" />
                <p className="text-[#303972] font-extrabold">#123456789</p>
              </div>
              <p className="text-[#A098AE]">2 March 2021, 13:45 PM</p>
              <p className="text-[#303972] font-extrabold">$ 50,036</p>
              <p className="text-[#FF4550] font-medium">Canceled</p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
              <div className="flex flex-row items-center gap-5">
                <img src={detailicon} alt="" className="w-10 h-10" />
                <p className="text-[#303972] font-extrabold">#123456789</p>
              </div>
              <p className="text-[#A098AE]">2 March 2021, 13:45 PM</p>
              <p className="text-[#303972] font-extrabold">$ 50,036</p>
              <p className="text-green-600 font-medium">Complete</p>
            </div>
          </div>
        </div>

        <NavLink to="/students">
          <Btn
            text="Back"
            className="bg-blue-800 text-white rounded-[20px] px-8 py-3 mt-5 flex item-start"
          />
        </NavLink>
      </Wrapper>
    </div>
  );
};

export default Studentdetails;
