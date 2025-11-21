import { useState, useEffect } from "react";

// Хук для роботи з localStorage
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error loading from localStorage:", error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  };

  return [storedValue, setValue];
}
export function useGameStats() {
  const [stats, setStats] = useLocalStorage("tic-tac-toe-stats", {
    X: 0,
    O: 0,
    draws: 0,
    totalGames: 0,
  });

  const updateStats = (winner, isDraw) => {
    setStats((prev) => ({
      X: winner === "X" ? prev.X + 1 : prev.X,
      O: winner === "O" ? prev.O + 1 : prev.O,
      draws: isDraw ? prev.draws + 1 : prev.draws,
      totalGames: prev.totalGames + 1,
    }));
  };

  const resetStats = () => {
    setStats({
      X: 0,
      O: 0,
      draws: 0,
      totalGames: 0,
    });
  };

  return {
    stats,
    updateStats,
    resetStats,
  };
}

export default useLocalStorage;
