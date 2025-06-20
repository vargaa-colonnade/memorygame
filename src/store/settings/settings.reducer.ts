import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface SettingsState {
  pairsCount: number;
  countdownSeconds: number; 
  restrictBadGuesses: boolean; 
  maxBadGuesses?: number;
}

const initialState: SettingsState = {
  pairsCount: 6,
  countdownSeconds: 60,
  restrictBadGuesses: false,
  maxBadGuesses: undefined,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setPairsCount(state, action: PayloadAction<number>) {
      state.pairsCount = action.payload;
    },
    setCountdownSeconds(state, action: PayloadAction<number>) {
      state.countdownSeconds = action.payload;
    },
    setRestrictBadGuesses(state, action: PayloadAction<boolean>) {
      state.restrictBadGuesses = action.payload;
    },
    setMaxBadGuesses(state, action: PayloadAction<number | undefined>) {
      state.maxBadGuesses = action.payload;
    },
  },
});

export const {
  setPairsCount,
  setCountdownSeconds,
  setRestrictBadGuesses,
  setMaxBadGuesses,
} = settingsSlice.actions;

export default settingsSlice.reducer;
