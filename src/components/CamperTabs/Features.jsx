import React from "react";
import "./Features.css";

const Features = ({ camper }) => {
  if (!camper) return null;

  return (
    <div className="features">
      <h3>Vehicle Details</h3>

      <ul className="features-list">
        <li>
          <strong>Type:</strong> {camper.form}
        </li>
        <li>
          <strong>Transmission:</strong> {camper.transmission}
        </li>
        <li>
          <strong>Fuel:</strong> {camper.engine}
        </li>
        <li>
          <strong>Length:</strong> {camper.length || "-"}
        </li>
        <li>
          <strong>Width:</strong> {camper.width || "-"}
        </li>
        <li>
          <strong>Height:</strong> {camper.height || "-"}
        </li>
      </ul>

      <h3>Equipment</h3>

      <div className="equipment">
        {camper.AC && <p>✔ AC</p>}
        {camper.kitchen && <p>✔ Kitchen</p>}
        {camper.bathroom && <p>✔ Bathroom</p>}
        {camper.TV && <p>✔ TV</p>}
        {camper.radio && <p>✔ Radio</p>}
        {camper.water && <p>✔ Water</p>}
        {camper.gas && <p>✔ Gas</p>}
        {!camper.AC &&
          !camper.kitchen &&
          !camper.bathroom &&
          !camper.TV &&
          !camper.radio &&
          !camper.water &&
          !camper.gas && <p>No equipment listed</p>}
      </div>

      <h3>Details</h3>

      <ul className="details">
        {camper.details?.map((d, index) => (
          <li key={index}>{d}</li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
