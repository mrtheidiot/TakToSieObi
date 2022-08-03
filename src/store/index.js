import { configureStore } from "@reduxjs/toolkit";

import homePageSlice from "./homePage-slice";
import testSlice from "./TestStore/test-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    home: homePageSlice.reducer,
    test: testSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
