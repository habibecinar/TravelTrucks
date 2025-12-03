// src/components/Catalog/Catalog.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCampers, loadMoreCampers } from "../../app/campersSlice";
import { toggleFavorite } from "../../features/campers/favorites/favoritesSlice";
import styles from "./Catalog.module.css";

export default function Catalog({ filters }) {
  const dispatch = useDispatch();

  const { items, loading, currentPage, hasMore, itemsPerPage } = useSelector((state) => state.campers);
  const favorites = useSelector((state) => state.favorites.items);
  const safeItems = Array.isArray(items) ? items : [];

  // Initial load
  useEffect(() => {
    if (safeItems.length === 0) {
      dispatch(fetchCampers({ filters, page: 1, limit: itemsPerPage, loadMore: false }));
    }
  }, [dispatch, itemsPerPage, filters, safeItems.length]);

  const handleLoadMore = () => {
    dispatch(loadMoreCampers({ 
      page: currentPage + 1, 
      limit: itemsPerPage
    }));
  };

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id));
  };

  if (loading && safeItems.length === 0) {
    return <div className={styles.loading}>Loading campers...</div>;
  }

  return (
    <div className={styles.catalogContainer}>
      <div className={styles.campersGrid}>
        {safeItems.map((camper) => (
          <div key={camper.id} className={styles.camperCard}>
            <div className={styles.imageContainer}>
              <img
                src={camper.gallery?.[0]?.thumb || camper.gallery?.[0]?.original || "/karavan1.png"}
                alt={camper.name || "camper"}
                className={styles.camperImage}
              />
              <button
                className={`${styles.favoriteButton} ${
                  favorites.includes(camper.id) ? styles.favoriteActive : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleToggleFavorite(camper.id);
                }}
              >
                {favorites.includes(camper.id) ? "❤️" : "🤍"}
              </button>
            </div>

            <div className={styles.cardContent}>
              <div className={styles.headerRow}>
                <h3 className={styles.camperName}>{camper.name || "Unnamed Camper"}</h3>
                <div className={styles.price}>€{parseFloat(camper.price || 0).toFixed(2)}</div>
              </div>

              <div className={styles.locationRow}>
                <span className={styles.location}>📍 {camper.location || "Location not specified"}</span>
                <div className={styles.rating}>
                  ⭐ {camper.rating || "0"} ({camper.reviews?.length || 0} Reviews)
                </div>
              </div>

              <p className={styles.description}>
                {camper.description || "No description available"}
              </p>

              <div className={styles.features}>
                {camper.AC && <span className={styles.feature}>❄️ AC</span>}
                {camper.transmission === "automatic" && <span className={styles.feature}>⚙️ Automatic</span>}
                {camper.kitchen && <span className={styles.feature}>🍽️ Kitchen</span>}
                {camper.TV && <span className={styles.feature}>📻 TV</span>}
                {camper.bathroom && <span className={styles.feature}>🚿 Bathroom</span>}
              </div>

              <Link 
                to={`/catalog/${camper.id}`} 
                className={styles.showMoreButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Show more
              </Link>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <button 
          className={styles.loadMoreButton}
          onClick={handleLoadMore}
          disabled={loading}
        >
          {loading ? "Loading..." : "Load more"}
        </button>
      )}

      {safeItems.length === 0 && !loading && (
        <div className={styles.noResults}>
          No campers found matching your criteria. Try adjusting your filters.
        </div>
      )}
    </div>
  );
}
