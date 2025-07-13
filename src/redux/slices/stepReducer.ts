import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface stepCount {
  currentStep: number;
}
const initialState: stepCount = {
  currentStep: 0,
};

const stepSlice = createSlice({
  name: "stepSlice",
  initialState: initialState,
  reducers: {
    setStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
  },
});

export const { setStep } = stepSlice.actions;
export default stepSlice.reducer;
