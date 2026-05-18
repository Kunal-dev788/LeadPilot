"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { salesData } from "@/constants/dashboard-data";

export function ChartCard() {
  return (
    <div className="mt-6 h-75 w-full xl:h-85">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={salesData}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.22} />

              <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#f1f5f9"
          />

          <XAxis
            dataKey="week"
            axisLine={false}
            tickLine={false}
            tickMargin={20}
            tick={{
              fill: "#94a3b8",
              fontSize: 13,
            }}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "#94a3b8",
              fontSize: 13,
            }}
            tickFormatter={(value) => `₹${value / 1000}k`}
          />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#4f46e5"
            strokeWidth={5}
            fillOpacity={1}
            fill="url(#colorRevenue)"
            dot={{
              r: 4,
              fill: "#4f46e5",
            }}
            activeDot={{
              r: 6,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
