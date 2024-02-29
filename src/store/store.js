import { configureStore } from "@reduxjs/toolkit";
import counterReducers from "./slices/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducers,
  },
  devTools: true,
});
