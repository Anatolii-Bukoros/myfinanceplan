// App.js import React, { useState } from 'react'; import './App.css'; import monobankLogo from './logos/monobank.png'; import privatLogo from './logos/privat.png'; import pumpLogo from './logos/pumb.png'; import uklonLogo from './logos/uklon.png'; import cashLogo from './logos/cash.png'; import boltLogo from './logos/bolt.png';

const sources = [ { name: 'Monobank', key: 'monobank', logo: monobankLogo }, { name: 'PrivatBank', key: 'privat', logo: privatLogo }, { name: 'PUMB', key: 'pump', logo: pumpLogo }, { name: 'Uklon', key: 'uklon', logo: uklonLogo }, { name: 'Cash', key: 'cash', logo: cashLogo }, { name: 'Bolt', key: 'bolt', logo: boltLogo }, ];

function App() { const [balances, setBalances] = useState({ monobank: '', privat: '', pump: '', uklon: '', cash: '', bolt: '', });

const handleChange = (e, key) => { let value = e.target.value; value = value.replace(/[^0-9.]/g, ''); if (value.startsWith('0') && value.length > 1 && !value.startsWith('0.')) { value = value.replace(/^0+/, ''); } setBalances(prev => ({ ...prev, [key]: value })); };

const total = Object.values(balances).reduce((acc, val) => acc + (parseFloat(val) || 0), 0);

return ( <div className="container"> <h1>Мій фінансовий план</h1> {sources.map(({ name, key, logo }) => ( <div className="input-group" key={key}> <img src={logo} alt={name} className={logo ${key}} /> <input type="text" value={balances[key]} onChange={(e) => handleChange(e, key)} className="amount-input" /> </div> ))} <h2>Загальна сума: {total.toFixed(2)} грн</h2> </div> ); }

export default App;


