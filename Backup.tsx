import React from "react";

export default function Backup() {
  const backupData = () => {
    const data = {
      birds: JSON.parse(localStorage.getItem("birds") || "[]"),

      mutations: JSON.parse(localStorage.getItem("mutations") || "[]"),

      incubator: JSON.parse(localStorage.getItem("incubator") || "[]"),

      finance: JSON.parse(localStorage.getItem("finance") || "[]"),
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "zahra-backup.json";

    a.click();
  };

  const restoreBackup = (e: any) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event: any) => {
      try {
        const data = JSON.parse(event.target.result);

        localStorage.setItem("birds", JSON.stringify(data.birds || []));

        localStorage.setItem("mutations", JSON.stringify(data.mutations || []));

        localStorage.setItem("incubator", JSON.stringify(data.incubator || []));

        localStorage.setItem("finance", JSON.stringify(data.finance || []));

        alert("تم استرجاع البيانات بنجاح 🔥");

        window.location.reload();
      } catch {
        alert("الملف غير صالح");
      }
    };

    reader.readAsText(file);
  };

  return (
    <div
      style={{
        minHeight: "100vh",

        padding: 20,

        paddingBottom: 100,

        background: "linear-gradient(to bottom,#020617,#111827)",

        color: "white",
      }}
    >
      <h1>💾 Backup</h1>

      <p
        style={{
          color: "#cbd5e1",

          marginBottom: 20,
        }}
      >
        تحميل أو استرجاع نسخة احتياطية
      </p>

      <button onClick={backupData} style={buttonStyle}>
        ⬇️ تحميل Backup
      </button>

      <input
        type="file"
        accept=".json"
        onChange={restoreBackup}
        style={{
          marginTop: 20,

          width: "100%",
        }}
      />
    </div>
  );
}

const buttonStyle = {
  width: "100%",

  padding: 16,

  border: "none",

  borderRadius: 14,

  background: "#3b82f6",

  color: "white",

  fontWeight: "bold" as const,
};
