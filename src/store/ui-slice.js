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
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice;
