import { createSlice } from "@reduxjs/toolkit";
const uiSlice = createSlice({
  name: "ui",
  initialState: { buttons: [], banners: [], notification: null },
  reducers: {
    replaceButtons(state, action) {
      state.buttons = action.payload.buttons;
    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice;
