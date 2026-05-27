import React from "react";

type Props = {
  setPage: (page: string) => void;
};

export default function Navbar({ setPage }: Props) {
  return (
    <div
      style={{
        width: "220px",
        height: "100vh",
        background: "#111827",
        color: "white",
        padding: "20px",
        position: "fixed",
        right: 0,
        top: 0,
      }}
    >
      <h1
        style={{
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        🐦 المزرعة
      </h1>

      <button onClick={() => setPage("home")} style={buttonStyle}>
        🏠 الرئيسية
      </button>

      <button onClick={() => setPage("birds")} style={buttonStyle}>
        🦜 الطيور
      </button>

      <button onClick={() => setPage("stats")} style={buttonStyle}>
        📊 الإحصائيات
      </button>
    </div>
  );
}

const buttonStyle = {
  width: "100%",
  padding: "15px",
  marginBottom: "15px",
  border: "none",
  borderRadius: "10px",
  background: "#1f2937",
  color: "white",
  fontSize: "18px",
  cursor: "pointer",
};
