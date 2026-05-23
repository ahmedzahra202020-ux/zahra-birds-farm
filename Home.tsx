import React, { useEffect, useState } from "react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";

export default function Home() {
  const [birds, setBirds] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("birds");

    if (saved) {
      setBirds(JSON.parse(saved));
    }
  }, []);

  const totalBirds = birds.length;

  const cockatiel = birds.filter((b) => b.type === "كوكتيل").length;

  const budgie = birds.filter((b) => b.type === "بادجي").length;

  const rose = birds.filter((b) => b.type === "روز").length;

  const chartData = [
    {
      name: "كوكتيل",
      value: cockatiel,
    },

    {
      name: "بادجي",
      value: budgie,
    },

    {
      name: "روز",
      value: rose,
    },
  ];

  const COLORS = ["#22c55e", "#3b82f6", "#f59e0b"];

  return (
    <div
      style={{
        minHeight: "100vh",

        padding: 20,

        paddingBottom: 100,

        background: "linear-gradient(to bottom,#020617,#111827)",

        color: "white",
      }}
    >
      <h1>🏠 Dashboard</h1>

      <div
        style={{
          background: "#1e293b",

          padding: 20,

          borderRadius: 20,

          marginTop: 20,
        }}
      >
        <h2>🐦 إجمالي الطيور</h2>

        <h1
          style={{
            fontSize: 42,
          }}
        >
          {totalBirds}
        </h1>
      </div>

      <div
        style={{
          background: "#1e293b",

          padding: 20,

          borderRadius: 20,

          marginTop: 20,

          height: 300,
        }}
      >
        <h2>📊 توزيع الأنواع</h2>

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={chartData} dataKey="value" outerRadius={90} label>
              {chartData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div
        style={{
          background: "#1e293b",

          padding: 20,

          borderRadius: 20,

          marginTop: 20,

          height: 300,
        }}
      >
        <h2>📈 مقارنة الأنواع</h2>

        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="value" fill="#22c55e" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
