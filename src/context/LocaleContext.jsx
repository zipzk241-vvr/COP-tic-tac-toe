import { createContext, useContext, useState } from "react";

const translations = {
  uk: {
    gameTitle: "Хрестики-Нулики",
    playerX: "Гравець X",
    playerO: "Гравець O",
    startGame: "Почати гру",
    newGame: "Нова гра",
    settings: "Налаштування",
    statistics: "Статистика",
    backToStart: "На початок",
    yourTurn: "Ваш хід",
    waiting: "Очікування",
    winner: "Переможець",
    draw: "Нічия",
    rules: "Правила",
    gamesPlayed: "Зіграно ігор",
    wins: "Перемог",
    draws: "Нічиї",
  },
  en: {
    gameTitle: "Tic-Tac-Toe",
    playerX: "Player X",
    playerO: "Player O",
    startGame: "Start Game",
    newGame: "New Game",
    settings: "Settings",
    statistics: "Statistics",
    backToStart: "Back to Start",
    yourTurn: "Your Turn",
    waiting: "Waiting",
    winner: "Winner",
    draw: "Draw",
    rules: "Rules",
    gamesPlayed: "Games Played",
    wins: "Wins",
    draws: "Draws",
  },
};

const LocaleContext = createContext();

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState(() => {
    return localStorage.getItem("locale") || "uk";
  });

  const t = (key) => translations[locale]?.[key] || key;

  const changeLocale = (newLocale) => {
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  return (
    <LocaleContext.Provider value={{ locale, changeLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
};
