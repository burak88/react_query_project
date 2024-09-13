import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialStateProps } from "./types";

const initialState: InitialStateProps = {
  character: [],
};

const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setCharacter: (
      state,
      action: PayloadAction<InitialStateProps["character"]>
    ) => {
      state.character = action.payload;
    },
  },
});
export const { setCharacter } = characterSlice.actions;

export default characterSlice.reducer;
