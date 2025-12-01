// src/pages/CatalogPage.jsx

import React from "react";
import FilterBar from "../components/FilterBar/FilterBar";
import Catalog from "../components/Catalog/Catalog";
import "../styles/CatalogPage.css";

const CatalogPage = () => {
  const [filters, setFilters] = React.useState({
    location: "",
    equipment: [],
    type: "",
  });

  // Location input değişimi
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Equipment toggle
  const toggleEquipment = (item) => {
    setFilters((prev) => {
      const exists = prev.equipment.includes(item);
      return {
        ...prev,
        equipment: exists
          ? prev.equipment.filter((eq) => eq !== item)
          : [...prev.equipment, item],
      };
    });
  };

  // Vehicle type seçimi
  const setVehicleType = (type) => {
    setFilters((prev) => ({ ...prev, type }));
  };

  return (
    <div className="catalog-layout">
      <FilterBar
        filters={filters}
        handleChange={handleChange}
        toggleEquipment={toggleEquipment}
        setVehicleType={setVehicleType}
      />

      <Catalog filters={filters} />
    </div>
  );
};

export default CatalogPage;
