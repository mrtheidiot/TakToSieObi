import { combineReducers, configureStore } from "@reduxjs/toolkit";

import homePageSlice from "../homePage-slice";
import coursesSlice from "../coursesList-slice";
import aboutMeSlice from "../aboutme-slice";
import uiSlice from "../ui-slice";

const rootReducer = combineReducers({
  ui: uiSlice.reducer,
  home: homePageSlice.reducer,
  courses: coursesSlice.reducer,
  aboutme: aboutMeSlice.reducer,
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}