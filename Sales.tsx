import React, { useEffect, useState } from "react";

export default function Sales() {
  const [customer, setCustomer] = useState("");

  const [bird, setBird] = useState("");

  const [price, setPrice] = useState("");

  const [sales, setSales] = useState<any[]>([]);

  useEffect(() => {
    const savedSales = localStorage.getItem("sales");

    if (savedSales) {
      setSales(JSON.parse(savedSales));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("sales", JSON.stringify(sales));
  }, [sales]);

  const addSale = () => {
    if (!customer || !bird || !price) return;

    const newSale = {
      customer,
      bird,
      price: Number(price),
      date: new Date().toLocaleDateString(),
    };

    setSales([...sales, newSale]);

    setCustomer("");
    setBird("");
    setPrice("");
  };

  const deleteSale = (index: number) => {
    const updated = sales.filter((_, i) => i !== index);

    setSales(updated);
  };

  const totalSales = sales.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  return (
    <div
      style={{
        padding: "20px",
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #020617, #111827)",
        color: "white",
      }}
    >
      <h1>💵 المبيعات</h1>

      <div
        style={{
          backgroundColor: "#1e293b",
          padding: "20px",
          borderRadius: "15px",
          marginTop: "20px",
        }}
      >
        <input
          type="text"
          placeholder="اسم العميل"
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "10px",
            borderRadius: "10px",
            border: "none",
          }}
        />

        <input
          type="text"
          placeholder="نوع الطائر"
          value={bird}
          onChange={(e) => setBird(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "10px",
            borderRadius: "10px",
            border: "none",
          }}
        />

        <input
          type="number"
          placeholder="السعر"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "10px",
            borderRadius: "10px",
            border: "none",
          }}
        />

        <button
          onClick={addSale}
          style={{
            width: "100%",
            padding: "14px",
            border: "none",
            borderRadius: "10px",
            backgroundColor: "#16a34a",
            color: "white",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          ➕ إضافة عملية بيع
        </button>
      </div>

      <div
        style={{
          marginTop: "20px",
          backgroundColor: "#065f46",
          padding: "20px",
          borderRadius: "15px",
          fontSize: "22px",
          fontWeight: "bold",
        }}
      >
        إجمالي المبيعات:
        {totalSales} جنيه
      </div>

      <div style={{ marginTop: "20px" }}>
        {sales.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#1e293b",
              padding: "15px",
              borderRadius: "15px",
              marginBottom: "15px",
            }}
          >
            <h3>🐦 {item.bird}</h3>

            <p>
              👤 العميل:
              {item.customer}
            </p>

            <p>
              💰 السعر:
              {item.price} جنيه
            </p>

            <p>📅 {item.date}</p>

            <button
              onClick={() => deleteSale(index)}
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
