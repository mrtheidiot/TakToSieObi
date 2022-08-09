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
    isLoading: false,
  },
  reducers: {
    requestStateChange(state, action) {
      state.requestState = {
        status: action.payload.status,
      };
    },
    toggleLoading(state) {
      state.isLoading = !state.isLoading;
    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice;
