import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface TimeState {
  seconds: number;
}

const initialState: TimeState = {
  seconds: 0,
};

const timeSlice = createSlice({
  name: "elapsedTime",
  initialState,
  reducers: {
    setElapsedTime(state, action: PayloadAction<number>) {
      state.seconds = action.payload;
    },
    resetElapsedTime(state) {
      state.seconds = 0;
    },
  },
});

export const { setElapsedTime, resetElapsedTime } = timeSlice.actions;
export default timeSlice.reducer;
