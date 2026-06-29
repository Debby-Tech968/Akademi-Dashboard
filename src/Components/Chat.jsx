import React from "react";
import Wrapper from "./Wrapper";
import Searchicon from "../assets/Search.png";
import placeholder from "../assets/Placeholder.png";
import Bell from "../assets/bell.png";
import gear from "../assets/gear.png";
import Btn from "./Btn";

const messages = [
  { id: 1, from: "them", text: "Hello Nabila!", time: "12:45 PM" },
  { id: 2, from: "them", text: "Can i see your history lesson homework?" },
  { id: 3, from: "me", text: "Hello Samantha!" },
  {
    id: 4,
    from: "me",
    text: "I'm not finished yet, why don't we work together to finish homework?",
    time: "12:45 PM",
  },
];

const groups = [
  {
    id: 1,
    name: "Class History VII-A",
    preview: "Lorem ipsum dolor sit amet...",
    time: "12:45 PM",
    unread: 2,
    color: "#4D44B5",
  },
  {
    id: 2,
    name: "Class VII-A",
    preview: "Lorem ipsum dolor sit amet...",
    time: "12:45 PM",
    unread: 2,
    color: "#FB7D5B",
  },
  {
    id: 3,
    name: "All Student VII",
    preview: "Lorem ipsum dolor sit amet...",
    time: "12:45 PM",
    unread: 0,
    color: "#FFC542",
  },
];

const chats = [
  {
    id: 1,
    name: "Samantha William",
    preview: "Lorem ipsum dolor sit amet...",
    time: "12:45 PM",
    unread: 2,
    active: true,
  },
  {
    id: 2,
    name: "Tony Soap",
    preview: "Lorem ipsum dolor sit amet...",
    time: "12:45 PM",
    unread: 2,
  },
  {
    id: 3,
    name: "Karen Hope",
    preview: "Lorem ipsum dolor sit amet...",
    time: "12:45 PM",
    unread: 0,
  },
];

const Chat = () => {
  return (
    <div className="flex min-h-screen w-full xl:ml-80 xl:w-[calc(100%-20rem)]">
      <div className="min-h-screen bg-[#F3F4FF] flex-1">
        <Wrapper>
          {/* Navbar */}
          <div className="sticky  xl:fixed  top-0 xl:left-80 xl:right-5 z-20 bg-[#F3F4FF] py-4 xl:pt-8 xl:px-10 flex flex-col lg:flex-row justify-between items-end md:items-end lg:items-center gap-4">
            <h1 className="text-[24px] lg:mt-3 xl:mt-0 md:text-[30px] font-bold text-[#303972]">
              Chat
            </h1>

            <div className="flex  items-center gap-3 md:gap-6 w-full  lg:w-auto">
              <div className="flex items-end md:items-end bg-white rounded-full w-full sm:w-72 md:w-full lg:w-80 xl:w-80 px-4 py-2 gap-3 shadow-sm">
                <img src={Searchicon} alt="Search" className="w-5 h-5" />

                <input
                  type="text"
                  placeholder="Search here..."
                  className="flex-1 outline-none bg-transparent text-sm text-gray-500"
                />
              </div>

              <img
                src={Bell}
                alt=""
                className="w-8 h-8  cursor-pointer hidden xl:flex lg:flex md:hidden"
              />

              <img
                src={gear}
                alt=""
                className="w-8 h-8 cursor-pointer hidden xl:flex lg:flex md:hidden"
              />

              <div className=" items-center gap-3 xl:flex lg:flex md:hidden hidden">
                <div>
                  <h1 className="text-[14px] text-[#303972] font-bold whitespace-nowrap">
                    Nabila A.
                  </h1>

                  <p className="text-[#A098AE] text-[12px]">Admin</p>
                </div>

                <img
                  src={placeholder}
                  alt=""
                  className="h-12 w-12 rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Main Layout */}
          <div className="flex flex-col lg:flex-row gap-5 mt-10 xl:mt-28">
            {/* Messages Sidebar */}
            <div className="bg-white w-full lg:w-87.5 xl:w-95 rounded-xl shadow-sm p-4 md:p-6">
              <h1 className="font-extrabold text-[20px] text-[#303972]">
                Messages
              </h1>

              <div className="flex items-center gap-3 px-4 py-2 bg-[#F3F4FF] rounded-full mt-6">
                <img src={Searchicon} alt="Search" className="w-5 h-5" />

                <input
                  type="text"
                  placeholder="Search here..."
                  className="flex-1 outline-none bg-transparent text-sm text-gray-500"
                />
              </div>

              <h2 className="text-[#A098AE] text-[13px] font-semibold mt-6 mb-3">
                Groups
              </h2>

              {groups.map((g) => (
                <div
                  key={g.id}
                  className="flex justify-between items-center gap-3 py-3 px-2 rounded-lg hover:bg-[#F3F4FF] cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className="w-10 h-10 rounded-full shrink-0"
                      style={{ backgroundColor: g.color }}
                    />

                    <div className="min-w-0">
                      <h1 className="text-[#303972] text-[13px] font-bold truncate">
                        {g.name}
                      </h1>

                      <p className="text-gray-400 text-[12px] truncate">
                        {g.preview}
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <p className="text-[10px] text-[#A098AE]">{g.time}</p>

                    {g.unread > 0 && (
                      <span className="inline-flex items-center justify-center bg-[#FB7D5B] text-white rounded-full text-[10px] w-5 h-5 mt-1">
                        {g.unread}
                      </span>
                    )}
                  </div>
                </div>
              ))}

              <h2 className="text-[#A098AE] text-[13px] font-semibold mt-6 mb-3">
                Chats
              </h2>
              {chats.map((c) => (
                <div
                  key={c.id}
                  className={`flex justify-between items-center gap-3 py-3 px-2 rounded-lg cursor-pointer ${
                    c.active ? "bg-[#F3F4FF]" : "hover:bg-[#F3F4FF]"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={placeholder}
                      alt=""
                      className="w-10 h-10 rounded-full shrink-0"
                    />

                    <div className="min-w-0">
                      <h1 className="text-[#303972] text-[13px] font-bold truncate">
                        {c.name}
                      </h1>

                      <p className="text-gray-400 text-[12px] truncate">
                        {c.preview}
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <p className="text-[10px] text-[#A098AE]">{c.time}</p>

                    {c.unread > 0 && (
                      <span className="inline-flex items-center justify-center bg-[#FB7D5B] text-white rounded-full text-[10px] w-5 h-5 mt-1">
                        {c.unread}
                      </span>
                    )}
                  </div>
                </div>
              ))}

              <Btn
                text="View More"
                className="bg-[#4D44B51A] text-[#4D44B5] text-[16px] flex justify-center items-center mt-6 font-bold rounded-full text-center w-full h-10"
              />
            </div>

            {/* Conversation Panel */}
            <div className="bg-white flex-1 rounded-xl shadow-sm flex flex-col min-h-150">
              {/* Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-4 md:px-6 py-5 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <img
                    src={placeholder}
                    alt=""
                    className="w-12 h-12 rounded-full"
                  />

                  <div>
                    <h1 className="text-[#303972] font-bold text-[16px]">
                      Samantha William
                    </h1>

                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                      <p className="text-gray-400 text-[12px]">Online</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-[#A098AE]">
                  <span className="text-xl cursor-pointer">▢</span>
                  <span className="text-xl font-bold cursor-pointer">⋯</span>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 px-4 md:px-6 py-6 flex flex-col gap-4 overflow-y-auto">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`max-w-[90%] md:max-w-md ${
                      m.from === "me" ? "self-end text-right" : "self-start"
                    }`}
                  >
                    <div
                      className={`px-4 py-3 rounded-2xl text-[13px] inline-block ${
                        m.from === "me"
                          ? "bg-[#4D44B5] text-white"
                          : "bg-[#F3F4FF] text-[#303972]"
                      }`}
                    >
                      {m.text}
                    </div>

                    {m.time && (
                      <p className="text-[10px] text-[#A098AE] mt-1">
                        {m.time}
                      </p>
                    )}
                  </div>
                ))}
              </div>
              {/* Input Bar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 px-4 md:px-6 py-4 border-t border-gray-100">
                <div className="flex-1 flex items-center bg-[#F3F4FF] rounded-full px-4 py-3">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 outline-none bg-transparent text-sm text-gray-500"
                  />
                </div>

                <button className="bg-[#4D44B5] text-white rounded-full px-6 py-3 flex items-center justify-center gap-2 font-bold text-sm whitespace-nowrap">
                  Send
                  <span>➤</span>
                </button>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Chat;