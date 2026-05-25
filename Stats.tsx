import React from "react";

export default function Stats() {
  const cards = [
    {
      title: "إجمالي الطيور",
      value: "248",
      color: "#2563eb",
      icon: "🦜",
    },
    {
      title: "البيض اليوم",
      value: "34",
      color: "#16a34a",
      icon: "🥚",
    },
    {
      title: "الحضانات النشطة",
      value: "6",
      color: "#f59e0b",
      icon: "🔥",
    },
    {
      title: "المبيعات",
      value: "12,500 ج",
      color: "#dc2626",
      icon: "💰",
    },
  ];

  return (
    <div
      style={{
        padding: "20px",
        background: "#f5f7fb",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          fontSize: "32px",
          marginBottom: "25px",
          color: "#111827",
          fontWeight: "bold",
        }}
      >
        📊 إحصائيات المزرعة
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "25px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              borderTop: `6px solid ${card.color}`,
              transition: "0.3s",
            }}
          >
            <div
              style={{
                fontSize: "40px",
                marginBottom: "15px",
              }}
            >
              {card.icon}
            </div>

            <h2
              style={{
                color: "#6b7280",
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              {card.title}
            </h2>

            <h3
              style={{
                color: "#111827",
                fontSize: "32px",
                fontWeight: "bold",
              }}
            >
              {card.value}
            </h3>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "35px",
          background: "#fff",
          padding: "25px",
          borderRadius: "20px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
            color: "#111827",
          }}
        >
          📈 نشاط المزرعة
        </h2>

        <div
          style={{
            display: "flex",
            alignItems: "end",
            gap: "15px",
            height: "250px",
          }}
        >
          {[40, 70, 55, 90, 60, 120, 80].map((item, index) => (
            <div
              key={index}
              style={{
                flex: 1,
                background: "linear-gradient(to top,#2563eb,#60a5fa)",
                height: `${item}%`,
                borderRadius: "12px 12px 0 0",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
