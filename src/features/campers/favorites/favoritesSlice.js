// src/features/campers/favorites/favoritesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: JSON.parse(localStorage.getItem("favorites") || "[]"),
  },
  reducers: {
    addToFavorites: (state, action) => {
      const id = action.payload;
      if (!state.items.includes(id)) {
        state.items.push(id);
        localStorage.setItem("favorites", JSON.stringify(state.items));
      }
    },
    removeFromFavorites: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(item => item !== id);
      localStorage.setItem("favorites", JSON.stringify(state.items));
    },
    toggleFavorite: (state, action) => {
      const id = action.payload;
      const exists = state.items.includes(id);
      if (exists) {
        state.items = state.items.filter(item => item !== id);
      } else {
        state.items.push(id);
      }
      localStorage.setItem("favorites", JSON.stringify(state.items));
    },
  },
});

export const { addToFavorites, removeFromFavorites, toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
