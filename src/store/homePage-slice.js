import { createSlice } from "@reduxjs/toolkit";

const homePageSlice = createSlice({
  name: "home",
  initialState: {
    homePageContent: [],
    error: null,
  },
  reducers: {
    replaceHomePage(state, action) {
      state.homePageContent = action.payload;
    },
    changeHomeElement(state, action) {
      const elementIndex = state.homePageContent.findIndex(
        (item) => item.id === action.payload.id
      );
      state.homePageContent[elementIndex] = action.payload.updatedSection;
    },
    addHomeSection(state,action) {
      state.homePageContent.push(action.payload)
    },
    removeHomeSection(state, action) {
      state.homePageContent = state.homePageContent.filter(section => section.id !== action.payload.id)
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const homePageActions = homePageSlice.actions;
export default homePageSlice;
