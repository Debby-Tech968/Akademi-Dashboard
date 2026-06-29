import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", thisWeek: 20, lastWeek: 15 },
  { month: "Feb", thisWeek: 45, lastWeek: 30 },
  { month: "Mar", thisWeek: 85, lastWeek: 55 },
  { month: "Apr", thisWeek: 60, lastWeek: 45 },
  { month: "May", thisWeek: 75, lastWeek: 50 },
  { month: "Jun", thisWeek: 40, lastWeek: 25 },
  { month: "Jul", thisWeek: 55, lastWeek: 62 },
  { month: "Aug", thisWeek: 30, lastWeek: 25 },
  { month: "Sep", thisWeek: 35, lastWeek: 28 },
  { month: "Oct", thisWeek: 60, lastWeek: 50 },
  { month: "Nov", thisWeek: 80, lastWeek: 72 },
  { month: "Dec", thisWeek: 55, lastWeek: 40 },
];

const PerformanceChart = ({text}) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm mt-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 gap-2">
        <h2 className="text-[20px] font-bold text-[#303972]">
          {text}
        </h2>

        <div className="flex items-center gap-6">
          {/* Legend */}
          <div className="flex items-center gap-7">
            <div className="flex flex-row items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-white border-3 border-[#FCC43E] mb-8" />

              <div className="flex flex-col">
                <span className="text-[12px] text-[#A098AE]">This Week</span>
                <p className="text-[22px] font-bold text-[#303972]">1.356</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-white border-3 border-[#FB7D5B] mb-8" />

              <div className="text-center">
                <span className="text-[12px] text-[#A098AE]">Last Week</span>
                <p className="text-[22px] font-bold text-[#303972]">1.245</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          {/* <div className="flex items-center gap-6"></div> */}
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <defs>
            {/* Yellow gradient */}
            <linearGradient id="gradientYellow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FCC43E" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#FCC43E" stopOpacity={0} />
            </linearGradient>
            {/* Red/Orange gradient */}
            <linearGradient id="gradientOrange" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FB7D5B" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#FB7D5B" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#F3F4FF"
            vertical={true}
          />
          <XAxis
            dataKey="month"
            tick={{ fill: "#A098AE", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            domain={[0, 100]}
            ticks={[0, 25, 50, 75, 100]}
            tick={{ fill: "#A098AE", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              borderRadius: "12px",
              border: "none",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          />

          {/* Last Week - orange, renders first (behind) */}
          <Area
            type="monotone"
            dataKey="lastWeek"
            name="Last Week"
            stroke="#FB7D5B"
            strokeWidth={3}
            fill="url(#gradientOrange)"
            dot={false}
            activeDot={{ r: 6, fill: "#FB7D5B" }}
          />

          {/* This Week - yellow, renders on top */}
          <Area
            type="monotone"
            dataKey="thisWeek"
            name="This Week"
            stroke="#FCC43E"
            strokeWidth={3}
            fill="url(#gradientYellow)"
            dot={false}
            activeDot={{ r: 6, fill: "#FCC43E" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
