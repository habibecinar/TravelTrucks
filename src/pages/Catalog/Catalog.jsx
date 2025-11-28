import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../app/campersSlice";
import CamperCard from "../../components/CamperCard/CamperCard";
import FilterBar from "../../components/FilterBar/FilterBar";

const Catalog = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((s) => s.campers);
 const [filters, setFilters] = useState({
    location: "",
    type: "",
    transmission: "",
  });
  useEffect(() => {
    console.log("FETCH ÇALIŞTI");
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className="catalog-page">
      
  <FilterBar filters={filters} setFilters={setFilters} />
      {loading && <p>Loading...</p>}

      <div className="camper-list">
        {Array.isArray(items) ? (
          items.map((camper) => (
            <CamperCard key={camper.id} camper={camper} />
          ))
        ) : (
          <p>Items array değil!</p>
        )}
      </div>

      <button className="load-more">Load More</button>
    </div>
  );
};

export default Catalog;
