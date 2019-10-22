import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { BuildGeoJSON } from "./libs/firebase";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BuildGeoJSON user="tliqun@gmail.com" />
      </header>
    </div>
  );
}

export default App;
