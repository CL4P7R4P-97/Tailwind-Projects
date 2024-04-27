import { configureStore } from "@reduxjs/toolkit";
import tutorialReducer from "./slice/tutorialsSlice";

export const store = configureStore({
  reducer: {
    tutorials: tutorialReducer,
  },
});
