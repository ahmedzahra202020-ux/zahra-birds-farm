import React, { useEffect, useState } from "react";

export default function Customers() {
  const [name, setName] = useState("");

  const [phone, setPhone] = useState("");

  const [note, setNote] = useState("");

  const [customers, setCustomers] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("customers");

    if (saved) {
      setCustomers(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("customers", JSON.stringify(customers));
  }, [customers]);

  const addCustomer = () => {
    if (!name || !phone) return;

    const newCustomer = {
      name,
      phone,
      note,
      date: new Date().toLocaleDateString(),
    };

    setCustomers([...customers, newCustomer]);

    setName("");
    setPhone("");
    setNote("");
  };

  const deleteCustomer = (index: number) => {
    const updated = customers.filter((_, i) => i !== index);

    setCustomers(updated);
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
      <h1>👤 العملاء</h1>

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
          placeholder="اسم العميل"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          placeholder="رقم الهاتف"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "10px",
            borderRadius: "10px",
            border: "none",
          }}
        />

        <textarea
          placeholder="ملاحظات"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "none",
            marginBottom: "10px",
            minHeight: "100px",
          }}
        />

        <button
          onClick={addCustomer}
          style={{
            width: "100%",
            padding: "14px",
            border: "none",
            borderRadius: "10px",
            backgroundColor: "#2563eb",
            color: "white",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          ➕ إضافة عميل
        </button>
      </div>

      <div style={{ marginTop: "20px" }}>
        {customers.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#1e293b",
              padding: "15px",
              borderRadius: "15px",
              marginBottom: "15px",
            }}
          >
            <h3>👤 {item.name}</h3>

            <p>📞 {item.phone}</p>

            <p>📝 {item.note}</p>

            <p>📅 {item.date}</p>

            <button
              onClick={() => deleteCustomer(index)}
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