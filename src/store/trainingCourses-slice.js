import { createSlice } from "@reduxjs/toolkit";

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    coursesContent: [],
    error: null,
  },
  reducers: {
    replaceCourses(state, action) {
      state.coursesContent = action.payload;
    },
    addCourse(state, action) {
      console.log("inside addCourse");
      console.log(action.payload);
      state.coursesContent = state.coursesContent.push(action.payload);
    },
  },
});

export const coursesActions = coursesSlice.actions;
export default coursesSlice;
