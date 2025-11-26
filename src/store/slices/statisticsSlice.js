
export const createStatisticsSlice = (set, get) => ({
  // STATE
  statistics: {
    gamesPlayed: 0,
    wins: { X: 0, O: 0 },
    draws: 0,
    winRate: { X: 0, O: 0 },
    averageMovesPerGame: 0,
    fastestWin: null,
    longestGame: null,
    currentStreak: { player: null, count: 0 },
    bestStreak: { player: null, count: 0 },
    history: [], 
  },

  // ACTIONS
  updateStatistics: (winner, isDraw = false) => {
    const { statistics, moveHistory } = get();
    const movesCount = moveHistory.length;

    set((state) => {
      const newStats = { ...state.statistics };
      newStats.gamesPlayed += 1;

      if (isDraw) {
        newStats.draws += 1;
        newStats.currentStreak = { player: null, count: 0 };
      } else if (winner) {
        newStats.wins[winner] += 1;
        if (newStats.currentStreak.player === winner) {
          newStats.currentStreak.count += 1;
        } else {
          newStats.currentStreak = { player: winner, count: 1 };
        }
        if (newStats.currentStreak.count > newStats.bestStreak.count) {
          newStats.bestStreak = { ...newStats.currentStreak };
        }
        if (!newStats.fastestWin || movesCount < newStats.fastestWin) {
          newStats.fastestWin = movesCount;
        }
      }
      if (!newStats.longestGame || movesCount > newStats.longestGame) {
        newStats.longestGame = movesCount;
      }
      const totalMoves =
        newStats.averageMovesPerGame * (newStats.gamesPlayed - 1) + movesCount;
      newStats.averageMovesPerGame = Math.round(
        totalMoves / newStats.gamesPlayed
      );
      newStats.winRate.X =
        newStats.gamesPlayed > 0
          ? Math.round((newStats.wins.X / newStats.gamesPlayed) * 100)
          : 0;
      newStats.winRate.O =
        newStats.gamesPlayed > 0
          ? Math.round((newStats.wins.O / newStats.gamesPlayed) * 100)
          : 0;
      newStats.history = [
        {
          id: Date.now(),
          winner,
          isDraw,
          moves: movesCount,
          date: new Date().toISOString(),
        },
        ...newStats.history.slice(0, 9),
      ];

      return { statistics: newStats };
    });
  },

  resetStatistics: () => {
    set({
      statistics: {
        gamesPlayed: 0,
        wins: { X: 0, O: 0 },
        draws: 0,
        winRate: { X: 0, O: 0 },
        averageMovesPerGame: 0,
        fastestWin: null,
        longestGame: null,
        currentStreak: { player: null, count: 0 },
        bestStreak: { player: null, count: 0 },
        history: [],
      },
    });
  },

  clearHistory: () => {
    set((state) => ({
      statistics: {
        ...state.statistics,
        history: [],
      },
    }));
  },
});
