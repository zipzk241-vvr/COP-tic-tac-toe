import Container from "../../components/common/Container/Container";
import Button from "../../components/common/Button/Button";

function StartPage({ onStartGame }) {
  return (
    <Container>
      <div className="start-page">
        <h1 className="start-page__title">Хрестики-Нулики</h1>
        <p className="start-page__description">
          Класична гра для двох гравців. Першим скласти ряд із трьох власних
          знаків горизонтально, вертикально або по діагоналі!
        </p>
        <div className="start-page__actions">
          <Button onClick={onStartGame} variant="primary">
            Почати гру
          </Button> 
        </div>
      </div>
    </Container>
  );
}

export default StartPage;
