import { useState } from "react";
import Container from "../../components/common/Container/Container";
import Button from "../../components/common/Button/Button";
import "./StartPage.css";

function StartPage({ onStartGame }) {
  const [playerXName, setPlayerXName] = useState("Гравець X");
  const [playerOName, setPlayerOName] = useState("Гравець O");

  const handleStartGame = () => {
    onStartGame({
      playerXName,
      playerOName,
    });
  };

  return (
    <Container>
      <div className="start-page">
        <h1 className="start-page__title">Хрестики-Нулики</h1>

        <p className="start-page__description">
          Класична гра для двох гравців. Першим скласти ряд із трьох власних
          знаків горизонтально, вертикально або по діагоналі!
        </p>

        <div className="start-page__players">
          <div className="player-setup">
            <label htmlFor="player-x">Ім'я гравця X: </label>
            <input
              id="player-x"
              type="text"
              value={playerXName}
              onChange={(e) => setPlayerXName(e.target.value)}
              placeholder="Гравець X"
            />
          </div>

          <div className="player-setup">
            <label htmlFor="player-o">Ім'я гравця O: </label>
            <input
              id="player-o"
              type="text"
              value={playerOName}
              onChange={(e) => setPlayerOName(e.target.value)}
              placeholder="Гравець O"
            />
          </div>
        </div>

        <div className="start-page__actions">
          <Button onClick={handleStartGame} variant="primary">
            Почати гру
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default StartPage;
