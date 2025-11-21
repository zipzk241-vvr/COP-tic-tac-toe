import Container from "../../components/common/Container/Container";
import Board from "../../components/game/Board/Board";
import PlayerInfo from "../../components/game/PlayerInfo/PlayerInfo";
import Button from "../../components/common/Button/Button";

function GamePage({
  cells,
  currentPlayer,
  onCellClick,
  onReset,
  onBackToStart,
}) {
  return (
    <Container>
      <div className="game-page">
        <h1>Гра</h1>

        <div className="game-page__players">
          <PlayerInfo player="X" isActive={currentPlayer === "X"} />
          <PlayerInfo player="O" isActive={currentPlayer === "O"} />
        </div>

        <Board cells={cells} onCellClick={onCellClick} />

        <div className="game-page__actions">
          <Button onClick={onReset} variant="secondary">
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
