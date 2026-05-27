import React, { useEffect, useState } from "react";

export default function Settings() {
  const [farmName, setFarmName] = useState("ZAHRA FARM");

  useEffect(() => {
    const savedName = localStorage.getItem("farmName");

    if (savedName) {
      setFarmName(savedName);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("farmName", farmName);
  }, [farmName]);

  const clearData = () => {
    const confirmDelete = window.confirm("هل تريد حذف كل البيانات؟");

    if (confirmDelete) {
      localStorage.clear();

      alert("تم حذف البيانات");

      window.location.reload();
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #020617, #111827)",
        color: "white",
      }}
    >
      <h1>⚙️ الإعدادات</h1>

      <div
        style={{
          marginTop: "20px",
          backgroundColor: "#1e293b",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <h2>🏡 اسم المزرعة</h2>

        <input
          type="text"
          value={farmName}
          onChange={(e) => setFarmName(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "none",
            marginTop: "10px",
          }}
        />
      </div>

      <div
        style={{
          marginTop: "20px",
          backgroundColor: "#1e293b",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <h2>ℹ️ معلومات التطبيق</h2>

        <p>إصدار التطبيق: 1.0</p>

        <p>تم تطويره لإدارة مزارع الطيور</p>
      </div>

      <button
        onClick={clearData}
        style={{
          width: "100%",
          marginTop: "20px",
          padding: "15px",
          border: "none",
          borderRadius: "12px",
          backgroundColor: "#dc2626",
          color: "white",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        🗑️ حذف جميع البيانات
      </button>
    </div>
  );
}
