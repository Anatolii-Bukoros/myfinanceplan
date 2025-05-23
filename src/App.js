import React, { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    pump: "",
    privat: "",
    monoWhite: "",
    monoBlack: "",
    cash: "",
    bolt: "",
    fuel: "",
    mileage: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <h1>Мій фінансовий план</h1>

      <div className="form">
        <label>Картка PUMP: <input name="pump" value={form.pump} onChange={handleChange} /></label>
        <label>Privat24: <input name="privat" value={form.privat} onChange={handleChange} /></label>
        <label>Monobank (біла): <input name="monoWhite" value={form.monoWhite} onChange={handleChange} /></label>
        <label>Monobank (чорна): <input name="monoBlack" value={form.monoBlack} onChange={handleChange} /></label>
        <label>Готівка: <input name="cash" value={form.cash} onChange={handleChange} /></label>
        <label>Bolt: <input name="bolt" value={form.bolt} onChange={handleChange} /></label>
        <label>Літри в баку: <input name="fuel" value={form.fuel} onChange={handleChange} /></label>
        <label>Пробіг (км): <input name="mileage" value={form.mileage} onChange={handleChange} /></label>
      </div>
    </div>
  );
}

export default App;