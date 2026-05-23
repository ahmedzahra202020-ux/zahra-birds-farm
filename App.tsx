import React, { useEffect, useState } from "react";

import Navbar from "./Navbar";

import Home from "./Home";

import Birds from "./Birds";

import Mutations from "./Mutations";

import Incubator from "./Incubator";

import Finance from "./Finance";

import Login from "./Login";

import Splash from "./Splash";

export default function App() {
  const [page, setPage] = useState("home");

  const [loggedIn, setLoggedIn] = useState(false);

  const [loading, setLoading] = useState(true);

  const [notification, setNotification] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("loggedIn");

    if (saved === "true") {
      setLoggedIn(true);
    }

    setTimeout(() => {
      setLoading(false);
    }, 2500);

    setTimeout(() => {
      setNotification("🐦 لا تنس متابعة الطيور اليوم");
    }, 4000);
  }, []);

  const handleLogin = () => {
    localStorage.setItem("loggedIn", "true");

    setLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("loggedIn");

    setLoggedIn(false);
  };

  if (loading) {
    return <Splash />;
  }

  if (!loggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div>
      {notification && (
        <div
          style={{
            position: "fixed",

            top: 20,

            left: "50%",

            transform: "translateX(-50%)",

            background: "#22c55e",

            color: "white",

            padding: "14px 20px",

            borderRadius: 16,

            zIndex: 9999,

            fontWeight: "bold",

            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          }}
        >
          {notification}
        </div>
      )}

      <Navbar setPage={setPage} />

      <button
        onClick={logout}
        style={{
          position: "fixed",

          top: 15,

          right: 15,

          border: "none",

          borderRadius: 12,

          padding: "10px 14px",

          background: "#ef4444",

          color: "white",

          zIndex: 999,
        }}
      >
        Logout
      </button>

      {page === "home" && <Home />}

      {page === "birds" && <Birds />}

      {page === "mutations" && <Mutations />}

      {page === "incubator" && <Incubator />}

      {page === "finance" && <Finance />}
    </div>
  );
}
