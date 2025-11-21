import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router"; 
import * as S from "./GamePage.styles";
import Container from "../../components/common/Container/Container";
import Board from "../../components/game/Board/Board";
import PlayerInfo from "../../components/game/PlayerInfo/PlayerInfo";
import Button from "../../components/common/Button/Button";
import useGameLogic from "../../hooks/useGameLogic";

function GamePage() {
  const { userId } = useParams(); 
  const navigate = useNavigate(); 
  const [playerNames, setPlayerNames] = useState(null);

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

  // Завантаження даних гри з sessionStorage
  useEffect(() => {
    const gameData = sessionStorage.getItem(`game-${userId}`);
    if (gameData) {
      setPlayerNames(JSON.parse(gameData));
    } else {
      navigate("/");
    }
  }, [userId, navigate]);

  useEffect(() => {
    if (winner || isDraw) {
      const timer = setTimeout(() => {
        const results = {
          winner,
          isDraw,
          timestamp: new Date().toISOString(),
        };
        sessionStorage.setItem(`result-${userId}`, JSON.stringify(results));

        navigate(`/results/${userId}`);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [winner, isDraw, userId, navigate]);

  if (!playerNames) {
    return <div>Завантаження...</div>;
  }

  return (
    <Container>
      <S.GamePageWrapper>
        <S.Title>Гра в розпалі</S.Title>
        <S.UserId>ID гри: {userId}</S.UserId>

        <S.PlayersInfo>
          <PlayerInfo
            player="X"
            name={playerNames.playerXName}
            isActive={currentPlayer === "X" && isGameActive}
          />
          <PlayerInfo
            player="O"
            name={playerNames.playerOName}
            isActive={currentPlayer === "O" && isGameActive}
          />
        </S.PlayersInfo>

        <Board
          cells={cells}
          onCellClick={handleCellClick}
          winningLine={winningLine}
        />

        <S.GameInfo>
          <p>Ходів зроблено: {moveHistory.length}</p>

          {!isGameActive && (
            <S.GameResult>
              {winner ? `Переможець: ${winner}!` : "Нічия!"}
            </S.GameResult>
          )}
        </S.GameInfo>

        <S.Actions>
          <Button onClick={startNewGame} variant="secondary">
            Нова гра
          </Button>
          <Button onClick={() => navigate("/")} variant="secondary">
            На початок
          </Button>
        </S.Actions>
      </S.GamePageWrapper>
    </Container>
  );
}

export default GamePage;
