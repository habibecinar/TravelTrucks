import React, { useState } from "react";
import "./Gallery.css";

const Gallery = ({ images = [] }) => {
  // API: images = [{ thumb: "...", original: "..." }]
  const formattedImages = images.length > 0
    ? images.map(img => img.original || img.thumb)
    : [
        "/images/camper-default-1.jpg",
        "/images/camper-default-2.jpg",
        "/images/camper-default-3.jpg"
      ];

  const [selected, setSelected] = useState(formattedImages[0]);

  return (
    <div className="gallery">
      <img className="main-image" src={selected} alt="Camper" />

      <div className="thumbnails">
        {formattedImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Camper ${index}`}
            className={selected === img ? "thumbnail active" : "thumbnail"}
            onClick={() => setSelected(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
