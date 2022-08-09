import { createSlice } from "@reduxjs/toolkit";

const homePageSlice = createSlice({
  name: "home",
  initialState: {
    homePageContent: [],
    error: null,
  },
  reducers: {
    replaceHomePage(state, action) {
      state.homePageContent = action.payload.content;
    },
    addElement(state, action) {
      state.homePageContent = state.homePageContent.push(action.payload);
    },
    changeHomeElement(state, action) {
      const elementIndex = state.homePageContent.findIndex(
        (item) => item.id === action.payload.id
      );
      state.homePageContent[elementIndex] = action.payload.updatedContent;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const homePageActions = homePageSlice.actions;
export default homePageSlice;
