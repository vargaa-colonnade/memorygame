import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface GameState {
  pairs: number;
  countdownTime: number;
  elapsedTime: number;
  gameWon: boolean;
  isGameRunning: boolean;
}

const initialState: GameState = {
  pairs: 6,
  countdownTime: 60,
  elapsedTime: 0,
  gameWon: false,
  isGameRunning: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setPairs(state, action: PayloadAction<number>) {
      state.pairs = action.payload;
    },
    setCountdownTime(state, action: PayloadAction<number>) {
      state.countdownTime = action.payload;
    },
    setElapsedTime(state, action: PayloadAction<number>) {
      state.elapsedTime = action.payload;
    },
    resetGame(state) {
      state.elapsedTime = 0;
      state.gameWon = false;
      state.isGameRunning = false;
    },
    setGameWon(state, action: PayloadAction<boolean>) {
      state.gameWon = action.payload;
    },
    setGameRunning(state, action: PayloadAction<boolean>) {
      state.isGameRunning = action.payload;
    },
  },
});

export const {
  setPairs,
  setCountdownTime,
  setElapsedTime,
  resetGame,
  setGameWon,
  setGameRunning,
} = gameSlice.actions;


export const gameReducer = gameSlice.reducer;
