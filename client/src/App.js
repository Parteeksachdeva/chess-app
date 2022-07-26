import { Routes, Route } from "react-router-dom";

import "./App.css";
import GameBoardContainer from "./components/GameBoard/GameBoardContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<p>Hello Wo</p>} />
      <Route path="/:roomId" element={<GameBoardContainer />} />
    </Routes>
  );
}

export default App;
