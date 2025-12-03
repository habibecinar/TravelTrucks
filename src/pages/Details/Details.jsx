import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCamperById } from "../../app/campersSlice";
import { toggleFavorite } from "../../features/campers/favorites/favoritesSlice";
import Gallery from "../../components/Gallery/Gallery";
import Features from "../../components/CamperTabs/Features";
import Reviews from "../../components/CamperTabs/Reviews";
import BookingForm from "../../components/BookingForm/BookingForm";
import "./Details.css";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedCamper, loading } = useSelector((s) => s.campers);
  const favorites = useSelector((state) => state.favorites.items);

  const [activeTab, setActiveTab] = useState("features");

  useEffect(() => {
    if (id) {
      dispatch(fetchCamperById(id));
    }
  }, [id, dispatch]);

  const handleToggleFavorite = () => {
    if (selectedCamper) {
      dispatch(toggleFavorite(selectedCamper.id));
    }
  };

  if (loading || !selectedCamper) return <div className="loading">Loading camper details...</div>;

  const isFavorite = favorites.includes(selectedCamper.id);

  return (
    <div className="details-page">
      <div className="details-header">
        <h1 className="camper-title">{selectedCamper.name}</h1>
        
        <div className="details-info">
          <div className="rating-location">
            <span className="rating">⭐ {selectedCamper.rating || 0} ({selectedCamper.reviews?.length || 0} Reviews)</span>
            <span className="location">📍 {selectedCamper.location}</span>
          </div>
          <div className="price-favorite">
            <span className="price">€{parseFloat(selectedCamper.price || 0).toFixed(2)}</span>
            <button 
              className={`favorite-btn ${isFavorite ? 'favorite' : ''}`}
              onClick={handleToggleFavorite}
            >
              {isFavorite ? '❤️' : '🤍'}
            </button>
          </div>
        </div>
      </div>

      <Gallery images={selectedCamper.gallery} />
      
      <p className="camper-description">{selectedCamper.description}</p>

      <div className="tabs-container">
        <div className="tabs">
          <button 
            className={activeTab === "features" ? "tab-button active" : "tab-button"}
            onClick={() => setActiveTab("features")}
          >
            Features
          </button>
          <button 
            className={activeTab === "reviews" ? "tab-button active" : "tab-button"}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </div>

        <div className="tab-content-and-booking">
          <div className="tab-content">
            {activeTab === "features" && <Features camper={selectedCamper} />}
            {activeTab === "reviews" && <Reviews reviews={selectedCamper.reviews} />}
          </div>

          <div className="booking-section">
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
