import { createSlice } from "@reduxjs/toolkit";
const uiSlice = createSlice({
  name: "ui",
  initialState: {
    buttons: [],
    banners: [],
    notification: null,
    requestState: {
      status: null,
    },
  },
  reducers: {
    requestStateChange(state, action) {
      state.requestState = {
        status: action.payload.status,
      };
    },
    resetStatusError(state) {
      state.requestState = {
        status: null,
        error: null,
      };
    },

    replaceButtons(state, action) {
      state.buttons = action.payload.buttons;
    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice;
