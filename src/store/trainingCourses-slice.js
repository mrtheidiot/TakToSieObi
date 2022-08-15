import { createSlice } from "@reduxjs/toolkit";

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    coursesContent: [],
    error: null,
    isUpToDate: false,
  },
  reducers: {
    replaceCourses(state, action) {
      state.coursesContent = action.payload;
    },
    changeCourse(state, action) {
      const elementIndex = state.coursesContent.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(state.coursesContent)
      state.coursesContent[elementIndex] = action.payload.updatedCourse;
    },
    addCourse(state, action) {
      state.coursesContent = state.coursesContent.push(action.payload);
    },
    toggleIsUpToDate(state) {
      state.isUpToDate = !state.isUpToDate;
    },
  },
});

export const coursesActions = coursesSlice.actions;
export default coursesSlice;