import React from "react";

const Home = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "40px",
      }}
    >
      <h1>🐦 مرحبًا بك في مزرعة زهرة</h1>

      <p>تم تسجيل الدخول بنجاح 🔥</p>

      <button
        type="button"
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          border: "none",
          borderRadius: "10px",
          background: "red",
          color: "white",
          cursor: "pointer",
        }}
      >
        اصطياد الحيوانات الأليفة
      </button>
    </div>
  );
};

export default Home;
