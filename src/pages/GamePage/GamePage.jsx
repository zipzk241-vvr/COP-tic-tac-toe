import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import * as S from "./GamePage.styles";
import Container from "../../components/common/Container/Container";
import Board from "../../components/game/Board/Board";
import PlayerInfo from "../../components/game/PlayerInfo/PlayerInfo";
import Button from "../../components/common/Button/Button";

import {
  useCells,
  useCurrentPlayer,
  useIsGameActive,
  useWinner,
  useIsDraw,
  useWinningLine,
  useMakeMove,
  useResetGame,
  useSettings,
} from "../../store";

function GamePage() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [playerNames, setPlayerNames] = useState(null);
  const cells = useCells();
  const currentPlayer = useCurrentPlayer();
  const isGameActive = useIsGameActive();
  const winner = useWinner();
  const isDraw = useIsDraw();
  const winningLine = useWinningLine();

  const makeMove = useMakeMove();
  const resetGame = useResetGame();
  const settings = useSettings();

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
        const results = { winner, isDraw, timestamp: new Date().toISOString() };
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
        <S.SettingsButton onClick={() => navigate("/settings")}>
          ⚙️
        </S.SettingsButton>

        <S.Title>Гра в розпалі</S.Title>

        <S.PlayersInfo>
          <PlayerInfo
            player="X"
            name={playerNames.playerXName || settings.playerXName}
            isActive={currentPlayer === "X" && isGameActive}
          />
          <PlayerInfo
            player="O"
            name={playerNames.playerOName || settings.playerOName}
            isActive={currentPlayer === "O" && isGameActive}
          />
        </S.PlayersInfo>

        <Board cells={cells} onCellClick={makeMove} winningLine={winningLine} />

        <S.GameInfo>
          <p>Ходів зроблено: {cells.filter((c) => c !== null).length}</p>

          {!isGameActive && (
            <S.GameResult>
              {winner ? `Переможець: ${winner}!` : "Нічия!"}
            </S.GameResult>
          )}
        </S.GameInfo>

        <S.Actions>
          <Button onClick={resetGame} variant="primary">
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
