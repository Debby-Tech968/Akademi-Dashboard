import React from "react";
import Wrapper from "./Wrapper";
import Btn from "./Btn";
import Placeholder from "../assets/Placeholder.png";
import Bell from "../assets/bell.png";
import gear from "../assets/gear.png";
import { NavLink } from "react-router-dom";

const Newstudent = () => {
  return (
    <div className="bg-[#F3F4FF] xl:ml-80 min-h-screen">
      <Wrapper>
        {/* HEADER */}
        <div className="sticky  xl:fixed top-0 xl:left-80 xl:right-5 z-20 bg-[#F3F4FF] py-4 xl:pt-8 xl:px-10 flex flex-col lg:flex-row justify-between items-end md:items-end lg:items-center gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#303972]">
            Add New Student
          </h1>

          <div className="flex items-center gap-3 sm:gap-6">
            <div className="bg-white rounded-full p-2 sm:p-3">
              <img src={Bell} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            <div className="bg-white rounded-full p-2 sm:p-3">
              <img src={gear} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <h2 className="text-sm font-bold text-[#303972]">Nabila A.</h2>
                <p className="text-xs text-[#A098AE]">Admin</p>
              </div>

              <img
                src={Placeholder}
                alt=""
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full"
              />
            </div>
          </div>
        </div>

        {/* FORM TITLE */}

        <h2 className="mt-12 text-xl xl:mt-18 sm:text-[24px] p-4 bg-[#4D44B5] rounded-t-lg font-bold text-[#FFFFFF]">
          Student Details
        </h2>
        <div className="bg-white rounded-lg py-2 px-4 sm:px-6">
          {/* FORM */}
          <form
            action="https://formspree.io/f/xgoqlgvl"
            method="POST"
            className="mt-6 flex flex-col lg:flex-row gap-6"
          >
            <div className="flex flex-col gap-2 lg:w-44 shrink-0">
              <label className="text-[18px] font-semibold text-[#303972]">
                Photo *
              </label>

              <label
                htmlFor="photo-upload"
                className="w-full h-48 md:h-56 lg:h-44 lg:w-44 border-2 border-dashed border-[#C1BBEB] rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#4D44B5] transition"
              >
                <p className="text-[#A098AE] xl:text-[12px] font-semibold text-base md:text-lg">
                  Drag and drop or
                </p>

                <p className="text-[#A098AE] text-[12px] font-semibold">
                  click here to select file
                </p>
              </label>

              <input
                id="photo-upload"
                type="file"
                accept="image/*"
                className="hidden"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
              {/* First Name */}
              <div className="flex flex-col gap-2">
                <label className="text-[18px] font-semibold text-[#303972]">
                  First Name *
                </label>
                <input
                  type="text"
                  placeholder="Samantha"
                  className="border rounded-lg px-4 py-2 border-[#C1BBEB] outline-none focus:border-[#4D44B5] w-full"
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-2">
                <label className="text-[18px] font-semibold text-[#303972]">
                  Last Name *
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="border border-[#C1BBEB] rounded-lg px-4 py-2 outline-none focus:border-[#4D44B5] w-full"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-[18px] font-semibold text-[#303972]">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="student@email.com"
                  className="border rounded-lg px-4 py-2 border-[#C1BBEB] outline-none focus:border-[#4D44B5] w-full"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label className="text-[18px] font-semibold text-[#303972]">
                  Phone *
                </label>
                <input
                  type="text"
                  placeholder="+234..."
                  className="border border-[#C1BBEB] rounded-lg px-4 py-2 outline-none focus:border-[#4D44B5] w-full"
                />
              </div>

              {/* Gender */}
              <div className="flex flex-col gap-2">
                <label className="text-[18px] font-semibold text-[#303972]">
                  Gender *
                </label>
                <select className="border border-[#C1BBEB] rounded-lg px-4 py-2 outline-none w-full">
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

              {/* Date of Birth */}
              <div className="flex flex-col gap-2">
                <label className="text-[18px] font-semibold text-[#303972]">
                  Date and place of birth *
                </label>
                <input
                  type="text"
                  placeholder="24 Februari 1997"
                  className="border border-[#C1BBEB] rounded-lg px-4 py-2 outline-none w-full"
                />
              </div>

              {/* Address (full width) */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-[18px] font-semibold text-[#303972]">
                  Address *
                </label>

                <textarea
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam "
                  className="border border-[#C1BBEB] rounded-lg px-4 py-3 outline-none focus:border-[#4D44B5]  lg:w-100 lg:h-40 md:w-100 md:h-40 w- h-40"
                />
              </div>
            </div>
          </form>
        </div>

        <h2 className="mt-12 lg:mt-3 md:mt-5  text-xl sm:text-[24px] p-4 bg-[#4D44B5] rounded-t-lg font-bold text-[#FFFFFF]">
          Parent Details
        </h2>
        <div className="bg-white rounded-lg py-2 px-4 sm:px-6">
          {/* FORM */}
          <form
            action="https://formspree.io/f/xgoqlgvl"
            method="POST"
            className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* First Name */}
            <div className="flex flex-col gap-2">
              <label className="text-[18px] font-semibold text-[#303972]">
                First Name *
              </label>
              <input
                type="text"
                placeholder="Mama"
                className="border border-[#C1BBEB] rounded-lg px-4 py-2 outline-none focus:border-[#4D44B5] w-full"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col gap-2">
              <label className="text-[18px] font-semibold text-[#303972]">
                Last Name *
              </label>
              <input
                type="text"
                placeholder="John"
                className="border border-[#C1BBEB] rounded-lg px-4 py-2 outline-none focus:border-[#4D44B5] w-full"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-[18px] font-semibold text-[#303972]">
                Email *
              </label>
              <input
                type="email"
                placeholder="student@email.com"
                className="border border-[#C1BBEB] rounded-lg px-4 py-2 outline-none focus:border-[#4D44B5] w-full"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label className="text-[18px] font-semibold text-[#303972]">
                Phone *
              </label>
              <input
                type="text"
                placeholder="+234..."
                className="border border-[#C1BBEB] rounded-lg px-4 py-2 outline-none focus:border-[#4D44B5] w-full"
              />
            </div>

            {/* Gender */}
            {/* <div className="flex flex-col gap-2">
              <label className="text-[18px] font-bold text-[#303972]">
                Gender
              </label>
              <select className="border rounded-lg px-4 py-2 outline-none">
                <option>Male</option>
                <option>Female</option>
              </select>
            </div> */}

            {/* Date of Birth */}
            {/* <div className="flex flex-col gap-2">
              <label className="text-[18px] font-bold text-[#303972]">
                Date of Birth
              </label>
              <input
                type="date"
                className="border rounded-lg px-4 py-2 outline-none"
              />
            </div> */}

            {/* Address + Payments (full width row) */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-[18px] font-semibold text-[#303972]">
                  Address *
                </label>

                <textarea
                  placeholder="Enter address"
                  className="border border-[#C1BBEB] rounded-lg px-4 py-3 lg:w-100 lg:h-40 md:w-100 md:h-40 w- h-40 outline-none focus:border-[#4D44B5] "
                />
              </div>

              <div className="flex flex-col gap-2 sm:mt-8">
                <label className="text-[18px] font-bold text-[#303972]">
                  Payments
                </label>

                <div className="flex flex-row items-center gap-6 sm:gap-8">
                  <div className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 accent-[#4D44B5]"
                    />
                    <span className="text-[#303972]">Cash</span>
                  </div>

                  <div className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 accent-[#4D44B5]"
                    />
                    <span className="text-[#303972]">Debit</span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-end gap-3 mt-7">
          <Btn
            text="Save as Draft"
            className="w-full sm:w-auto flex text-center justify-center border border-blue-500 text-[#4D44B5] rounded-[40px] px-8 py-3"
          />
          <Btn
            text="Submit"
            className="w-full sm:w-auto bg-[#4D44B5] flex text-center justify-center text-white rounded-[40px] px-8 py-3"
          />

          <NavLink to="/students" className="w-full sm:w-auto">
            <Btn
              text="Back"
              className="w-full bg-blue-800 text-white rounded-[20px] px-8 py-3 flex items-center justify-center"
            />
          </NavLink>
        </div>
      </Wrapper>
    </div>
  );
};

export default Newstudent;
