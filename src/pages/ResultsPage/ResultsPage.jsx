import Container from "../../components/common/Container/Container";
import WinnerDisplay from "../../components/results/WinnerDisplay/WinnerDisplay";
import ScoreBoard from "../../components/results/ScoreBoard/ScoreBoard";
import Button from "../../components/common/Button/Button";

function ResultsPage({ winner, isDraw, scores, onPlayAgain, onBackToStart }) {
  return (
    <Container>
      <div className="results-page">
        <WinnerDisplay winner={winner} isDraw={isDraw} />

        <ScoreBoard scores={scores} />

        <div className="results-page__actions">
          <Button onClick={onPlayAgain} variant="primary">
            Грати ще раз
          </Button>
          <Button onClick={onBackToStart} variant="secondary">
            На початок
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default ResultsPage;
