import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../features/campers/campersSlice";

const CamperList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers()); // sayfa açılır açılmaz veriyi çek
  }, [dispatch]);

  return (
    <div>
      <h2>Campers List</h2>
    </div>
  );
};

export default CamperList;
