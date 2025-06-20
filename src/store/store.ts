import { configureStore } from "@reduxjs/toolkit";
import { gameReducer } from "./game/game.reducer";
import settingsReducer from "./settings/settings.reducer";
import userReducer from "./user/user.reducer";
import scoreReducer from "./score/score.reducer";
import elapsedTimeReducer from "./elapsedTime/elapsedTime.reducer";
import timerReducer from "./timer/timer.reducer";

export const store = configureStore({
  reducer: {
    game: gameReducer,
    settings: settingsReducer,
    user: userReducer,
    score: scoreReducer,
    elapsedTime: elapsedTimeReducer,
    timer: timerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
