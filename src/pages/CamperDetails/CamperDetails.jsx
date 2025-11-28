import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CamperDetails = () => {
  const { id } = useParams();
  const camper = useSelector((state) =>
    state.campers.items.find((c) => c.id === id)
  );

  if (!camper) return <p>Loading camper details...</p>;

  return (
    <div>
      <h2>{camper.name}</h2>
      <p>{camper.model}</p>
      <p>{camper.description}</p>
      <p>Price: €{parseFloat(camper.price).toFixed(2)}</p>
      {/* Örnek yorumlar */}
      <h3>User Reviews</h3>
      <p>⭐⭐⭐⭐⭐ John Doe: Great camper!</p>
      <p>⭐⭐⭐⭐ Mary: Very comfortable.</p>
      {/* Rezervasyon formu */}
      <h3>Reservation Form</h3>
      <form onSubmit={(e) => { e.preventDefault(); alert("Reservation Success!"); }}>
        <input type="text" placeholder="Name" required />
        <input type="date" required />
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
};

export default CamperDetails;
