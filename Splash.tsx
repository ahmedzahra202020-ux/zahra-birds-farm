import React from "react";

export default function Splash() {
  return (
    <div
      style={{
        minHeight: "100vh",

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        flexDirection: "column",

        background: "linear-gradient(to bottom,#020617,#111827)",

        color: "white",
      }}
    >
      <div
        style={{
          fontSize: 90,
        }}
      >
        🐦
      </div>

      <h1
        style={{
          fontSize: 32,

          marginTop: 10,
        }}
      >
        Zahra Birds Farm
      </h1>

      <p
        style={{
          color: "#cbd5e1",
        }}
      >
        Loading...
      </p>
    </div>
  );
}
