import { createSlice } from "@reduxjs/toolkit";
const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isAppLoading: false,
    hideOverlay: false,
    isOverlayLoading: false,
    overlayError: null,
    editMode: false,
  },
  reducers: {
    setIsAppLoading(state, action) {
      state.isAppLoading = action.payload;
    },
    setIsOverlayLoading(state, action) {
      state.isOverlayLoading = action.payload;
    },
    setHideOverlay(state, action) {
      state.hideOverlay = action.payload;
    },
    setEditMode(state, action) {
      state.editMode = action.payload;
    },
    setOverlayError(state, action) {
      state.overlayError = action.payload;
    },
  },
});

export const testMode = (state) => state.ui.testMode;
export const uiActions = uiSlice.actions;
export default uiSlice;
