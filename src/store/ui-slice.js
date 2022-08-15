import { createSlice } from "@reduxjs/toolkit";
const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isAppLoading: false,
    isOverlayVisible: false,
    isOverlayLoading: false,
    overlayLoadingStatus: null,
  },
  reducers: {
    toggleLoadingInApp(state) {
      state.isAppLoading = !state.isAppLoading;
    },
    toggleIsOverlayLoading(state) {
      state.isOverlayLoading = !state.isOverlayLoading;
    },
    setOverlayLoadingStatus(state, action) {
      state.overlayLoadingStatus = action.payload;
    },
    toogleIsOverlayVisible(state) {
      state.isOverlayVisible = !state.isOverlayVisible;
    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice;
