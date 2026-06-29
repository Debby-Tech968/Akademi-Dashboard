import React from "react";
import Wrapper from "./Wrapper";
import Searchicon from "../assets/Search.png";
import Masking from "../assets/Masking1.png"
import placeholder from "../assets/Placeholder.png"
import Location from "../assets/Location.png"
import Phone1 from "../assets/Phone1.png"
import Mail1 from "../assets/Mail1.png"
import mailbutton1 from "../assets/mail button.png"
import Btn from "./Btn";
import Placeholder from "../assets/Placeholder.png";
import Bell from "../assets/bell.png";
import gear from "../assets/gear.png";

const Users = () => {
  return (
    <div className="flex flex-col xl:flex-row min-h-screen  xl:ml-80 xl:w-[calc(100%-20rem)] w-full">
      <div className="min-h-screen bg-[#F3F4FF] w-full xl:w-180">
        <Wrapper>
          {/* Navbar */}
          <div className="sticky xl:fixed top-0 xl:left-80 xl:right-77 z-10 xl:z-20 bg-[#F3F4FF] pb-4 xl:pt-8  xl:px-10 flex flex-col gap-4 sm:flex-col items-end sm:items-end xl:items-center xl:flex-row lg:mt-0 sm:justify-between">
            <h1 className="text-[30px] mt-3 lg:mt-0 font-bold text-[#303972]">
              Users Dashboard
            </h1>

            {/* Search Bar */}
            <div className="flex items-center bg-white rounded-full px-4 py-2 w-full lg:w-80 shadow-sm">
              <img src={Searchicon} alt="Search" className="w-5 h-5" />
              <input
                type="text"
                placeholder="Search here..."
                className="flex-1 outline-none bg-transparent text-sm text-gray-500"
              />
            </div>
          </div>
          <div>
            <div className="bg-[#4D44B5] w-full xl:w-160 rounded-t-[20px] mt-15 overflow-hidden">
              <img src={Masking} alt="" className="w-full" />
            </div>

            <div className="bg-[#FFFFFF] w-full xl:w-160 min-h-50 rounded-b-[20px]">
              <div className="relative">
                <div className="absolute -top-12 left-10">
                  <img
                    src={placeholder}
                    alt="Teacher"
                    className="w-24 h-24 rounded-full border-4 border-white object-cover shadow"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:flex-wrap xl:flex-row justify-between p-6 md:p-10 gap-6">
                <div className="">
                  <h1 className="text-[18px] mt-7 lg:mt-3 md:mt-3 font-bold text-[#303972]">
                    Nabila Azalea
                  </h1>
                  <p className="text-[#A098AE] text-[14px] mt-1">Admin</p>
                  <div className="flex items-center gap-1 mt-2">
                    <img src={Location} alt="" className="w-5 h-5" />
                    <p className="text-[#A098AE] text-[12px]">
                      Jakarta, Indonesia
                    </p>
                  </div>
                </div>

                <div className="">
                  <h1 className="text-[#303972] font-bold text-[14px] mt-7">
                    Phone
                  </h1>
                  <div className="flex items-center gap-2 mt-2">
                    <img src={Phone1} alt="" className="w-8 h-8" />
                    <h1 className="text-[#303972] text-[14px] font-medium">
                      +12 345 6789 0
                    </h1>
                  </div>
                </div>

                <div className="">
                  <h1 className="text-[#303972] font-bold text-[14px] mt-7">
                    Email
                  </h1>
                  <div className="flex items-center gap-3">
                    <img src={Mail1} alt="" className="w-8 h-8" />
                    <h1 className="text-[#303972] text-[14px] font-medium">
                      jordan@mail.com
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
            {/* Contacts Card */}
            <div className="bg-[#FFFFFF] w-full min-h-160 shadow-lg p-5 md:p-8 xl:p-10 rounded-xl">
              <div className="flex justify-between">
                <div>
                  <h1 className="font-extrabold text-[20px] text-[#303972]">
                    Contacts
                  </h1>
                  <p className="font-bold text-[14px] text-[#A098AE]">
                    You have{" "}
                    <span className="text-[16px] text-[#303972]">741</span>{" "}
                    contacts
                  </p>
                </div>

                <button className="w-10 h-10 rounded-full bg-[#303972] text-white flex items-center justify-center text-lg font-bold hover:bg-[#252d5c] transition-colors">
                  +
                </button>
              </div>

              <div className="flex items-center gap-3 px-3 py-2 border border-[#A098AE] rounded-full mt-10">
                <img src={Searchicon} alt="Search" className="w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search here..."
                  className="flex-1 outline-none text-sm text-gray-500"
                />
              </div>

              {/* Contact 1 */}
              <div className="flex justify-between items-center mt-8 gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={placeholder}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h1 className="text-[#303972] text-[12px] font-bold">
                      Samantha William
                    </h1>
                    <p className="text-gray-500 text-[12px]">Class VII-A</p>
                  </div>
                </div>
                <img src={mailbutton1} alt="" className="w-10 h-10" />
              </div>

              {/* Contact 2 */}
              <div className="flex justify-between items-center mt-8 gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={placeholder}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h1 className="text-[#303972] text-[12px] font-bold">
                      Tony Soap
                    </h1>
                    <p className="text-gray-500 text-[12px]">Class VII-A</p>
                  </div>
                </div>
                <img src={mailbutton1} alt="" className="w-10 h-10" />
              </div>

              {/* Contact 3 */}
              <div className="flex justify-between items-center mt-8 gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={placeholder}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h1 className="text-[#303972] text-[12px] font-bold">
                      Karen Hope
                    </h1>
                    <p className="text-gray-500 text-[12px]">Class VII-A</p>
                  </div>
                </div>
                <img src={mailbutton1} alt="" className="w-10 h-10" />
              </div>

              {/* Contact 4 */}
              <div className="flex justify-between items-center mt-8 gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={placeholder}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h1 className="text-[#303972] text-[12px] font-bold">
                      Jordan Nico
                    </h1>
                    <p className="text-gray-500 text-[12px]">Class VII-B</p>
                  </div>
                </div>
                <img src={mailbutton1} alt="" className="w-10 h-10" />
              </div>

              {/* Contact 5 */}
              <div className="flex justify-between items-center mt-8 gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={placeholder}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h1 className="text-[#303972] text-[12px] font-bold">
                      Nadila Adja
                    </h1>
                    <p className="text-gray-500 text-[12px]">Class VII-C</p>
                  </div>
                </div>
                <img src={mailbutton1} alt="" className="w-10 h-10" />
              </div>

              <Btn
                text="View More"
                className="bg-[#4D44B51A] text-[#4D44B5] text-[16px] flex justify-center items-center mt-8 font-bold rounded-[40px] w-full h-10"
              />
            </div>

            {/* Messages Card */}
            <div className="bg-[#FFFFFF] w-full min-h-160 shadow-lg p-5 md:p-8 xl:p-10 rounded-xl">
              <h1 className="font-extrabold text-[20px] text-[#303972]">
                Messages
              </h1>

              <div className="flex items-center gap-3 px-3 py-2 border border-[#A098AE] rounded-full mt-10">
                <img src={Searchicon} alt="Search" className="w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search here..."
                  className="flex-1 outline-none text-sm text-gray-500"
                />
              </div>

              {/* Message 1 */}
              <div className="flex justify-between items-center mt-10 gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={placeholder}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h1 className="text-[#303972] text-[12px] font-bold">
                      Samantha William
                    </h1>
                    <p className="text-gray-500 text-[12px]">
                      Lorem ipsum dolor
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-[10px] text-[#A098AE]">12:45 PM</p>
                  <h1 className="bg-[#FB7D5B] text-white rounded-full flex items-center justify-center text-[10px] w-5 h-5 ml-auto mt-1">
                    2
                  </h1>
                </div>
              </div>

              {/* Message 2 */}
              <div className="flex justify-between items-center mt-8 gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={placeholder}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h1 className="text-[#303972] text-[12px] font-bold">
                      Tony Soap
                    </h1>
                    <p className="text-gray-500 text-[12px]">
                      Lorem ipsum dolor
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-[10px] text-[#A098AE]">12:45 PM</p>
                  <h1 className="bg-[#FB7D5B] text-white rounded-full flex items-center justify-center text-[10px] w-5 h-5 ml-auto mt-1">
                    2
                  </h1>
                </div>
              </div>

              {/* Message 3 */}
              <div className="flex justify-between items-center mt-8 gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={placeholder}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h1 className="text-[#303972] text-[12px] font-bold">
                      Karen Hope
                    </h1>
                    <p className="text-gray-500 text-[12px]">
                      Lorem ipsum dolor
                    </p>
                  </div>
                </div>

                <p className="text-[10px] text-[#A098AE]">12:45 PM</p>
              </div>

              {/* Message 4 */}
              <div className="flex justify-between items-center mt-8 gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={placeholder}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h1 className="text-[#303972] text-[12px] font-bold">
                      Jordan Nico
                    </h1>
                    <p className="text-gray-500 text-[12px]">
                      Lorem ipsum dolor
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-[10px] text-[#A098AE]">12:45 PM</p>
                  <h1 className="bg-[#FB7D5B] text-white rounded-full flex items-center justify-center text-[10px] w-5 h-5 ml-auto mt-1">
                    2
                  </h1>
                </div>
              </div>

              {/* Message 5 */}
              <div className="flex justify-between items-center mt-10 gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={placeholder}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h1 className="text-[#303972] text-[12px] font-bold">
                      Nadila Adja
                    </h1>
                    <p className="text-gray-500 text-[12px]">
                      Lorem ipsum dolor
                    </p>
                  </div>
                </div>

                <p className="text-[10px] text-[#A098AE]">12:45 PM</p>
              </div>

              <Btn
                text="View More"
                className="bg-[#4D44B51A] text-[#4D44B5] text-[16px] flex justify-center items-center mt-8 font-bold rounded-[40px] w-full h-10"
              />
            </div>
          </div>
        </Wrapper>
      </div>

      <div className="hidden xl:block w-30 bg-white h-auto min-h-screen">
        <Wrapper>
          <div className="flex flex-row gap-8">
            <img src={Bell} alt="" className="w-8 h-8" />
            <img src={gear} alt="" className="w-8 h-8" />

            <div className="flex flex-row gap-3">
              <div>
                <h1 className="text-[14px] text-[#303972] font-bold w-16">
                  Nabila A.
                </h1>
                <p className="text-[#A098AE] text-[14px]">Admin</p>
              </div>

              <img src={Placeholder} alt="" className="h-12 w-12" />
            </div>
          </div>

          <div className="bg-[#4D44B5] w-65 rounded-[20px] p-5 mt-10">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-[18px] font-bold text-white">Your Plan</h1>
                <p className="text-[24px] font-bold text-white">Free</p>
              </div>

              <button className="text-white text-xl font-bold">⋮</button>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-white">
                <span className="text-xl">•</span>
                <p className="text-[16px] font-medium">50 GB Storage</p>
              </div>

              <div className="flex items-center gap-2 text-white">
                <span className="text-xl">•</span>
                <p className="text-[16px] font-medium">Limited Features</p>
              </div>
            </div>

            <p className="text-[12px] font-medium text-white mt-4">
              Upgrade to Premium Plan to get more features and storage memory.
            </p>

            <Btn
              text="Upgrade Plan"
              className="bg-white text-[#303972] w-full py-3 px-13 rounded-full mt-5 font-bold"
            />
          </div>

          <h1 className="mt-10 text-[24px] font-bold text-[#303972] w-full whitespace-nowrap">
            Latest Activity
          </h1>

          <div className="border-l-4 relative -pl-5 border-[#C1BBEB]">
            <div className="border-l-4 relative pl-7 border-[#C1BBEB] ">
              <div className="flex flex-row mt-7 gap-2">
                <img
                  src={placeholder}
                  alt="user avatar"
                  className="w-10 h-10 rounded-full absolute -left-5"
                />

                <p className="text-[12px] text-[#303972] whitespace-nowrap">
                  <span className="font-bold">Karen Hope</span> moved task{" "}
                  <span className="font-semibold">
                    "User <br /> Research"{" "}
                  </span>{" "}
                  from{" "}
                  <span className="text-orange-500 font-semibold">
                    On Progress
                  </span>{" "}
                  to <span className="text-green-500 font-semibold">Done</span>
                </p>
              </div>
            </div>
            <p className="text-[12px] text-[#A098AE] pl-8 whitespace-nowrap">
              2 March 2021, 13:45 PM
            </p>

            <div>
              <div className="border-l-4 relative pl-7 border-[#C1BBEB] ">
                <div className="flex flex-row mt-7 gap-2">
                  <img
                    src={placeholder}
                    alt="user avatar"
                    className="w-10 h-10 rounded-full absolute -left-5"
                  />

                  <p className="text-[12px] text-[#303972] whitespace-nowrap">
                    <span className="font-bold">Samatha Willams</span> add new{" "}
                    <span className="font-semibold">
                      <span className="text-[#303972] font-extrabold text-[18px]">
                        4{" "}
                      </span>
                      attached
                      <br />{" "}
                    </span>{" "}
                    files{" "}
                    <span className="text-orange-500 font-semibold">
                      On task
                    </span>{" "}
                    to{" "}
                    <span className="text-green-500 font-semibold">
                      "Photos Assets"
                    </span>
                  </p>
                </div>
              </div>
              <p className="text-[12px] text-[#A098AE] pl-8 whitespace-nowrap">
                2 March 2021, 13:45 PM
              </p>
            </div>

            <div>
              <div className="border-l-4 relative pl-7 border-[#C1BBEB] ">
                <div className="flex flex-row mt-7 gap-2">
                  <img
                    src={placeholder}
                    alt="user avatar"
                    className="w-10 h-10 rounded-full absolute -left-5"
                  />

                  <p className="text-[12px] text-[#303972] whitespace-nowrap">
                    <span className="font-bold">Tony Soap</span> invite you in
                    task{" "}
                    <span className="font-semibold">
                      "Wire <br /> Framing"{" "}
                    </span>{" "}
                    and{" "}
                    <span className="text-green-500 font-bold">
                      "Hi-fidelity"
                    </span>{" "}
                    {/* to{" "} */}
                    {/* <span className="text-green-500 font-semibold">Done</span> */}
                  </p>
                </div>
              </div>
              <p className="text-[12px] text-[#A098AE] pl-8 whitespace-nowrap">
                2 March 2021, 13:45 PM
              </p>
            </div>

            <div>
              <div className="border-l-4 relative pl-7 border-[#C1BBEB] ">
                <div className="flex flex-row mt-7 gap-2">
                  <img
                    src={placeholder}
                    alt="user avatar"
                    className="w-10 h-10 rounded-full absolute -left-5"
                  />

                  <p className="text-[12px] text-[#303972] whitespace-nowrap">
                    <span className="font-bold">Samatha Willams</span> created
                    new{" "}
                    {/* <span className="font-semibold">
                      "User <br /> Research"{" "}
                    </span>{" "} */}
                    {/* from{" "} */}
                    <span className="text-orange-500 font-semibold">
                      Tasks
                    </span>{" "}
                    {/* to{" "}
                    <span className="text-green-500 font-semibold">Done</span> */}
                  </p>
                </div>
              </div>
              <p className="text-[12px] text-[#A098AE] pl-8 whitespace-nowrap">
                2 March 2021, 13:45 PM
              </p>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Users;
