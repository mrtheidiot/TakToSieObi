import { createSlice } from "@reduxjs/toolkit";

const coursesSlice = createSlice({
  name: "home",
  initialState: {
    coursesContent: [],
  },
  reducers: {
    replaceCourses(state, action) {
      state.coursesContent = action.payload;
    },
  },
});

export const coursesActions = coursesSlice.actions;
export default coursesSlice;
