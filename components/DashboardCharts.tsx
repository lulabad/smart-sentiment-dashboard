"use client";

import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { DashboardData } from "@/lib/types";

interface Props {
  data: DashboardData;
}

const COLORS = {
  positive: "#10b981",
  negative: "#ef4444",
  neutral: "#f59e0b",
};

export default function DashboardCharts({ data }: Props) {
  const pieData = [
    { name: "Positive", value: data.sentiments.positive },
    { name: "Negative", value: data.sentiments.negative },
    { name: "Neutral", value: data.sentiments.neutral },
  ];

  const barData = [
    { sentiment: "Positive", count: data.sentiments.positive, fill: COLORS.positive },
    { sentiment: "Negative", count: data.sentiments.negative, fill: COLORS.negative },
    { sentiment: "Neutral", count: data.sentiments.neutral, fill: COLORS.neutral },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          Sentiment-Verteilung (Pie Chart)
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={Object.values(COLORS)[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          Sentiment-Verteilung (Bar Chart)
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <XAxis dataKey="sentiment" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
