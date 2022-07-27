import React, { useEffect, useState } from "react";
import GameBoardComponent from "./GameBoardComponent";

import { Chess } from "chess.js";

const chess = new Chess(
  "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
);

export default function GameBoardContainer() {
  const [fen, setFen] = useState(chess.fen());
  const [side, setSide] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleMove = (move) => {
    const currentTurn = chess.turn() === "w" ? "white" : "black";
    if (currentTurn !== side) return;

    const chessMove = chess.move(move);
    if (chessMove) {
      setFen(chess.fen());
    }
  };

  const chooseSide = () => {
    setSide("white");
  };

  useEffect(() => {
    chooseSide();
    setIsLoading(false);
  }, []);

  return <GameBoardComponent {...{ fen, handleMove, isLoading, side }} />;
}
