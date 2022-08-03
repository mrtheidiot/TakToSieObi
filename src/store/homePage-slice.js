import { createSlice } from "@reduxjs/toolkit";

const homePageSlice = createSlice({
  name: "home",
  initialState: { homePageContent: [], changed: false, url: ''},
  reducers: {
    replaceHomePage(state, action) {
      state.homePageContent = action.payload.content;
      state.url = action.payload.url
    },
    changeHomeElement(state, action) {
      const elementIndex = state.homePageContent.findIndex(
        (item) => item.id === action.payload.id
      );
      state.homePageContent[elementIndex] = action.payload.element;
    },
  },
});

export const homePageActions = homePageSlice.actions;
export default homePageSlice;
