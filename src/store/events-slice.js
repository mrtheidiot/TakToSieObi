import { createSlice } from "@reduxjs/toolkit";

const eventsSlice = createSlice({
  name: "events",
  initialState: {
    eventsContent: [],
    error: null,
  },
  reducers: {
    replaceEvents(state, action) {
      state.eventsContent = action.payload;
    },
    changeEventsSection(state, action) {
      const elementIndex = state.eventsContent.findIndex(
        (item) => item.id === action.payload.id
      );
      state.eventsContent[elementIndex] = action.payload.updatedSection;
    },
    addEventsSection(state,action) {
      state.eventsContent.push(action.payload)
    },
    removeEventsSection(state, action) {
      state.eventsContent = state.eventsContent.filter(section => section.id !== action.payload.id)
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const eventsActions = eventsSlice.actions;
export default eventsSlice;