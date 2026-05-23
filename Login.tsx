import React, { useState } from "react";

import { auth } from "./firebase";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export default function Login({ onLogin }: any) {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [registerMode, setRegisterMode] = useState(false);

  const handleAuth = async () => {
    try {
      if (registerMode) {
        await createUserWithEmailAndPassword(auth, email, password);

        alert("✅ تم إنشاء الحساب");
      } else {
        await signInWithEmailAndPassword(auth, email, password);

        alert("✅ تم تسجيل الدخول");
      }

      onLogin();
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        background: "linear-gradient(to bottom,#020617,#111827)",

        padding: 20,
      }}
    >
      <div
        style={{
          width: "100%",

          maxWidth: 400,

          background: "#1e293b",

          padding: 25,

          borderRadius: 20,
        }}
      >
        <h1
          style={{
            color: "white",

            textAlign: "center",
          }}
        >
          🐦 Zahra Farm
        </h1>

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          style={inputStyle}
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={inputStyle}
        />

        <button onClick={handleAuth} style={buttonStyle}>
          {registerMode ? "إنشاء حساب" : "تسجيل دخول"}
        </button>

        <p
          onClick={() => setRegisterMode(!registerMode)}
          style={{
            color: "#38bdf8",

            marginTop: 15,

            textAlign: "center",

            cursor: "pointer",
          }}
        >
          {registerMode ? "عندك حساب؟ سجل دخول" : "إنشاء حساب جديد"}
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",

  padding: 14,

  marginTop: 10,

  borderRadius: 12,

  border: "none",

  background: "#0f172a",

  color: "white",
};

const buttonStyle = {
  width: "100%",

  padding: 14,

  marginTop: 15,

  border: "none",

  borderRadius: 12,

  background: "#22c55e",

  color: "white",

  fontWeight: "bold" as const,
};
