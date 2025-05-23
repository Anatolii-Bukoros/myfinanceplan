import React, { useState } from 'react';
import './App.css';

function App() {
  const [mono, setMono] = useState('');
  const [privat, setPrivat] = useState('');
  const [pump, setPump] = useState('');
  const [uklon, setUklon] = useState('');
  const [cash, setCash] = useState('');
  const [bolt, setBolt] = useState('');

  const total =
    (parseFloat(mono) || 0) +
    (parseFloat(privat) || 0) +
    (parseFloat(pump) || 0) +
    (parseFloat(uklon) || 0) +
    (parseFloat(cash) || 0) +
    (parseFloat(bolt) || 0);

  return (
    <div className="container">
      <h1>Мій фінансовий план</h1>

      <div className="card">
        <img src="/logos/mono.png" alt="Monobank" className="logo" />
        <input
          className="input"
          type="number"
          value={mono}
          onChange={(e) => setMono(e.target.value.replace(/^0+(?=\d)/, ''))}
          placeholder="0"
        />
      </div>

      <div className="card">
        <img src="/logos/privat.png" alt="PrivatBank" className="logo" />
        <input
          className="input"
          type="number"
          value={privat}
          onChange={(e) => setPrivat(e.target.value.replace(/^0+(?=\d)/, ''))}
          placeholder="0"
        />
      </div>

      <div className="card">
        <img src="/logos/pumb.png" alt="PUMB" className="logo" />
        <input
          className="input"
          type="number"
          value={pump}
          onChange={(e) => setPump(e.target.value.replace(/^0+(?=\d)/, ''))}
          placeholder="0"
        />
      </div>

      <div className="card">
        <img src="/logos/uklon.png" alt="Uklon" className="logo uklon" />
        <input
          className="input"
          type="number"
          value={uklon}
          onChange={(e) => setUklon(e.target.value.replace(/^0+(?=\d)/, ''))}
          placeholder="0"
        />
      </div>

      <div className="card">
        <img src="/logos/cash.png" alt="Cash" className="logo" />
        <input
          className="input"
          type="number"
          value={cash}
          onChange={(e) => setCash(e.target.value.replace(/^0+(?=\d)/, ''))}
          placeholder="0"
        />
      </div>

      <div className="card">
        <img src="/logos/bolt.png" alt="Bolt" className="logo bolt" />
        <input
          className="input"
          type="number"
          value={bolt}
          onChange={(e) => setBolt(e.target.value.replace(/^0+(?=\d)/, ''))}
          placeholder="0"
        />
      </div>

      <div className="total">Загальна сума: {total.toFixed(2)} грн</div>
    </div>
  );
}

export default App;


Оновив App.js: тепер при введенні нулі автоматично прибираються (наприклад, «0500» перетвориться на «500»). Перевір — тепер має бути ок.



