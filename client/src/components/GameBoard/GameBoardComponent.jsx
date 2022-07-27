import React, { useState } from "react";

import Chessboard from "chessboardjsx";

export default function GameBoardComponent({
  fen,
  handleMove,
  isLoading,
  side,
}) {
  if (isLoading) {
    return "Loading...";
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Chessboard
        position={fen}
        orientation={side}
        width={700}
        onDrop={(move) =>
          handleMove({
            from: move.sourceSquare,
            to: move.targetSquare,
            promotion: "q",
          })
        }
      />
    </div>
  );
}
