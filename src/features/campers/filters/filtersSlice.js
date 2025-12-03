// src/features/campers/filters/filtersSlice.js
import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    equipment: [],
    type: "",
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    toggleEquipment: (state, action) => {
      const equipment = action.payload;
      const exists = state.equipment.includes(equipment);
      if (exists) {
        state.equipment = state.equipment.filter(eq => eq !== equipment);
      } else {
        state.equipment.push(equipment);
      }
    },
    setVehicleType: (state, action) => {
      state.type = action.payload;
    },
    resetFilters: (state) => {
      state.location = "";
      state.equipment = [];
      state.type = "";
    },
    setFilters: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { 
  setLocation, 
  toggleEquipment, 
  setVehicleType, 
  resetFilters, 
  setFilters 
} = filtersSlice.actions;

export default filtersSlice.reducer;
