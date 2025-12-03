// src/pages/CatalogPage.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterBar from "../components/FilterBar/FilterBar";
import Catalog from "../components/Catalog/Catalog";
import { setLocation, toggleEquipment, setVehicleType } from "../features/campers/filters/filtersSlice";
import { fetchCampers, resetCampers } from "../app/campersSlice";
import "../styles/CatalogPage.css";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  // Location input değişimi
  const handleChange = (e) => {
    dispatch(setLocation(e.target.value));
  };

  // Equipment toggle
  const handleToggleEquipment = (item) => {
    dispatch(toggleEquipment(item));
  };

  // Vehicle Type set
  const handleSetVehicleType = (type) => {
    dispatch(setVehicleType(type));
  };

  // Search button handler: triggers re-fetch by clearing current results
  const handleSearch = () => {
    dispatch(resetCampers()); // Clear current results
    dispatch(fetchCampers({ filters, page: 1, limit: 4, loadMore: false }));
  };

  return (
    <div className="catalog-layout">
      <FilterBar
        filters={filters}
        handleChange={handleChange}
        toggleEquipment={handleToggleEquipment}
        setVehicleType={handleSetVehicleType}
        onSearch={handleSearch}
      />

      <Catalog filters={filters} />
    </div>
  );
}
