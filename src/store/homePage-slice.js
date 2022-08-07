import { createSlice } from "@reduxjs/toolkit";

const homePageSlice = createSlice({
  name: "home",
  initialState: {
    homePageContent: [],
    changed: false,
    newSectionContent: {},
    newSectionButtons: [],
  },
  reducers: {
    replaceHomePage(state, action) {
      state.homePageContent = action.payload.content;
    },
    changeHomeElement(state, action) {
      const elementIndex = state.homePageContent.findIndex(
        (item) => item.id === action.payload.id
      );
      state.homePageContent[elementIndex].title = action.payload.title;
      state.homePageContent[elementIndex].content = action.payload.content;
      state.homePageContent[elementIndex].button_1 = +action.payload.button_1;
      state.homePageContent[elementIndex].button_2 = +action.payload.button_2;
      state.homePageContent[elementIndex].button_3 = +action.payload.button_3;
    },
    addButtonElement(state, action) {
      state.newSectionButtons.push(action.payload);
    },
    removeButtonElement(state, action) {
      // const existingElement = state.newSectionButtons.find(item => {})
    }
  },
});

export const homePageActions = homePageSlice.actions;
export default homePageSlice;
