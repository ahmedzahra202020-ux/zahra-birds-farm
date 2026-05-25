import React, { useEffect, useState } from "react";

export default function Tasks() {
  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("tasks");

    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!task) return;

    const newTask = {
      text: task,
      done: false,
      date: new Date().toLocaleDateString(),
    };

    setTasks([...tasks, newTask]);

    setTask("");
  };

  const toggleTask = (index: number) => {
    const updated = [...tasks];

    updated[index].done = !updated[index].done;

    setTasks(updated);
  };

  const deleteTask = (index: number) => {
    const updated = tasks.filter((_, i) => i !== index);

    setTasks(updated);
  };

  return (
    <div
      style={{
        padding: "20px",
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #020617, #111827)",
        color: "white",
      }}
    >
      <h1>🔔 المهام اليومية</h1>

      <div
        style={{
          marginTop: "20px",
          backgroundColor: "#1e293b",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <input
          type="text"
          placeholder="أدخل المهمة"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "none",
            marginBottom: "10px",
          }}
        />

        <button
          onClick={addTask}
          style={{
            width: "100%",
            padding: "14px",
            border: "none",
            borderRadius: "10px",
            backgroundColor: "#8b5cf6",
            color: "white",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          ➕ إضافة مهمة
        </button>
      </div>

      <div style={{ marginTop: "20px" }}>
        {tasks.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#1e293b",
              padding: "15px",
              borderRadius: "15px",
              marginBottom: "15px",
              opacity: item.done ? 0.6 : 1,
            }}
          >
            <h3>
              {item.done ? "✅" : "📌"} {item.text}
            </h3>

            <p>📅 {item.date}</p>

            <button
              onClick={() => toggleTask(index)}
              style={{
                marginTop: "10px",
                marginRight: "10px",
                padding: "10px",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "#16a34a",
                color: "white",
              }}
            >
              تم
            </button>

            <button
              onClick={() => deleteTask(index)}
              style={{
                marginTop: "10px",
                padding: "10px",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "#dc2626",
                color: "white",
              }}
            >
              حذف
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
