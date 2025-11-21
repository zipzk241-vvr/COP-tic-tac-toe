import { useState } from "react";
import StartPage from "./pages/StartPage/StartPage";
import GamePage from "./pages/GamePage/GamePage";
import ResultsPage from "./pages/ResultsPage/ResultsPage";
import "./App.css";

/**
 * Головний компонент - чистий, керує тільки роутингом
 * React спостерігає за станами компонентів [2]
 */
function App() {
  const [currentPage, setCurrentPage] = useState("start");
  const [playerNames, setPlayerNames] = useState(null);
  const [gameResult, setGameResult] = useState({ winner: null, isDraw: false });

  // Обробники навігації
  const handleStartGame = (names) => {
    setPlayerNames(names);
    setCurrentPage("game");
  };

  const handleGameEnd = ({ winner, isDraw }) => {
    setGameResult({ winner, isDraw });
    setCurrentPage("results");
  };

  const handlePlayAgain = () => {
    setCurrentPage("game");
  };

  const handleBackToStart = () => {
    setCurrentPage("start");
    setPlayerNames(null);
    setGameResult({ winner: null, isDraw: false });
  };

  return (
    <div className="app">
      {currentPage === "start" && <StartPage onStartGame={handleStartGame} />}

      {currentPage === "game" && (
        <GamePage
          playerNames={playerNames}
          onGameEnd={handleGameEnd}
          onBackToStart={handleBackToStart}
        />
      )}

      {currentPage === "results" && (
        <ResultsPage
          winner={gameResult.winner}
          isDraw={gameResult.isDraw}
          onPlayAgain={handlePlayAgain}
          onBackToStart={handleBackToStart}
        />
      )}
    </div>
  );
}

export default App;
