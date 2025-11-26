import { useState, useEffect } from "react";
import { findWinner, isBoardFull } from "../utils/gameHelpers";

// Хук для перевірки результату гри
function useWinnerCheck(cells, isGameActive) {
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);
  const [winningLine, setWinningLine] = useState(null);

  useEffect(() => {
    if (!isGameActive) return;
    const result = findWinner(cells);

    if (result) {
      setWinner(result.winner);
      setWinningLine(result.line);
      return;
    }
    if (isBoardFull(cells)) {
      setIsDraw(true);
    }
  }, [cells, isGameActive]);

  const resetWinner = () => {
    setWinner(null);
    setIsDraw(false);
    setWinningLine(null);
  };

  return {
    winner,
    isDraw,
    winningLine,
    resetWinner,
  };
}


export default useWinnerCheck;
