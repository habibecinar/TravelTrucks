import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api/campersApi";

// Helper function to filter campers on frontend
const filterCampers = (campers, filters) => {
  if (!Array.isArray(campers)) return [];
  
  return campers.filter(camper => {
    // Location filter
    if (filters.location && filters.location.trim()) {
      const locationMatch = camper.location?.toLowerCase().includes(filters.location.toLowerCase());
      if (!locationMatch) return false;
    }

    // Vehicle type filter
    if (filters.type) {
      const typeMap = {
        "Van": "panelTruck",
        "Fully Integrated": "fullyIntegrated", 
        "Alcove": "alcove"
      };
      const expectedForm = typeMap[filters.type] || filters.type;
      if (camper.form !== expectedForm) return false;
    }

    // Equipment filter
    if (Array.isArray(filters.equipment) && filters.equipment.length > 0) {
      const equipmentCheck = {
        AC: () => camper.AC === true,
        Automatic: () => camper.transmission === "automatic",
        Kitchen: () => camper.kitchen === true,
        TV: () => camper.TV === true,
        Bathroom: () => camper.bathroom === true,
      };

      // Check if ALL selected equipment is available
      const hasAllEquipment = filters.equipment.every(equipment => {
        const checkFn = equipmentCheck[equipment];
        return checkFn ? checkFn() : false;
      });

      if (!hasAllEquipment) return false;
    }

    return true;
  });
};

// CAMPER LISTESI
export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async ({ filters, page = 1, limit = 4, loadMore = false }, thunkAPI) => {
    try {
      // Get all campers from API (no backend filtering)
      const res = await api.get(`/campers`);
      
      // Extract data from API response
      const allCampers = res.data.items || res.data || [];
      
      // Apply frontend filtering
      const filteredCampers = filterCampers(allCampers, filters || {});
      
      // Apply pagination
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedData = filteredCampers.slice(startIndex, endIndex);
      
      return { 
        data: paginatedData,
        page, 
        loadMore,
        hasMore: endIndex < filteredCampers.length,
        total: filteredCampers.length,
        allFiltered: filteredCampers // Store all filtered results for load more
      };
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// LOAD MORE CAMPERS (from already filtered results)
export const loadMoreCampers = createAsyncThunk(
  "campers/loadMoreCampers",
  async ({ page, limit = 4 }, thunkAPI) => {
    const state = thunkAPI.getState();
    const { allFilteredItems } = state.campers;
    
    // Get next batch from already filtered results
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const nextBatch = allFilteredItems.slice(startIndex, endIndex);
    
    return {
      data: nextBatch,
      page,
      hasMore: endIndex < allFilteredItems.length,
    };
  }
);

// CAMPER DETAY
export const fetchCamperById = createAsyncThunk(
  "campers/fetchCamperById",
  async (id, thunkAPI) => {
    try {
      const res = await api.get(`/campers/${id}`);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    allFilteredItems: [], // Store all filtered items for load more functionality
    selectedCamper: null,
    loading: false,
    error: null,
    currentPage: 1,
    itemsPerPage: 4,
    hasMore: true,
    total: 0,
  },
  reducers: {
    resetCampers: (state) => {
      state.items = [];
      state.allFilteredItems = [];
      state.currentPage = 1;
      state.hasMore = true;
      state.total = 0;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // LIST
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        const { data, page, loadMore, hasMore, total, allFiltered } = action.payload;
        
        if (loadMore) {
          // Load More durumunda mevcut listeye ekle
          const newItems = Array.isArray(data) ? data : [];
          state.items = [...state.items, ...newItems];
        } else {
          // Yeni arama durumunda listeyi değiştir
          state.items = Array.isArray(data) ? data : [];
          state.allFilteredItems = allFiltered || [];
        }
        
        state.currentPage = page;
        state.hasMore = hasMore;
        state.total = total || 0;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Loading failed";
      })
      .addCase(loadMoreCampers.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadMoreCampers.fulfilled, (state, action) => {
        state.loading = false;
        const { data, page, hasMore } = action.payload;
        
        // Append new items
        const newItems = Array.isArray(data) ? data : [];
        state.items = [...state.items, ...newItems];
        state.currentPage = page;
        state.hasMore = hasMore;
      })
      .addCase(loadMoreCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Load more failed";
      })

      // DETAIL
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.selectedCamper = action.payload;
      });
  },
});

export const { resetCampers, setPage } = campersSlice.actions;
export default campersSlice.reducer;
