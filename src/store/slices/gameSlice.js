export const createGameSlice = (set, get) => ({
  // STATE
  cells: Array(9).fill(null),
  currentPlayer: "X",
  isGameActive: true,
  winner: null,
  isDraw: false,
  winningLine: null,
  moveHistory: [],

  // ACTIONS
  makeMove: (index) => {
    const { cells, currentPlayer, isGameActive } = get();

    if (!isGameActive || cells[index]) return;

    const newCells = [...cells];
    newCells[index] = currentPlayer;

    set({
      cells: newCells,
      currentPlayer: currentPlayer === "X" ? "O" : "X",
      moveHistory: [...get().moveHistory, { index, player: currentPlayer }],
    });

    // Перевірка переможця
    get().checkWinner();
  },

  checkWinner: () => {
    const { cells } = get();
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Рядки
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Стовпці
      [0, 4, 8],
      [2, 4, 6], // Діагоналі
    ];

    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        set({
          winner: cells[a],
          winningLine: combo,
          isGameActive: false,
        });
        get().updateStatistics(cells[a]);
        return;
      }
    }

    if (cells.every((cell) => cell !== null)) {
      set({ isDraw: true, isGameActive: false });
      get().updateStatistics(null, true);
    }
  },

  resetGame: () => {
    set({
      cells: Array(9).fill(null),
      currentPlayer: "X",
      isGameActive: true,
      winner: null,
      isDraw: false,
      winningLine: null,
      moveHistory: [],
    });
  },

  undoMove: () => {
    const { moveHistory } = get();
    if (moveHistory.length === 0) return;

    const lastMove = moveHistory[moveHistory.length - 1];
    const newCells = [...get().cells];
    newCells[lastMove.index] = null;

    set({
      cells: newCells,
      currentPlayer: lastMove.player,
      moveHistory: moveHistory.slice(0, -1),
      winner: null,
      isDraw: false,
      winningLine: null,
      isGameActive: true,
    });
  },
});
