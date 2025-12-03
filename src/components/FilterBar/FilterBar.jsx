import React from "react";
import "./FilterBar.css";

const FilterBar = ({ filters, handleChange, toggleEquipment, setVehicleType, onSearch }) => {
  const equipmentOptions = ["AC", "Automatic", "Kitchen", "TV", "Bathroom"];
  const typeOptions = ["Van", "Fully Integrated", "Alcove"];

  return (
    <aside className="filter-bar">
      {/* Location */}
      <div className="filter-section">
        <label className="filter-label">Location</label>
        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={handleChange}
          placeholder="Kyiv, Ukraine"
          className="filter-input"
        />
      </div>

      <h3 className="filter-title">Filters</h3>

      {/* Equipment */}
      <div className="filter-section">
        <span className="filter-label">Vehicle equipment</span>
        <div className="filter-grid">
          {equipmentOptions.map((item) => (
            <button
              key={item}
              onClick={() => toggleEquipment(item)}
              className={
                filters.equipment.includes(item)
                  ? "filter-item active"
                  : "filter-item"
              }
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Vehicle type */}
      <div className="filter-section">
        <span className="filter-label">Vehicle type</span>
        <div className="filter-grid">
          {typeOptions.map((type) => (
            <button
              key={type}
              onClick={() => setVehicleType(type)}
              className={filters.type === type ? "filter-item active" : "filter-item"}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <button className="search-btn" onClick={onSearch}>Search</button>

    </aside>
  );
};

export default FilterBar;
