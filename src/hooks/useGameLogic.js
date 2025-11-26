import { useCallback } from "react";
import useGameState from "./useGameState";
import useWinnerCheck from "./useWinnerCheck";
import { isCellEmpty } from "../utils/gameHelpers";

// Основний хук логіки гри
 
function useGameLogic() {
  const {
    cells,
    currentPlayer,
    isGameActive,
    moveHistory,
    resetGame,
    switchPlayer,
    updateCell, 
    endGame,
  } = useGameState();

  const { winner, isDraw, winningLine, resetWinner } = useWinnerCheck(
    cells,
    isGameActive
  );

  const handleCellClick = useCallback(
    (index) => {
      // Перевірка чи гра активна
      if (!isGameActive) {
        console.log("Гра завершена");
        return;
      }
      if (!isCellEmpty(cells, index)) {
        console.log("Клітинка зайнята");
        return;
      }
      updateCell(index, currentPlayer);
      switchPlayer();
    },
    [cells, currentPlayer, isGameActive, updateCell, switchPlayer]
  );

  const startNewGame = useCallback(() => {
    resetGame();
    resetWinner();
  }, [resetGame, resetWinner]);

  if ((winner || isDraw) && isGameActive) {
    endGame();
  }

  return {
    cells,
    currentPlayer,
    isGameActive,
    moveHistory,
    winner,
    isDraw,
    winningLine,
    handleCellClick,
    startNewGame,
  };
}

export default useGameLogic;
