function ScoreBoard({ scores }) {
  return (
    <div className="scoreboard">
      <h3>Рахунок</h3>
      <div className="scoreboard__stats">
        <div className="scoreboard__item">
          <span className="scoreboard__label">X перемог:</span>
          <span className="scoreboard__value">{scores.X}</span>
        </div>
        <div className="scoreboard__item">
          <span className="scoreboard__label">O перемог:</span>
          <span className="scoreboard__value">{scores.O}</span>
        </div>
        <div className="scoreboard__item">
          <span className="scoreboard__label">Нічиї:</span>
          <span className="scoreboard__value">{scores.draws}</span>
        </div>
      </div>
    </div>
  );
}

export default ScoreBoard;
