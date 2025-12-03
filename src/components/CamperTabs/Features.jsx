
import "./Features.css";

const Features = ({ camper }) => {
  if (!camper) return null;



  return (
    <div className="features-container">
      {/* Equipment Tags */}
      <div className="equipment-tags">
        {/* AC */}
        {camper.AC && (
          <div className="equipment-tag">
            <span className="equipment-icon">❄️</span>
            <span className="equipment-name">AC</span>
          </div>
        )}
        
        {/* Automatic Transmission */}
        {camper.transmission === "automatic" && (
          <div className="equipment-tag">
            <span className="equipment-icon">⚙️</span>
            <span className="equipment-name">Automatic</span>
          </div>
        )}
        
        {/* Kitchen */}
        {camper.kitchen && (
          <div className="equipment-tag">
            <span className="equipment-icon">🍽️</span>
            <span className="equipment-name">Kitchen</span>
          </div>
        )}
        
        {/* TV/Radio */}
        {camper.TV && (
          <div className="equipment-tag">
            <span className="equipment-icon">📻</span>
            <span className="equipment-name">TV</span>
          </div>
        )}
        
        {/* Bathroom */}
        {camper.bathroom && (
          <div className="equipment-tag">
            <span className="equipment-icon">🚿</span>
            <span className="equipment-name">Bathroom</span>
          </div>
        )}
        
        {/* Radio */}
        {camper.radio && (
          <div className="equipment-tag">
            <span className="equipment-icon">📻</span>
            <span className="equipment-name">Radio</span>
          </div>
        )}
        
        {/* Refrigerator */}
        {camper.refrigerator && (
          <div className="equipment-tag">
            <span className="equipment-icon">🧊</span>
            <span className="equipment-name">Refrigerator</span>
          </div>
        )}
        
        {/* Microwave */}
        {camper.microwave && (
          <div className="equipment-tag">
            <span className="equipment-icon">📟</span>
            <span className="equipment-name">Microwave</span>
          </div>
        )}
        
        {/* Gas */}
        {camper.gas && (
          <div className="equipment-tag">
            <span className="equipment-icon">⛽</span>
            <span className="equipment-name">Gas</span>
          </div>
        )}
        
        {/* Water */}
        {camper.water && (
          <div className="equipment-tag">
            <span className="equipment-icon">💧</span>
            <span className="equipment-name">Water</span>
          </div>
        )}
      </div>

      {/* Vehicle Details */}
      <div className="vehicle-details">
        <h3>Vehicle details</h3>
        <div className="details-list">
          <div className="detail-row">
            <span className="detail-label">Form</span>
            <span className="detail-value">{camper.form}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Length</span>
            <span className="detail-value">{camper.length}m</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Width</span>
            <span className="detail-value">{camper.width}m</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Height</span>
            <span className="detail-value">{camper.height}m</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Tank</span>
            <span className="detail-value">{camper.tank}l</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Consumption</span>
            <span className="detail-value">{camper.consumption}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
