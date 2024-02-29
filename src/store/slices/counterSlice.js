import { createSlice } from "@reduxjs/toolkit";
import { counterReducers } from "../reducers/counterReducers";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: counterReducers,
});

export const { increment, decrement, incrementByNum, resetAll } =
  counterSlice.actions;

export default counterSlice.reducer;
