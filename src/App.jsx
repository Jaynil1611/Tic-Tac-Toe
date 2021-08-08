import { Route, Routes } from "react-router";
import { Choice, Game, Home } from "./components";
import "./styles.css";

function App() {
  return (
    <div>
      <h2 className="hero">Tic Tac Toe</h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choice" element={<Choice />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
