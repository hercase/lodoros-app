import React from "react";
import "normalize.css";
import "./styles.scss";

import Clocks from "./components/Clocks";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app container">
      <Header />
      <Clocks />
      <Footer />
    </div>
  );
}

export default App;
