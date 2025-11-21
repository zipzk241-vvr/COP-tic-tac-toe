import { useState } from "react";
import { useNavigate } from "react-router";
import * as S from "./StartPage.styles";
import Container from "../../components/common/Container/Container";
import Button from "../../components/common/Button/Button";

function StartPage() {
  const navigate = useNavigate(); 
  const [playerXName, setPlayerXName] = useState("Гравець X");
  const [playerOName, setPlayerOName] = useState("Гравець O");

  const handleStartGame = () => {
    const userId =
      Date.now().toString(36) + Math.random().toString(36).substr(2);

    // Зберігаємо імена гравців у sessionStorage
    sessionStorage.setItem(
      `game-${userId}`,
      JSON.stringify({
        playerXName,
        playerOName,
        startTime: new Date().toISOString(),
      })
    );
    navigate(`/game/${userId}`);
  };

  return (
    <Container>
      <S.StartPageWrapper>
        <S.Title>Хрестики-Нулики</S.Title>

        <S.Description>
          Класична гра для двох гравців. Першим скласти ряд із трьох власних
          знаків горизонтально, вертикально або по діагоналі!
        </S.Description>

        <S.PlayersSetup>
          <S.PlayerSetup>
            <S.Label htmlFor="player-x">Ім'я гравця X:</S.Label>
            <S.Input
              id="player-x"
              type="text"
              value={playerXName}
              onChange={(e) => setPlayerXName(e.target.value)}
              placeholder="Гравець X"
            />
          </S.PlayerSetup>

          <S.PlayerSetup>
            <S.Label htmlFor="player-o">Ім'я гравця O:</S.Label>
            <S.Input
              id="player-o"
              type="text"
              value={playerOName}
              onChange={(e) => setPlayerOName(e.target.value)}
              placeholder="Гравець O"
            />
          </S.PlayerSetup>
        </S.PlayersSetup>

        <S.Actions>
          <Button onClick={handleStartGame} variant="primary">
            Почати гру
          </Button>
        </S.Actions>
      </S.StartPageWrapper>
    </Container>
  );
}

export default StartPage;
