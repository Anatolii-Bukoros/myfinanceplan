import React, { useState } from "react"; import "./App.css";

const accounts = [ { name: "Monobank", icon: "monobank.png" }, { name: "PrivatBank", icon: "privat.png" }, { name: "PUMB", icon: "pumb.png" }, { name: "Uklon", icon: "uklon.png" }, { name: "Cash", icon: "cash.png" }, { name: "Bolt", icon: "bolt.png" } ];

function App() { const [values, setValues] = useState(Object.fromEntries(accounts.map(acc => [acc.name, ""])));

const handleChange = (e, name) => { const val = e.target.value; if (/^\d*.?\d{0,2}$/.test(val)) { setValues({ ...values, [name]: val }); } };

const getTotal = () => { return Object.values(values) .map(val => parseFloat(val) || 0) .reduce((acc, num) => acc + num, 0) .toFixed(2); };

return ( <div className="container"> <h1>Мій фінансовий план</h1> {accounts.map(account => ( <div className="row" key={account.name}> <div className="logo-wrapper"> <img src={process.env.PUBLIC_URL + "/logos/" + account.icon} alt={account.name} className="logo" width="40" height="40" /> </div> <input type="text" inputMode="decimal" pattern="^\d*\.?\d{0,2}$" placeholder="" value={values[account.name]} onChange={(e) => handleChange(e, account.name)} /> </div> ))} <h2>Загальна сума: {getTotal()} грн</h2> </div> ); }

export default App;


