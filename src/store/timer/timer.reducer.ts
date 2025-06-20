import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface TimerState {
  timeLeft: number;
  isRunning: boolean;
}

const initialState: TimerState = {
  timeLeft: 0,
  isRunning: false,
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    startTimer(state, action: PayloadAction<number>) {
      state.timeLeft = action.payload;
      state.isRunning = true;
    },
    tick(state) {
      if (state.timeLeft > 0) {
        state.timeLeft -= 1;
      } else {
        state.isRunning = false;
      }
    },
    stopTimer(state) {
      state.isRunning = false;
    },
    resetTimer(state) {
      state.timeLeft = 0;
      state.isRunning = false;
    },
  },
});

export const { startTimer, tick, stopTimer, resetTimer } = timerSlice.actions;
export default timerSlice.reducer;
