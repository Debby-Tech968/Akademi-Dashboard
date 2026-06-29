import React from "react";
import Wrapper from "./Wrapper";
import Placeholder from "../assets/Placeholder.png";
import Bell from "../assets/bell.png";
import gear from "../assets/gear.png";
import Searchicon from "../assets/Search.png";

const Activity = () => {
  const images = [
    "https://via.placeholder.com/160x100",
    "https://via.placeholder.com/160x100",
    "https://via.placeholder.com/160x100",
    "https://via.placeholder.com/160x100",
  ];

  const Dot = () => (
    <div className="absolute -left-7.5 top-1 w-3 h-3 rounded-full border-2 border-[#4D44B5] bg-white" />
  );

  return (
    <div className="bg-[#F3F4FF] h-300 xl:ml-80  min-h-screen">
      <Wrapper>
        {/* HEADER */}
        <div className="sticky  xl:fixed  top-0 xl:left-80 xl:right-5 z-20 bg-[#F3F4FF] py-4 xl:pt-8 xl:px-10 flex flex-col lg:flex-row justify-between items-end md:items-end lg:items-center gap-4">
          <h1 className="text-[18px] md:text-[24px] lg:mt-4 lg:text-[24px] font-bold text-[#303972]">
            Notification & Latest Activity
          </h1>

          <div className="xl:flex items-center hidden gap-4">
            {/* SEARCH */}
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm w-[320px]">
              <img src={Searchicon} className="w-5 h-5" />
              <input
                className="ml-3 bg-transparent outline-none text-sm w-full"
                placeholder="Search here..."
              />
            </div>

            {/* ICONS */}
            <div className="flex gap-3">
              <div className="bg-white p-3 rounded-full">
                <img src={Bell} className="w-6 h-6" />
              </div>
              <div className="bg-white p-3 rounded-full">
                <img src={gear} className="w-6 h-6" />
              </div>
            </div>

            {/* USER */}
            <div className="flex items-center gap-3">
              <div className="text-right">
                <h2 className="text-sm font-bold text-[#303972]">Nabila A.</h2>
                <p className="text-xs text-[#A098AE]">Admin</p>
              </div>
              <img src={Placeholder} className="w-10 h-10 rounded-full" />
            </div>
          </div>
        </div>

        {/* CARD */}
        <div className="bg-white xl:mt-20 rounded-2xl p-8">
          {/* TODAY */}
          <h2 className="font-bold text-[#303972] mb-6">Today</h2>

          <div className="border-l-2 border-[#4D44B5] pl-6 space-y-8">
            {/* ITEM */}
            <div className="relative">
              <Dot />
              <p className="text-xs text-gray-400 mb-1">Monday, June 30 2020</p>
              <p className="text-sm text-[#303972]">
                <b>Karen Hope</b> has created new task at{" "}
                <span className="text-[#FF6B6B] font-semibold">
                  History Lesson
                </span>
              </p>
            </div>

            {/* ITEM */}
            <div className="relative">
              <Dot />
              <p className="text-xs text-gray-400 mb-1">Monday, June 30 2020</p>
              <p className="text-sm text-[#303972]">
                <span className="text-red-500 font-bold">[REMINDER]</span> Due
                date of{" "}
                <span className="text-[#FF6B6B] font-bold">
                  Science Homework
                </span>
              </p>
            </div>

            <div className="relative">
              <Dot />
              <p className="text-xs text-gray-400 mb-1">Sunday, June 29 2020</p>
              <p className="text-sm text-[#303972]">
                <b>John Soap</b> commented at{" "}
                <span className="text-[#FF6B6B] font-bold">
                  Science Homework
                </span>
              </p>
            </div>

            {/* ITEM WITH IMAGES */}
            <div className="relative">
              <Dot />
              <p className="text-xs text-gray-400 mb-1">Monday, June 30 2020</p>

              <p className="text-sm text-[#303972] mb-4">
                <b>Samantha William</b> added 4 files on{" "}
                <span className="text-[#4D44B5] font-bold">Art Class</span>
              </p>

              <div className="grid grid-cols-4 gap-4">
                {images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    className="h-24 w-full rounded-xl object-cover bg-[#CFC9F7]"
                  />
                ))}
              </div>
            </div>

            {/* ITEM */}
            <div className="relative">
              <Dot />
              <p className="text-xs text-gray-400 mb-1">Monday, June 30 2020</p>
              <p className="text-sm text-[#303972]">
                You moved{" "}
                <span className="text-[#4CBC9A] font-bold">
                  Biology Homework
                </span>{" "}
                to <b>Done</b>
              </p>
            </div>
          </div>

          {/* YESTERDAY */}
          <h2 className="font-bold text-[#303972] mt-10 mb-6">Yesterday</h2>

          <div className="border-l-2 border-[#4D44B5] pl-6 space-y-8">
            <div className="relative">
              <Dot />
              <p className="text-xs text-gray-400 mb-1">Sunday, June 29 2020</p>
              <p className="text-sm text-[#303972]">
                <b>Johnny Ahmad</b> mentioned you at{" "}
                <span className="text-[#F9B53F] font-bold">
                  Art Class Homework
                </span>
              </p>
            </div>

            <div className="relative">
              <Dot />
              <p className="text-xs text-gray-400 mb-1">Sunday, June 29 2020</p>
              <p className="text-sm text-[#303972]">
                <b>Nadila Adja</b> mentioned you at{" "}
                <span className="text-[#4D44B5] font-bold">
                  Programming Homework
                </span>
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Activity;
