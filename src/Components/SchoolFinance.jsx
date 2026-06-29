import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { day: "Mon", thisWeek: 72, lastWeek: 55 },
  { day: "Tue", thisWeek: 45, lastWeek: 28 },
  { day: "Wed", thisWeek: 95, lastWeek: 48 },
  { day: "Thu", thisWeek: 50, lastWeek: 38 },
  { day: "Fri", thisWeek: 20, lastWeek: 80 },
  { day: "Sat", thisWeek: 65, lastWeek: 52 },
  { day: "Sun", thisWeek: 70, lastWeek: 30 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const income = payload[0]?.value;
    return (
      <div className="bg-[#303972] text-white rounded-2xl px-4 py-3 shadow-lg text-center">
        <p className="text-[18px] font-bold">42%</p>
        <p className="text-[13px] opacity-80">{income} Income</p>
      </div>
    );
  }
  return null;
};

const SchoolFinance = () => {
  const [activeDay, setActiveDay] = useState("Wed");

  return (
    <div className="bg-white rounded-2xl h-full p-4 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-[14px] font-bold text-[#303972]">School Finance</h2>

        <div className="flex items-center gap-6">
          {/* Legend */}
          <div className="flex items-center gap-4">
            <div className="flex  flex-row items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FCC43E] mb-5" />
              <div>
                <span className="text-[10px] text-[#A098AE]">This Week</span>
                <p className="text-[16px] font-bold text-[#303972]">1.245</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FB7D5B] mb-5" />
              <div>
                <span className="text-[10px] text-[#A098AE]">Last Week</span>
                <p className="text-[16px] font-bold text-[#303972]">1.356</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          {/* <div className="flex items-center gap-6"></div> */}
        </div>
      </div>

      {/* Chart */}
      <div className="w-full overflow-hidden">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart
            data={data}
            barCategoryGap="30%"
            barGap={4}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#F3F4FF"
              vertical={false}
            />
            <XAxis
              dataKey="day"
              tick={({ x, y, payload }) => (
                <text
                  x={x}
                  y={y + 16}
                  textAnchor="middle"
                  fontSize={12}
                  fontWeight={payload.value === activeDay ? "bold" : "normal"}
                  fill={payload.value === activeDay ? "#303972" : "#A098AE"}
                >
                  {payload.value}
                </text>
              )}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
              tick={{ fill: "#A098AE", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "transparent" }}
            />

            {/* This Week - yellow */}
            <Bar
              dataKey="thisWeek"
              name="This Week"
              radius={[6, 6, 0, 0]}
              onClick={(d) => setActiveDay(d.day)}
            >
              {data.map((entry) => (
                <Cell
                  key={entry.day}
                  fill={entry.day === activeDay ? "#FCC43E" : "#FDE9A2"}
                  cursor="pointer"
                />
              ))}
            </Bar>

            {/* Last Week - orange */}
            <Bar
              dataKey="lastWeek"
              name="Last Week"
              radius={[6, 6, 0, 0]}
              onClick={(d) => setActiveDay(d.day)}
            >
              {data.map((entry) => (
                <Cell
                  key={entry.day}
                  fill={entry.day === activeDay ? "#FB7D5B" : "#FDCFC5"}
                  cursor="pointer"
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SchoolFinance;
