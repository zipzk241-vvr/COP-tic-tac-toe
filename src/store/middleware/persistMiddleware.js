import { persist } from "zustand/middleware";

export const createPersistMiddleware = (config) => {
  return persist(config, {
    name: "tic-tac-toe-storage",

    partialize: (state) => ({
      settings: state.settings,
      statistics: state.statistics,
    }),
    version: 1,
    migrate: (persistedState, version) => {
      if (version === 0) {
        // Міграція з версії 0 на 1
        return {
          ...persistedState,
          settings: {
            ...persistedState.settings,
            autoSave: true,
          },
        };
      }
      return persistedState;
    },
  });
};
