import { createSlice } from "@reduxjs/toolkit";
const uiSlice = createSlice({
  name: "ui",
  initialState: {
    buttons: [],
    banners: [],
    notification: null,
    requestState: {
      status: null,
      error: null,
    },
  },
  reducers: {
    requestStateChange(state, action) {
      state.requestState = {
        status: action.payload.status,
        error: action.payload.error,
      };
    },

    replaceButtons(state, action) {
      state.buttons = action.payload.buttons;
    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice;
