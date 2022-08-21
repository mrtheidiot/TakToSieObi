import { createSlice } from "@reduxjs/toolkit";

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    coursesContent: [],
    error: null,
  },
  reducers: {
    replaceCoursesContent(state, action) {
      state.coursesContent = action.payload;
    },
    changeCourseSection(state, action) {
      const elementIndex = state.coursesContent.findIndex(
        (item) => item.id === action.payload.id
      );
      state.coursesContent[elementIndex] = action.payload.updatedSection;
    },
    addCourseSection(state, action) {
      state.coursesContent.push(action.payload);
    },
    removeCourseSection(state, action) {
      state.coursesContent = state.coursesContent.filter(section => section.id !== action.payload.id)
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const coursesActions = coursesSlice.actions;
export default coursesSlice;
