import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

const Home = () => {
  const logout = async () => {
    await signOut(auth);
  };

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
        onClick={logout}
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
        تسجيل الخروج
      </button>
    </div>
  );
};

export default Home;
