import { useState } from "react";
import StartPage from "./pages/StartPage/StartPage";
import GamePage from "./pages/GamePage/GamePage";
import ResultsPage from "./pages/ResultsPage/ResultsPage";
import "./App.css";

function App() {
  // Стани
  const [currentPage, setCurrentPage] = useState("start");
  const [cells, setCells] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);
  const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 });

  // Handlers 
  const handleStartGame = () => {
    setCurrentPage("game");
  };

  const handleCellClick = (index) => {
    console.log("Cell clicked:", index);
  };

  const handleReset = () => {
    setCells(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
    setIsDraw(false);
  };

  const handleBackToStart = () => {
    setCurrentPage("start");
    handleReset();
  };

  const handlePlayAgain = () => {
    handleReset();
    setCurrentPage("game");
  };

  // Рендеринг сторінок 
  return (
    <div className="app">
      {currentPage === "start" && <StartPage onStartGame={handleStartGame} />}

      {currentPage === "game" && (
        <GamePage
          cells={cells}
          currentPlayer={currentPlayer}
          onCellClick={handleCellClick}
          onReset={handleReset}
          onBackToStart={handleBackToStart}
        />
      )}

      {currentPage === "results" && (
        <ResultsPage
          winner={winner}
          isDraw={isDraw}
          scores={scores}
          onPlayAgain={handlePlayAgain}
          onBackToStart={handleBackToStart}
        />
      )}
    </div>
  );
}

export default App;
