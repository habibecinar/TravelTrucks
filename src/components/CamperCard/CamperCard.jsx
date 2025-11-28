import React from "react";
import "./CamperCard.css";
const CamperCard = ({ camper }) => {
  return (
    <div className="camper-card">
     <img 
  src={camper.gallery[0]?.original || camper.gallery[0]?.thumb} 
  alt={camper.name} 
/>


      <h3>{camper.name}</h3>
      <p>€{parseFloat(camper.price).toFixed(2)}</p>

      <button
        onClick={() =>
          window.open(`/catalog/${camper.id}`, "_blank")
        }
      >
        Show more
      </button>
    </div>
  );
};

export default CamperCard;
