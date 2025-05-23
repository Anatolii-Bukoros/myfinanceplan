import React, { useState } from 'react'; import './App.css'; import './App.css';

function App() { const [mono, setMono] = useState(0); const [pumb, setPumb] = useState(0); const [privat, setPrivat] = useState(0); const [uklon, setUklon] = useState(0); const [cash, setCash] = useState(0); const [bolt, setBolt] = useState(0);

const total = mono + pumb + privat + uklon + cash + bolt;

return ( <div className="container"> <h1>Мій фінансовий план</h1>

<div className="card">
    <img src="/logos/mono.png" alt="Monobank" className="logo" />
    <input
      type="number"
      value={mono}
      onChange={(e) => setMono(parseFloat(e.target.value) || 0)}
      className="input"
      placeholder="Monobank"
    />
  </div>

  <div className="card">
    <img src="/logos/privat.png" alt="PrivatBank" className="logo" />
    <input
      type="number"
      value={privat}
      onChange={(e) => setPrivat(parseFloat(e.target.value) || 0)}
      className="input"
      placeholder="PrivatBank"
    />
  </div>

  <div className="card">
    <img src="/logos/pumb.png" alt="PUMB" className="logo" />
    <input
      type="number"
      value={pumb}
      onChange={(e) => setPumb(parseFloat(e.target.value) || 0)}
      className="input"
      placeholder="PUMB"
    />
  </div>

  <div className="card">
    <img src="/logos/uklon.png" alt="Uklon" className="logo" />
    <input
      type="number"
      value={uklon}
      onChange={(e) => setUklon(parseFloat(e.target.value) || 0)}
      className="input"
      placeholder="Uklon"
    />
  </div>

  <div className="card">
    <img src="/logos/cash.png" alt="Cash" className="logo" />
    <input
      type="number"
      value={cash}
      onChange={(e) => setCash(parseFloat(e.target.value) || 0)}
      className="input"
      placeholder="Готівка"
    />
  </div>

  <div className="card">
    <img src="/logos/bolt.png" alt="Bolt" className="logo" />
    <input
      type="number"
      value={bolt}
      onChange={(e) => setBolt(parseFloat(e.target.value) || 0)}
      className="input"
      placeholder="Bolt"
    />
  </div>

  <h2 className="total">Загальна сума: {total.toFixed(2)} грн</h2>
</div>

); }

export default App;


