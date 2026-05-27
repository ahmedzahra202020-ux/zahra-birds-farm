import React, { useEffect, useState } from "react";

export default function Expenses() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const [expenses, setExpenses] = useState<any[]>([]);

  useEffect(() => {
    const savedExpenses = localStorage.getItem("expenses");

    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = () => {
    if (!title || !amount) return;

    const newExpense = {
      title,
      amount: Number(amount),
      date: new Date().toLocaleDateString(),
    };

    setExpenses([...expenses, newExpense]);

    setTitle("");
    setAmount("");
  };

  const deleteExpense = (index: number) => {
    const updated = expenses.filter((_, i) => i !== index);

    setExpenses(updated);
  };

  const total = expenses.reduce((sum, item) => {
    return sum + item.amount;
  }, 0);

  return (
    <div
      style={{
        padding: "20px",
        background: "linear-gradient(to bottom, #020617, #111827)",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <h1
        style={{
          fontSize: "30px",
          marginBottom: "20px",
        }}
      >
        💰 إدارة المصاريف
      </h1>

      <div
        style={{
          backgroundColor: "#1e293b",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <input
          type="text"
          placeholder="اسم المصروف"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "10px",
            borderRadius: "10px",
            border: "none",
            fontSize: "16px",
          }}
        />

        <input
          type="number"
          placeholder="المبلغ"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "10px",
            borderRadius: "10px",
            border: "none",
            fontSize: "16px",
          }}
        />

        <button
          onClick={addExpense}
          style={{
            width: "100%",
            padding: "14px",
            border: "none",
            borderRadius: "10px",
            backgroundColor: "#f59e0b",
            color: "black",
            fontWeight: "bold",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          ➕ إضافة مصروف
        </button>
      </div>

      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          backgroundColor: "#065f46",
          borderRadius: "15px",
          fontSize: "22px",
          fontWeight: "bold",
        }}
      >
        إجمالي المصروفات:
        {total} جنيه
      </div>

      <div style={{ marginTop: "20px" }}>
        {expenses.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#1e293b",
              padding: "15px",
              borderRadius: "15px",
              marginBottom: "15px",
              boxShadow: "0 0 10px rgba(0,0,0,0.3)",
            }}
          >
            <h3
              style={{
                marginBottom: "10px",
              }}
            >
              {item.title}
            </h3>

            <p>💵 {item.amount} جنيه</p>

            <p>📅 {item.date}</p>

            <button
              onClick={() => deleteExpense(index)}
              style={{
                marginTop: "10px",
                padding: "10px",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "#dc2626",
                color: "white",
                cursor: "pointer",
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
