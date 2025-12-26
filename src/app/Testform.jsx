"use client";
import { useState } from "react";

export default function Testform() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Message sent ✅");
      setForm({ name: "", email: "", phone: "", message: "" });
    } else {
      alert("Failed ❌");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      <input
        placeholder="E-mail"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />
      
      <input
        placeholder="Phone"
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        required
      />
      <textarea
        placeholder="Message"
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        required
      />
      <button type="submit">Send</button>
    </form>
  );
}
