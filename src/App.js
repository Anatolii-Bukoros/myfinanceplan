import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Мій фінансовий план</h1>

      <div className="logos">
        <img src="/logos/mono.png" alt="Monobank" />
        <img src="/logos/privat.png" alt="PrivatBank" />
        <img src="/logos/pumb.png" alt="PUMB" />
        <img src="/logos/bolt.png" alt="Bolt" />
        <img src="/logos/uklon.png" alt="Uklon" />
        <img src="/logos/cash.png" alt="Cash" />
      </div>

      <p>Тут буде форма для введення балансу та витрат</p>
    </div>
  );
}

export default App;