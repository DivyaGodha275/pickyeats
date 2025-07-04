// src/Dashboard/adminItemsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const adminItemsSlice = createSlice({
  name: "adminItems",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    updateItem: (state, action) => {
      const updated = action.payload;
      const index = state.items.findIndex((item) => item.id === updated.id);
      if (index !== -1) {
        state.items[index] = updated;
      }
    },
  },
});

export const { addItem, updateItem } = adminItemsSlice.actions;
export default adminItemsSlice.reducer;
