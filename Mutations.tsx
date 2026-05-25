import React, { useEffect, useState } from "react";

export default function Mutations() {
  const [name, setName] = useState("");

  const [mutations, setMutations] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("mutations");

    if (saved) {
      setMutations(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("mutations", JSON.stringify(mutations));
  }, [mutations]);

  const addMutation = () => {
    if (!name) return;

    setMutations([...mutations, name]);

    setName("");
  };

  const deleteMutation = (index: number) => {
    const updated = mutations.filter((_, i) => i !== index);

    setMutations(updated);
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
      <h1>🧬 الطفرات</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="اسم الطفرة"
        style={{
          width: "100%",

          padding: 12,

          marginTop: 20,
        }}
      />

      <button
        onClick={addMutation}
        style={{
          width: "100%",

          padding: 12,

          marginTop: 10,
        }}
      >
        ➕ إضافة طفرة
      </button>

      <div
        style={{
          marginTop: 20,
        }}
      >
        {mutations.map((mutation, index) => (
          <div
            key={index}
            style={{
              padding: 12,

              marginBottom: 10,

              background: "#1e293b",

              color: "white",
            }}
          >
            🧬 {mutation}
            <button
              onClick={() => deleteMutation(index)}
              style={{
                marginLeft: 10,
              }}
            >
              🗑️
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
