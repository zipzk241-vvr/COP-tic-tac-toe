export const createSettingsSlice = (set) => ({
  // STATE
  settings: {
    playerXName: "Гравець X",
    playerOName: "Гравець O",
    difficulty: "medium", // easy, medium, hard
    gameMode: "pvp", // pvp, pvc (player vs computer)
    boardSize: 3, // 3x3, 4x4, 5x5
    timeLimit: null, // null або секунди
    soundEnabled: true,
    animationsEnabled: true,
    autoSave: true,
  },

  // ACTIONS
  updateSettings: (newSettings) => {
    set((state) => ({
      settings: {
        ...state.settings,
        ...newSettings,
      },
    }));
  },

  updatePlayerNames: (playerXName, playerOName) => {
    set((state) => ({
      settings: {
        ...state.settings,
        playerXName,
        playerOName,
      },
    }));
  },

  setDifficulty: (difficulty) => {
    set((state) => ({
      settings: {
        ...state.settings,
        difficulty,
      },
    }));
  },

  setGameMode: (gameMode) => {
    set((state) => ({
      settings: {
        ...state.settings,
        gameMode,
      },
    }));
  },

  toggleSound: () => {
    set((state) => ({
      settings: {
        ...state.settings,
        soundEnabled: !state.settings.soundEnabled,
      },
    }));
  },

  toggleAnimations: () => {
    set((state) => ({
      settings: {
        ...state.settings,
        animationsEnabled: !state.settings.animationsEnabled,
      },
    }));
  },

  resetSettings: () => {
    set({
      settings: {
        playerXName: "Гравець X",
        playerOName: "Гравець O",
        difficulty: "medium",
        gameMode: "pvp",
        boardSize: 3,
        timeLimit: null,
        soundEnabled: true,
        animationsEnabled: true,
        autoSave: true,
      },
    });
  },
});
