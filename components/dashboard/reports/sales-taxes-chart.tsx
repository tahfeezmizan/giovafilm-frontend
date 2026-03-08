"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { month: "Jan", "Total Sales": 400, Taxes: 50, "Net Revenue": 350 },
  { month: "Feb", "Total Sales": 300, Taxes: 30, "Net Revenue": 270 },
  { month: "Mar", "Total Sales": 500, Taxes: 40, "Net Revenue": 460 },
  { month: "Apr", "Total Sales": 600, Taxes: 80, "Net Revenue": 520 },
  { month: "May", "Total Sales": 550, Taxes: 60, "Net Revenue": 490 },
  { month: "Jun", "Total Sales": 700, Taxes: 50, "Net Revenue": 650 },
];

export function SalesTaxesChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={chartData}
        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="month" stroke="#6b7280" />
        <YAxis stroke="#6b7280" />
        <Tooltip
          contentStyle={{
            backgroundColor: "#fff",
            border: "1px solid #e5e7eb",
          }}
          cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
        />
        <Legend />
        <Bar dataKey="Total Sales" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        <Bar dataKey="Taxes" fill="#22c55e" radius={[4, 4, 0, 0]} />
        <Bar dataKey="Net Revenue" fill="#a855f7" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
