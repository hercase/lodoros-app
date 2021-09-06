import React from "react";
import "normalize.css";
import "./styles.scss";
import Clocks from "./components/Clocks";

function App() {
  return (
    <div className="app">
      <div className="container">
        <p className="title">Lodoros Time</p>
        <Clocks />
        <h2>¿Podemos hablar con Burro?</h2>
      </div>
    </div>
  );
}

export default App;
