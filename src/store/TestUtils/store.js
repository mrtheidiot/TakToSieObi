import { combineReducers, configureStore } from "@reduxjs/toolkit";

import homePageSlice from "../homePage-slice";
import coursesSlice from "../coursesList-slice";
import aboutMeSlice from "../aboutme-slice";
import eventsSlice from "../events-slice";
import uiSlice from "../ui-slice";

// custom testing store with preloaded contnet for testing components using redux

const rootReducer = combineReducers({
  ui: uiSlice.reducer,
  home: homePageSlice.reducer,
  courses: coursesSlice.reducer,
  aboutme: aboutMeSlice.reducer,
  events: eventsSlice.reducer,
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};
