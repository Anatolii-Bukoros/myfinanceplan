import React, { useState } from 'react';
import './App.css';

const categories = [
  { name: 'Monobank', logo: '/logos/mono.png' },
  { name: 'PrivatBank', logo: '/logos/privat.png' },
  { name: 'PUMB', logo: '/logos/pumb.png' },
  { name: 'Uklon', logo: '/logos/uklon.png' },
  { name: 'Cash', logo: '/logos/cash.png' },
  { name: 'Bolt', logo: '/logos/bolt.png' },
];

function App() {
  const [amounts, setAmounts] = useState(Array(categories.length).fill(''));

  const handleChange = (index, value) => {
    const newAmounts = [...amounts];
    newAmounts[index] = value;
    setAmounts(newAmounts);
  };

  const total = amounts.reduce((acc, val) => acc + parseFloat(val || 0), 0);

  return (
    <div className="app-container">
      <h1>Мій фінансовий план</h1>
      {categories.map((cat, index) => (
        <div className="input-row" key={cat.name}>
          <img src={cat.logo} alt={cat.name} className="logo" width={40} height={40} />
          <input
            type="number"
            placeholder="0"
            value={amounts[index]}
            onChange={(e) => handleChange(index, e.target.value)}
            className="amount-input"
            inputMode="numeric"
          />
        </div>
      ))}
      <h2>Загальна сума: {total.toFixed(2)} грн</h2>
    </div>
  );
}

export default App;
