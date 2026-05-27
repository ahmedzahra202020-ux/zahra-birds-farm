import React from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "./firebase";

const provider = new GoogleAuthProvider();

const Login = () => {

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      if (result.user) {
        localStorage.setItem("user", JSON.stringify(result.user));

        window.location.href = "/";
      }
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#1e293b",
          padding: "40px",
          borderRadius: "20px",
          textAlign: "center",
          width: "90%",
          maxWidth: "400px",
        }}
      >
        <h1 style={{ color: "white" }}>🐦 مزرعة زهرة للطيور</h1>

        <button
          onClick={handleLogin}
          style={{
            marginTop: "20px",
            width: "100%",
            padding: "15px",
            border: "none",
            borderRadius: "12px",
            background: "#2563eb",
            color: "white",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          تسجيل الدخول بجوجل
        </button>
      </div>
    </div>
  );
};

export default Login;
