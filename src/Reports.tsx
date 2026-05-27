import React, { useEffect, useState } from "react";

export default function Reports() {
  const [birds, setBirds] = useState<any[]>([]);

  const [expenses, setExpenses] = useState<any[]>([]);

  const [sales, setSales] = useState<any[]>([]);

  useEffect(() => {
    const savedBirds = localStorage.getItem("birds");

    const savedExpenses = localStorage.getItem("expenses");

    const savedSales = localStorage.getItem("sales");

    if (savedBirds) {
      setBirds(JSON.parse(savedBirds));
    }

    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses));
    }

    if (savedSales) {
      setSales(JSON.parse(savedSales));
    }
  }, []);

  const totalBirds = birds.reduce((sum, bird) => {
    return sum + Number(bird.count);
  }, 0);

  const totalExpenses = expenses.reduce((sum, item) => {
    return sum + Number(item.amount);
  }, 0);

  const totalSales = sales.reduce((sum, item) => {
    return sum + Number(item.price);
  }, 0);

  const profit = totalSales - totalExpenses;

  const cardStyle = {
    padding: "20px",
    borderRadius: "20px",
    color: "white",
    marginTop: "15px",
    fontSize: "20px",
    fontWeight: "bold" as const,
  };

  return (
    <div
      style={{
        padding: "20px",
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #020617, #111827)",
      }}
    >
      <h1
        style={{
          color: "white",
          marginBottom: "20px",
        }}
      >
        📊 التقارير
      </h1>

      <div
        style={{
          ...cardStyle,
          backgroundColor: "#2563eb",
        }}
      >
        🐦 إجمالي الطيور:
        {totalBirds}
      </div>

      <div
        style={{
          ...cardStyle,
          backgroundColor: "#dc2626",
        }}
      >
        💸 إجمالي المصروفات:
        {totalExpenses} جنيه
      </div>

      <div
        style={{
          ...cardStyle,
          backgroundColor: "#16a34a",
        }}
      >
        💰 إجمالي المبيعات:
        {totalSales} جنيه
      </div>

      <div
        style={{
          ...cardStyle,
          backgroundColor: "#7c3aed",
        }}
      >
        🚀 صافي الربح:
        {profit} جنيه
      </div>

      <div
        style={{
          marginTop: "25px",
          backgroundColor: "#1e293b",
          padding: "20px",
          borderRadius: "20px",
          color: "white",
        }}
      >
        <h2>📈 تحليل المزرعة</h2>

        <p>
          {profit > 0
            ? "✅ المزرعة تحقق أرباح جيدة"
            : "⚠️ المصروفات أعلى من الأرباح"}
        </p>

        <p>
          {totalBirds > 50 ? "🐤 عدد الطيور ممتاز" : "📉 حاول زيادة الإنتاج"}
        </p>
      </div>
    </div>
  );
}
