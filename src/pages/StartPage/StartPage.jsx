import { useState } from "react";
import { useNavigate } from "react-router";
import * as S from "./StartPage.styles";
import Container from "../../components/common/Container/Container";
import Button from "../../components/common/Button/Button";
import { useLocale } from "../../context/LocaleContext";
import {
  useSettings,
} from "../../store";

function StartPage() {
  const navigate = useNavigate();
  const settings = useSettings();
  const { t } = useLocale();
  const [playerXName, setPlayerXName] = useState("Гравець X");
  const [playerOName, setPlayerOName] = useState("Гравець O");

  const handleStartGame = () => {
    const userId =
      Date.now().toString(36) + Math.random().toString(36).substr(2);

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
        <S.SettingsButton onClick={() => navigate("/settings")}>
          ⚙️
        </S.SettingsButton>
        <S.Title>{t("gameTitle")}</S.Title>

        <S.Description>
          Класична гра для двох гравців. Першим скласти ряд із трьох власних
          знаків горизонтально, вертикально або по діагоналі!
        </S.Description>

        <S.PlayersSetup>
          <S.PlayerSetup>
            <S.Label htmlFor="player-x">{t("playerX")}:</S.Label>
            <S.Input
              id="player-x"
              type="text"
              value={settings.playerXName}
              onChange={(e) => setPlayerXName(e.target.value)}
              placeholder="Гравець X"
            />
          </S.PlayerSetup>

          <S.PlayerSetup>
            <S.Label htmlFor="player-o">{t("playerO")}:</S.Label>
            <S.Input
              id="player-o"
              type="text"
              value={settings.playerOName}
              onChange={(e) => setPlayerOName(e.target.value)}
              placeholder="Гравець O"
            />
          </S.PlayerSetup>
        </S.PlayersSetup>

        <S.Actions>
          <Button onClick={handleStartGame} variant="primary">
            {t("startGame")}
          </Button>
        </S.Actions>
        <S.StatsLink onClick={() => navigate("/statistics")}>
          Переглянути статистику
        </S.StatsLink>
      </S.StartPageWrapper>
    </Container>
  );
}

export default StartPage;
