import React from "react";
import Mainbar from "./Components/Mainbar";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./Components/Dashboard";
import Students from "./Components/Students";
import Teachers from "./Components/Teachers";
import Calender from "./Components/Calender";
import Finance from "./Components/Finance";
import Chat from "./Components/Chat";
import Users from "./Components/Users";
import Food from "./Components/Food";
import Activity from "./Components/Activity";
import Newstudent from "./Components/Newstudent";
import Newteacher from "./Components/Newteacher"
import Studentdetails from "./Components/Studentdetails";
import Teachersdetails from "./Components/Teachersdetails";

const App = () => {
  return (
    <div className="min-h-screen flex">
      <Mainbar />

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="/students" element={<Students />} />
          <Route path="/students/:id" element={<Studentdetails />} />

          <Route path="/teachers" element={<Teachers />} />
          <Route path="/teachers/:id" element={<Teachersdetails />} />

          <Route path="/calender" element={<Calender />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/users" element={<Users />} />
          <Route path="/food" element={<Food />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/newstudent" element={<Newstudent />} />
          <Route path="/newteacher" element={<Newteacher />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
