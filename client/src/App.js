import { Routes, Route } from "react-router-dom";

import "./App.css";
import GameBoardContainer from "./components/GameBoard/GameBoardContainer";
import HomeContainer from "./components/Home/HomeContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeContainer />} />
      <Route path="/:roomId" element={<GameBoardContainer />} />
    </Routes>
  );
}

export default App;
