import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { GameContextProvider } from "./contexts";

ReactDOM.render(
  <React.StrictMode>
    <GameContextProvider>
      <Router>
        <App />
      </Router>
    </GameContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
