import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
  name: "test",
  initialState: { testItems: [], changed: false },
  reducers: {
    replaceStore(state, action) {
      state.testItems = action.payload.items;
    },
    changeTestItem(state, action) {
      state.changed = true;
      const itemIndex = state.testItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.testItems[itemIndex].title = action.payload.title;
      state.testItems[itemIndex].description = action.payload.description;
    },
  },
});

export const testActions = testSlice.actions;
export default testSlice;
