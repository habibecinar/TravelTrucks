// CamperDetails.jsx
import React from "react";
import { useSelector } from "react-redux";

const CamperDetails = ({ camperId }) => {
  const camper = useSelector((state) =>
    state.campers.campers.find((c) => c.id === camperId)
  );

  if (!camper) return <p>Loading...</p>;

  return (
    <div>
      <h2>{camper.name}</h2>
      <p>{camper.model}</p>
      <p>{camper.description}</p>
    </div>
  );
};

export default CamperDetails;
