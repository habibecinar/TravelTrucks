const FilterBar = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({ 
      ...filters, 
      [e.target.name]: e.target.value 
    });
  };

  return (
    <div className="filter-bar">
      <h3>Filters</h3>

      <div className="filter-group">
        <label>Location</label>
        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={handleChange}
          placeholder="Kyiv, Ukraine"
        />
      </div>

      <div className="filter-group">
        <label>Vehicle Type</label>
        <select
          name="type"
          value={filters.type}
          onChange={handleChange}
        >
          <option value="">All</option>
          <option value="van">Van</option>
          <option value="alcove">Alcove</option>
          <option value="fully-integrated">Fully Integrated</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Transmission</label>
        <select
          name="transmission"
          value={filters.transmission}
          onChange={handleChange}
        >
          <option value="">All</option>
          <option value="automatic">Automatic</option>
          <option value="manual">Manual</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
