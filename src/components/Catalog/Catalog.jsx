// src/components/Catalog/Catalog.jsx
import React, { useState, useEffect } from "react";
import styles from "./Catalog.module.css";
import cardStyles from "../CamperCard/CamperCard.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCampers } from "../../app/campersSlice";

import HeartEmpty from "../../assets/icons/heart.svg";
import HeartFull from "../../assets/icons/redheart.svg";

export default function Catalog({ filters }) {
  const dispatch = useDispatch();

  const { items, loading } = useSelector((state) => state.campers);
  const safeItems = Array.isArray(items) ? items : [];

  useEffect(() => {
    dispatch(fetchCampers(filters));
  }, [filters]);

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id) =>
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  return (
    <div>
      {loading && <p>Loading...</p>}

      <div style={{ display: "flex", gap: "32px", overflowX: "auto", paddingBottom: "16px" }}>
        {safeItems.map((camper) => (
          <div key={camper.id} className={cardStyles.catalogCard}>
            <div className={cardStyles.imageWrapper}>
              <img
                src={camper.gallery?.[0]?.thumb || ""}
                alt={camper.name || "camper"}
                className={cardStyles.catalogThumb}
              />
              <button
                className={cardStyles.heartButton}
                onClick={(e) => {
                  e.preventDefault();
                  toggleFavorite(camper.id);
                }}
              >
                <img
                  src={favorites.includes(camper.id) ? HeartFull : HeartEmpty}
                  alt="favorite"
                  className={cardStyles.heartIcon}
                />
              </button>
            </div>

            <div className={cardStyles.catalogInfo}>
              <div className={cardStyles.catalogTitle}>{camper.name || "Unnamed"}</div>
              <div className={cardStyles.catalogLocation}>{camper.location || "-"}</div>
              <div className={cardStyles.catalogPrice}>${camper.price ?? "-"}</div>
              <div className={cardStyles.catalogRating}>⭐ {camper.rating ?? "-"}</div>
              <div className={cardStyles.catalogDescription}>{camper.description ?? ""}</div>
              <Link to={`/catalog/${camper.id}`} className={styles.showMoreBtn}>
                Show more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
