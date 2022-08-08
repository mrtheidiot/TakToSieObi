import { createSlice } from "@reduxjs/toolkit";

const homePageSlice = createSlice({
  name: "home",
  initialState: {
    homePageContent: [],
    changed: false,
    error: null,
    newSectionContent: {},
    newSectionButtons: [],
    editSectionButtons: [],
  },
  reducers: {
    replaceHomePage(state, action) {
      state.homePageContent = action.payload.content;
    },
    changeHomeElement(state, action) {
      const elementIndex = state.homePageContent.findIndex(
        (item) => item.id === action.payload.id
      );
      state.homePageContent[elementIndex] = action.payload.updatedContent;
    },
    addButtonElement(state, action) {
      state.newSectionButtons.push(action.payload);
    },
    editButtonElement(state, action) {
      state.editSectionButtons.push(action.payload);
    },
    removeAddButtonElement(state, action) {
      // const existingElement = state.newSectionButtons.find(item => {})
    },
    removeEditButtonElement(state, action) {
      state.editSectionButtons = state.editSectionButtons.filter(
        (item) => item.address !== action.payload
      );
    },
    resetEditButtonElements(state) {
      state.editSectionButtons = [];
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const homePageActions = homePageSlice.actions;
export default homePageSlice;
