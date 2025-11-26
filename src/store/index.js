import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createPersistMiddleware } from "./middleware/persistMiddleware";
import { createGameSlice } from "./slices/gameSlice";
import { createSettingsSlice } from "./slices/settingsSlice";
import { createStatisticsSlice } from "./slices/statisticsSlice";

const useStore = create(
  devtools(
    createPersistMiddleware((set, get) => ({
      ...createGameSlice(set, get),
      ...createSettingsSlice(set, get),
      ...createStatisticsSlice(set, get),
    })),
    { name: "TicTacToe Store" }
  )
);

export default useStore;

export const useCells = () => useStore((state) => state.cells);
export const useCurrentPlayer = () => useStore((state) => state.currentPlayer);
export const useIsGameActive = () => useStore((state) => state.isGameActive);
export const useWinner = () => useStore((state) => state.winner);
export const useIsDraw = () => useStore((state) => state.isDraw);
export const useWinningLine = () => useStore((state) => state.winningLine);
export const useMoveHistory = () => useStore((state) => state.moveHistory);
export const useSettings = () => useStore((state) => state.settings);
export const useStatistics = () => useStore((state) => state.statistics);
export const useMakeMove = () => useStore((state) => state.makeMove);
export const useResetGame = () => useStore((state) => state.resetGame);
export const useUndoMove = () => useStore((state) => state.undoMove);
export const useCheckWinner = () => useStore((state) => state.checkWinner);

export const useUpdateSettings = () =>
  useStore((state) => state.updateSettings);
export const useUpdatePlayerNames = () =>
  useStore((state) => state.updatePlayerNames);
export const useSetDifficulty = () => useStore((state) => state.setDifficulty);
export const useSetGameMode = () => useStore((state) => state.setGameMode);
export const useToggleSound = () => useStore((state) => state.toggleSound);
export const useToggleAnimations = () =>
  useStore((state) => state.toggleAnimations);
export const useResetSettings = () => useStore((state) => state.resetSettings);

export const useUpdateStatistics = () =>
  useStore((state) => state.updateStatistics);
export const useResetStatistics = () =>
  useStore((state) => state.resetStatistics);
export const useClearHistory = () => useStore((state) => state.clearHistory);
