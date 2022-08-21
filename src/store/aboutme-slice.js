import { createSlice } from "@reduxjs/toolkit";

const aboutMeSlice = createSlice({
  name: "aboutme",
  initialState: {
    aboutMeContent: [],
    error: null,
  },
  reducers: {
    replaceAboutMe(state, action) {
      state.aboutMeContent = action.payload;
    },
    changeABoutMeSection(state, action) {
      const elementIndex = state.homePageContent.findIndex(
        (item) => item.id === action.payload.id
      );
      state.aboutMeContent[elementIndex] = action.payload.updatedSection;
    },
    addAboutMeSection(state,action) {
      state.aboutMeContent.push(action.payload)
    },
    removeAboutMeSection(state, action) {
      state.aboutMeContent = state.aboutMeContent.filter(section => section.id !== action.payload.id)
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const aboutMeActions = aboutMeSlice.actions;
export default aboutMeSlice;