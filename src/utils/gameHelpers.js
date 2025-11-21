// Комбінації переможних ліній
export const WINNING_COMBINATIONS = [
  [0, 1, 2], 
  [3, 4, 5], 
  [6, 7, 8], 
  [0, 3, 6], 
  [1, 4, 7], 
  [2, 5, 8], 
  [0, 4, 8], 
  [2, 4, 6], 
];

export const isCellEmpty = (cells, index) => {
  return cells[index] === null;
};
export const isBoardFull = (cells) => {
  return cells.every((cell) => cell !== null);
};

export const findWinner = (cells) => {
  for (let combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination;

    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return {
        winner: cells[a],
        line: combination,
      };
    }
  }

  return null;
};
