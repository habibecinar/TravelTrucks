import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./campersSlice";
import favoritesReducer from "../features/campers/favorites/favoritesSlice";
import filtersReducer from "../features/campers/filters/filtersSlice";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    favorites: favoritesReducer,
    filters: filtersReducer,
  },
});
