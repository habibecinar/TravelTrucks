import { useEffect, useState } from "react";
import "./Catalog.css";

// ICON IMPORTS
import acIcon from "../../assets/icons/AC.png";
import autoIcon from "../../assets/icons/Automatic.png";
import kitchenIcon from "../../assets/icons/kitchen.png";
import gasIcon from "../../assets/icons/gas.png";
import radioicon from "../../assets/icons/radio.png";
import bathIcon from "../../assets/icons/bathroom.png";
import microwaveIcon from "../../assets/icons/microwave.png";
import petrolIcon from "../../assets/icons/petrol.png";
import refrigIcon from "../../assets/icons/refrig.png";
import waterIcon from "../../assets/icons/water.png";

// ICON MAP
const icons = {
  AC: acIcon,
  Automatic: autoIcon,
  Kitchen: kitchenIcon,
  Radio: radioicon,
  Bathroom: bathIcon,
  Gas: gasIcon,
  Microwave: microwaveIcon,
  Petrol: petrolIcon,
  Refrigerator: refrigIcon,
  Water: waterIcon,
};

const Catalog = () => {
  const [campers, setCampers] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1️⃣ API'DEN VERİ ÇEKME
  useEffect(() => {
    fetch("https://66f3d67077b5.ngrok.app/api/campers")
      .then((res) => res.json())
      .then((data) => {
        setCampers(data);
        setLoading(false);
      })
      .catch((err) => console.error("API ERROR:", err));
  }, []);

  if (loading) return <p className="loading">Loading campers...</p>;

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

      {/* RIGHT - CAMPER LIST */}
      <section className="campers">
        {campers.map((camper) => (
          <div className="camper-card" key={camper.id}>
            
            {/* CAMPER IMAGE */}
            <img
              className="camper-img"
              src={camper.gallery?.[0]?.thumb || "/fallback.jpg"}
              alt={camper.name}
            />

            <div className="camper-info">
              
              <div className="camper-top">
                <h3>{camper.name}</h3>
                <span className="price">€{camper.price}</span>
              </div>

              <span className="rating">
                ⭐ {camper.rating} ({camper.reviews} Reviews)
              </span>

              <p className="location-text">
                {camper.location.city}, {camper.location.country}
              </p>

              <p className="desc">{camper.description}</p>

              {/* FEATURES (Equipment) */}
              <div className="features">
                {Object.keys(camper.equipment || {}).map((feat) =>
                  icons[feat] ? (
                    <img
                      key={feat}
                      src={icons[feat]}
                      alt={feat}
                      title={feat}
                      className="feature-icon"
                    />
                  ) : null
                )}
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
