import { createSlice } from "@reduxjs/toolkit";
import { tutorialData } from "../../data/tutorialData";
const initialState = {
  data: tutorialData,
  tab: "",
  parent: "INTRODUCTION",
  tutorial: "",
  panel: false,
};

export const tutorialsSlice = createSlice({
  name: "tutorials",
  initialState,
  reducers: {
    changeTab: (state, action) => {
      return { ...state, tab: action.payload };
    },
    changeParent: (state, action) => {
      return { ...state, parent: action.payload };
    },
    changeTutorial: (state, action) => {
      return { ...state, tutorial: action.payload };
    },
    togglePanel: (state, action) => {
      return { ...state, panel: !state.panel };
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeTab, changeParent, togglePanel, changeTutorial } =
  tutorialsSlice.actions;
export const getCurrentTab = (state) => state.tutorials.tab;
export const getCurrentParent = (state) => state.tutorials.parent;
export const getCurrentTutorial = (state) => state.tutorials.tutorial;
export const getPanelState = (state) => state.tutorials.panel;

export default tutorialsSlice.reducer;
