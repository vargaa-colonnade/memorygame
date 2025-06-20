import { createSlice } from "@reduxjs/toolkit";

interface ScoreState {
  value: number;
}

const initialState: ScoreState = {
  value: 0,
};

const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    incrementScore(state) {
      state.value += 1;
    },
    resetScore(state) {
      state.value = 0;
    },
  },
});

export const { incrementScore, resetScore } = scoreSlice.actions;
export default scoreSlice.reducer;
