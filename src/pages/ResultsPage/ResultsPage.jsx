import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router"; 
import * as S from "./ResultsPage.styles";
import Container from "../../components/common/Container/Container";
import WinnerDisplay from "../../components/results/WinnerDisplay/WinnerDisplay";
import ScoreBoard from "../../components/results/ScoreBoard/ScoreBoard";
import Button from "../../components/common/Button/Button";
import { useGameStats } from "../../hooks/useLocalStorage";

function ResultsPage() {
  const { userId } = useParams(); 
  const navigate = useNavigate(); 
  const [result, setResult] = useState(null);
  const { stats, updateStats, resetStats } = useGameStats();

  useEffect(() => {
    const resultData = sessionStorage.getItem(`result-${userId}`);
    const gameData = sessionStorage.getItem(`game-${userId}`);

    if (resultData && gameData) {
      const parsedResult = JSON.parse(resultData);
      setResult(parsedResult);
      updateStats(parsedResult.winner, parsedResult.isDraw);
    } else {
      navigate("/");
    }
  }, [userId, navigate]);

  const handlePlayAgain = () => {
    // Генеруємо новий userId для нової гри 
    const newUserId =
      Date.now().toString(36) + Math.random().toString(36).substr(2);
    const gameData = sessionStorage.getItem(`game-${userId}`);

    if (gameData) {
      sessionStorage.setItem(`game-${newUserId}`, gameData);
    }

    navigate(`/game/${newUserId}`);
  };

  if (!result) {
    return <div>Завантаження...</div>;
  }

  return (
    <Container>
      <S.ResultsPageWrapper>
        <WinnerDisplay winner={result.winner} isDraw={result.isDraw} />

        <S.UserId>ID гри: {userId}</S.UserId>

        <ScoreBoard scores={stats} />

        <S.Actions>
          <Button onClick={handlePlayAgain} variant="primary">
            Грати ще раз
          </Button>
          <Button onClick={() => navigate("/")} variant="secondary">
            На початок
          </Button>
          <Button onClick={resetStats} variant="secondary">
            Скинути статистику
          </Button>
        </S.Actions>
      </S.ResultsPageWrapper>
    </Container>
  );
}

export default ResultsPage;
