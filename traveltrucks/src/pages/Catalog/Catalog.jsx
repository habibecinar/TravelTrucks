import "./Catalog.css";

const Catalog = () => {
  return (
    <div className="catalog-page">
      {/* LEFT FILTERS */}
      <aside className="filters">
        <h2>Filters</h2>

        <div className="filter-group">
          <p className="filter-title">Location</p>
          <input type="text" placeholder="Kyiv, Ukraine" className="location-input" />
        </div>

        <div className="filter-group">
          <p className="filter-title">Vehicle equipment</p>

          <label><input type="checkbox" /> AC</label>
          <label><input type="checkbox" /> Automatic</label>
          <label><input type="checkbox" /> Kitchen</label>
          <label><input type="checkbox" /> TV</label>
          <label><input type="checkbox" /> Bathroom</label>
        </div>

        <div className="filter-group">
          <p className="filter-title">Vehicle type</p>

          <label><input type="radio" name="type" /> Van</label>
          <label><input type="radio" name="type" /> Alcove</label>
          <label><input type="radio" name="type" /> Fully Integrated</label>
        </div>
      </aside>

      {/* RIGHT CAMPER LIST */}
      <section className="campers">
        {[
          "Mavericks",
          "Kuga Camper",
          "Road Bear C 23-25",
          "Mighty Class C Medium [MD]"
        ].map((title) => (
          <div className="camper-card" key={title}>
            <img
              className="camper-img"
              src="/hero.jpg"
              alt={title}
            />

            <div className="camper-info">
              <div className="camper-top">
                <h3>{title}</h3>
                <span className="price">€8000.00</span>
              </div>

              <span className="rating">⭐ 4.4 (2 Reviews)</span>
              <p className="location-text">Kyiv, Ukraine</p>

              <p className="desc">
                Embrace simplicity and freedom with the Mavericks panel truck...
              </p>

              <div className="features">
                <span>Automatic</span>
                <span>Petrol</span>
                <span>Kitchen</span>
                <span>AC</span>
              </div>

              <button className="show-btn">Show More</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Catalog;
