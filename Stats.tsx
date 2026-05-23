import React from "react";

export default function Stats() {
  const totalBirds = 120;
  const totalExpenses = 3500;
  const totalSales = 8000;
  const profit = totalSales - totalExpenses;

  const cardStyle = {
    padding: "20px",
    borderRadius: "15px",
    color: "white",
    marginTop: "15px",
    fontSize: "20px",
    fontWeight: "bold" as const,
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#020617",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          color: "white",
          marginBottom: "20px",
        }}
      >
        📊 لوحة الإحصائيات
      </h1>

      <div
        style={{
          ...cardStyle,
          backgroundColor: "#2563eb",
        }}
      >
        🐦 إجمالي الطيور: {totalBirds}
      </div>

      <div
        style={{
          ...cardStyle,
          backgroundColor: "#dc2626",
        }}
      >
        💰 إجمالي المصروفات: {totalExpenses} جنيه
      </div>

      <div
        style={{
          ...cardStyle,
          backgroundColor: "#16a34a",
        }}
      >
        💵 إجمالي المبيعات: {totalSales} جنيه
      </div>

      <div
        style={{
          ...cardStyle,
          backgroundColor: "#7c3aed",
        }}
      >
        🚀 صافي الربح: {profit} جنيه
      </div>
    </div>
  );
}
