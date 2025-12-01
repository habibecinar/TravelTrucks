import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCamperById } from "../../app/campersSlice";
import Gallery from "../../components/Gallery/Gallery";
import Features from "../../components/CamperTabs/Features";
import Reviews from "../../components/CamperTabs/Reviews";
import BookingForm from "../../components/BookingForm/BookingForm";
import "./Details.css";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedCamper } = useSelector((s) => s.campers);

  const [tab, setTab] = useState("features");

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [id]);

  if (!selectedCamper) return <p>Loading...</p>;
console.log("SELECTED CAMPER:", selectedCamper);

  return (
    <div className="details-page">
      <h2>{selectedCamper.name}</h2>
      <Gallery images={selectedCamper.gallery} />
      <p>{selectedCamper.description}</p>

      <div className="tabs">
        <button onClick={() => setTab("features")}>Features</button>
        <button onClick={() => setTab("reviews")}>Reviews</button>
      </div>

      {tab === "features" && <Features camper={selectedCamper} />}
      {tab === "reviews" && <Reviews reviews={selectedCamper.reviews} />}

      <BookingForm />
    </div>
  );
};

export default Details;
