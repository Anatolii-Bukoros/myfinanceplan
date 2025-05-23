import React, { useState } from 'react'; import './App.css'; import monoLogo from './logos/mono.png'; import privatLogo from './logos/privat.png'; import pumpLogo from './logos/pumb.png'; import uklonLogo from './logos/uklon.png'; import cashLogo from './logos/cash.png'; import boltLogo from './logos/bolt.png';

const App = () => { const [values, setValues] = useState({ mono: '', privat: '', pump: '', uklon: '', cash: '', bolt: '' });

const handleChange = (e) => { const { name, value } = e.target; const numericValue = value.replace(/^0+(?!$)/, '').replace(/[^0-9]/g, ''); setValues((prevValues) => ({ ...prevValues, [name]: numericValue })); };

const total = Object.values(values).reduce((acc, val) => acc + parseFloat(val || 0), 0).toFixed(2);

return ( <div className="app"> <div className="container"> <h1>Мій фінансовий план</h1>

<div className="input-row">
      <img src={monoLogo} alt="Monobank" className="logo" />
      <input type="text" name="mono" value={values.mono} onChange={handleChange} />
    </div>

    <div className="input-row">
      <img src={privatLogo} alt="PrivatBank" className="logo" />
      <input type="text" name="privat" value={values.privat} onChange={handleChange} />
    </div>

    <div className="input-row">
      <img src={pumpLogo} alt="PUMB" className="logo" />
      <input type="text" name="pump" value={values.pump} onChange={handleChange} />
    </div>

    <div className="input-row">
      <img src={uklonLogo} alt="Uklon" className="logo small-logo" />
      <input type="text" name="uklon" value={values.uklon} onChange={handleChange} />
    </div>

    <div className="input-row">
      <img src={cashLogo} alt="Cash" className="logo" />
      <input type="text" name="cash" value={values.cash} onChange={handleChange} />
    </div>

    <div className="input-row">
      <img src={boltLogo} alt="Bolt" className="logo small-logo" />
      <input type="text" name="bolt" value={values.bolt} onChange={handleChange} />
    </div>

    <h2>Загальна сума: {total} грн</h2>
  </div>
</div>

); };

export default App;


