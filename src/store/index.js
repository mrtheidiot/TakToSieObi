import { configureStore } from "@reduxjs/toolkit";

import homePageSlice from "./homePage-slice";
import coursesSlice from "./coursesList-slice";
import aboutMeSlice from "./aboutme-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    home: homePageSlice.reducer,
    courses: coursesSlice.reducer,
    aboutme: aboutMeSlice.reducer,
  },
});

export default store;
