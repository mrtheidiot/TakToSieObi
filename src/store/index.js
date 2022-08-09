import { configureStore } from "@reduxjs/toolkit";

import homePageSlice from "./homePage-slice";
import coursesSlice from "./trainingCourses-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    home: homePageSlice.reducer,
    courses: coursesSlice.reducer,
  },
});

export default store;
