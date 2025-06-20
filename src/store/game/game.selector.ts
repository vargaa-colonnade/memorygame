import type { RootState } from "../store";

export const selectGameWon = (state: RootState) => state.game.gameWon;
