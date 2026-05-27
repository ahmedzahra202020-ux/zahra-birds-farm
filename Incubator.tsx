import React, { useEffect, useState } from "react";

export default function Incubator() {
  const [count, setCount] = useState("");

  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("incubator");

    if (saved) {
      setItems(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("incubator", JSON.stringify(items));
  }, [items]);

  const addEggs = () => {
    if (!count) return;

    const newItem = {
      count,

      date: new Date().toLocaleDateString(),
    };

    setItems([...items, newItem]);

    setCount("");
  };

  const deleteItem = (index: number) => {
    const updated = items.filter((_, i) => i !== index);

    setItems(updated);
  };

  return (
    <div
      style={{
        minHeight: "100vh",

        padding: 20,

        background: "linear-gradient(to bottom,#020617,#111827)",

        color: "white",
      }}
    >
      <h1>🥚 الحضانات</h1>

      <input
        value={count}
        onChange={(e) => setCount(e.target.value)}
        placeholder="عدد البيض"
        style={{
          width: "100%",

          padding: 12,

          marginTop: 20,
        }}
      />

      <button
        onClick={addEggs}
        style={{
          width: "100%",

          padding: 12,

          marginTop: 10,
        }}
      >
        ➕ إضافة
      </button>

      <div
        style={{
          marginTop: 20,
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              padding: 12,

              marginBottom: 10,

              background: "#1e293b",
            }}
          >
            🥚 {item.count}
            <p>📅 {item.date}</p>
            <button onClick={() => deleteItem(index)}>🗑️</button>
          </div>
        ))}
      </div>
    </div>
  );
}
