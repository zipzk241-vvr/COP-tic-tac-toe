import { useState } from "react";

// Хук для управління станом гри
function useGameState() {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [isGameActive, setIsGameActive] = useState(true);
  const [moveHistory, setMoveHistory] = useState([]);

  const resetGame = () => {
    setCells(Array(9).fill(null));
    setCurrentPlayer("X");
    setIsGameActive(true);
    setMoveHistory([]);
  };
  const switchPlayer = () => {
    setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"));
  };
  const updateCell = (index, value) => {
    const newCells = [...cells];
    newCells[index] = value;
    setCells(newCells);
    setMoveHistory((prev) => [...prev, { index, player: value }]);
  };
  const endGame = () => {
    setIsGameActive(false);
  };

  return {
    cells,
    currentPlayer,
    isGameActive,
    moveHistory,
    resetGame,
    switchPlayer,
    updateCell,
    endGame,
  };
}

export default useGameState;
