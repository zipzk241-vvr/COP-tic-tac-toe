import { useEffect } from "react";
import Container from "../../components/common/Container/Container";
import WinnerDisplay from "../../components/results/WinnerDisplay/WinnerDisplay";
import ScoreBoard from "../../components/results/ScoreBoard/ScoreBoard";
import Button from "../../components/common/Button/Button";
import { useGameStats } from "../../hooks/useLocalStorage";
import "./ResultsPage.css";

function ResultsPage({ winner, isDraw, onPlayAgain, onBackToStart }) {
  const { stats, updateStats, resetStats } = useGameStats();
  useEffect(() => {
    updateStats(winner, isDraw);
  }, []); 

  return (
    <Container>
      <div className="results-page">
        <WinnerDisplay winner={winner} isDraw={isDraw} />

        <ScoreBoard scores={stats} />

        <div className="results-page__actions">
          <Button onClick={onPlayAgain} variant="primary">
            Грати ще раз
          </Button>
          <Button onClick={onBackToStart} variant="secondary">
            На початок
          </Button>
          <Button onClick={resetStats} variant="secondary">
            Скинути статистику
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default ResultsPage;
