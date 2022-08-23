import { createSlice } from "@reduxjs/toolkit";
const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isAppLoading: false,
    hideOverlay: false,
    isOverlayLoading: false,
    editMode: false,
    overlayError: null,
  },
  reducers: {
    setIsAppLoading(state, action) {
      state.isAppLoading = action.payload;
      console.log(state.isAppLoading)
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
export const uiActions = uiSlice.actions;
export default uiSlice;
