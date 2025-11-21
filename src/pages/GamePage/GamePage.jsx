import { useEffect } from "react";
import Container from "../../components/common/Container/Container";
import Board from "../../components/game/Board/Board";
import PlayerInfo from "../../components/game/PlayerInfo/PlayerInfo";
import Button from "../../components/common/Button/Button";
import useGameLogic from "../../hooks/useGameLogic";
import "./GamePage.css";

function GamePage({ playerNames, onGameEnd, onBackToStart }) {
  const {
    cells,
    currentPlayer,
    isGameActive,
    moveHistory,
    winner,
    isDraw,
    winningLine,
    handleCellClick,
    startNewGame,
  } = useGameLogic();

  useEffect(() => {
    if (winner || isDraw) {
      const timer = setTimeout(() => {
        onGameEnd({ winner, isDraw });
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [winner, isDraw, onGameEnd]);

  return (
    <Container>
      <div className="game-page">
        <h1>Гра в розпалі</h1>

        <div className="game-page__players">
          <PlayerInfo
            player="X"
            name={playerNames?.playerXName || "Гравець X "}
            isActive={currentPlayer === "X" && isGameActive}
          />
          <PlayerInfo
            player="O"
            name={playerNames?.playerOName || "Гравець O "}
            isActive={currentPlayer === "O" && isGameActive}
          />
        </div>

        <Board
          cells={cells}
          onCellClick={handleCellClick}
          winningLine={winningLine}
        />

        <div className="game-page__info">
          <p>Ходів зроблено: {moveHistory.length}</p>

          {!isGameActive && (
            <p className="game-page__result">
              {winner ? `Переможець: ${winner}!` : "Нічия!"}
            </p>
          )}
        </div>

        <div className="game-page__actions">
          <Button onClick={startNewGame} variant="secondary">
            Нова гра
          </Button>
          <Button onClick={onBackToStart} variant="secondary">
            На початок
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default GamePage;
