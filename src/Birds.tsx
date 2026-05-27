import React, { useState } from "react";

export default function Birds() {
  const [birds, setBirds] = useState<any[]>([]);

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [age, setAge] = useState("");

  const addBird = () => {
    if (!name || !type || !age) return;

    const newBird = {
      name,
      type,
      age,
    };

    setBirds([...birds, newBird]);

    setName("");
    setType("");
    setAge("");
  };

  const deleteBird = (index: number) => {
    const newBirds = birds.filter((bird: any, i: number) => i !== index);

    setBirds(newBirds);
  };

  return (
    <div>
      <h1
        style={{
          fontSize: "35px",
          marginBottom: "25px",
        }}
      >
        🦜 إدارة الطيور
      </h1>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "20px",
          marginBottom: "30px",
          boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
        }}
      >
        <input
          placeholder="اسم الطائر"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        <input
          placeholder="النوع"
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={inputStyle}
        />

        <input
          placeholder="العمر"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={inputStyle}
        />

        <button
          onClick={addBird}
          style={{
            padding: "15px",
            width: "100%",
            border: "none",
            borderRadius: "12px",
            background: "#2563eb",
            color: "white",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          ➕ إضافة طائر
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        {birds.map((bird, index) => (
          <div
            key={index}
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "20px",
              boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
            }}
          >
            <h2>🦜 {bird.name}</h2>

            <p>النوع: {bird.type}</p>

            <p>العمر: {bird.age}</p>

            <button
              onClick={() => deleteBird(index)}
              style={{
                marginTop: "15px",
                padding: "10px",
                width: "100%",
                border: "none",
                borderRadius: "10px",
                background: "#dc2626",
                color: "white",
                cursor: "pointer",
              }}
            >
              🗑 حذف
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "15px",
  marginBottom: "15px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  fontSize: "16px",
};
