import React from "react";

type Props = {
  setPage: (page: string) => void;
};

export default function Navbar({ setPage }: Props) {
  const btnStyle = {
    background: "none",

    border: "none",

    color: "white",

    fontSize: 12,

    display: "flex",

    flexDirection: "column" as const,

    alignItems: "center" as const,

    gap: 5,

    cursor: "pointer",
  };

  return (
    <div
      style={{
        position: "fixed",

        bottom: 0,

        left: 0,

        right: 0,

        background: "#020617",

        display: "flex",

        justifyContent: "space-around",

        padding: 12,

        borderTop: "1px solid #334155",

        zIndex: 999,
      }}
    >
      <button style={btnStyle} onClick={() => setPage("home")}>
        🏠 الرئيسية
      </button>

      <button style={btnStyle} onClick={() => setPage("birds")}>
        🐦 الطيور
      </button>

      <button style={btnStyle} onClick={() => setPage("mutations")}>
        🧬 الطفرات
      </button>

      <button style={btnStyle} onClick={() => setPage("incubator")}>
        🥚 الحضانات
      </button>

      <button style={btnStyle} onClick={() => setPage("finance")}>
        💰 الأرباح
      </button>
    </div>
  );
}
