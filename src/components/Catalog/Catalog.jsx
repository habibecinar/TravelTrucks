// src/components/Catalog/Catalog.jsx

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCampers } from "../../app/campersSlice";
import styles from "./Catalog.module.css";
import { Link } from "react-router-dom";

export default function Catalog({ filters }) {
  const dispatch = useDispatch();
  const { items, loading,grid } = useSelector((state) => state.campers);

  React.useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  // -----------------------------
  // FİLTRELEME İŞLEMLERİ
  // -----------------------------
  const filteredCampers = items.filter((item) => {
    // Location filter
    if (
      filters.location &&
      !item.location.toLowerCase().includes(filters.location.toLowerCase())
    ) {
      return false;
    }

    // Type filter
    if (filters.type && item.form.toLowerCase() !== filters.type.toLowerCase()) {
      return false;
    }

    // Equipment filter
    if (filters.equipment.length > 0) {
      for (let eq of filters.equipment) {
        switch (eq) {
          case "AC":
            if (!item.AC) return false;
            break;

          case "Kitchen":
            if (!item.kitchen) return false;
            break;

          case "TV":
            if (!item.TV) return false;
            break;

          case "Bathroom":
            if (!item.bathroom) return false;
            break;

          case "Automatic":
            if (item.transmission !== "automatic") return false;
            break;

          default:
            break;
        }
      }
    }

    return true;
  });

  return (
    <div>
      {loading && <p>Loading...</p>}

      {/* -----------------------------
          GRID İLE KARTLAR
      ----------------------------- */}
    <div className={styles.catalog-grid}>
  {filteredCampers.map((item) => (
    <Link
      key={item.id}
      to={`/catalog/${item.id}`}
      className={styles["catalog-card"]}
    >
      <img
        src={item.gallery[0].thumb}
        alt={item.name}
        className={styles["catalog-thumb"]}
      />

      <div className={styles["catalog-info"]}>
        <h3 className={styles["catalog-title"]}>{item.name}</h3>
        <p className={styles["catalog-location"]}>{item.location}</p>
        <p className={styles["catalog-price"]}>${item.price}</p>
        <p className={styles["catalog-rating"]}>⭐ {item.rating}</p>
        <p className={styles["catalog-description"]}>{item.description}</p>
      </div>
    </Link>
  ))}
</div>


      <Link to="/catalog" className={styles.loadMore}>
        Load more
      </Link>
    </div>
  );
}
const [favorites, setFavorites] = useState([]);

const toggleFavorite = (id) => {
  setFavorites((prev) =>
    prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
  );
};
<button
  className={`heart-btn ${favorites.includes(camper.id) ? "active" : ""}`}
  onClick={() => toggleFavorite(camper.id)}
>
  ♥
</button>
