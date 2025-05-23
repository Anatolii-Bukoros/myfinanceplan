import React, { useState } from 'react'; import './App.css';

const sources = [ { id: 'monobank', label: 'Monobank', image: 'logos/mono.png' }, { id: 'privatbank', label: 'PrivatBank', image: 'logos/privat.png' }, { id: 'pumb', label: 'PUMB', image: 'logos/pumb.png' }, { id: 'uklon', label: 'Uklon', image: 'logos/uklon.png' }, { id: 'cash', label: 'Cash', image: 'logos/cash.png' }, { id: 'bolt', label: 'Bolt', image: 'logos/bolt.png' }, ];

function App() { const [values, setValues] = useState({});

const handleChange = (id, value) => { const numericValue = parseFloat(value); setValues((prev) => ({ ...prev, [id]: isNaN(numericValue) ? '' : numericValue })); };

const total = Object.values(values).reduce((acc, val) => acc + (parseFloat(val) || 0), 0);

return ( <div className="app"> <h1>Мій фінансовий план</h1> {sources.map((source) => ( <div className="row" key={source.id}> <img src={source.image} alt={source.label} className={logo ${source.id}} /> <input type="number" placeholder="0" value={values[source.id] || ''} onChange={(e) => handleChange(source.id, e.target.value)} /> </div> ))} <h2>Загальна сума: {total.toFixed(2)} грн</h2> </div> ); }

export default App;


export default App;
