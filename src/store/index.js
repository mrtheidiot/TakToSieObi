import { configureStore } from "@reduxjs/toolkit";

import homePageSlice from "./homePage-slice";

import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    home: homePageSlice.reducer,
  },
});

export default store;
