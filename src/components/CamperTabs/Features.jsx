
const Features = ({ camper }) => {
  if (!camper) return null;

  return (
    <div className="features">
      <h3>Vehicle Details</h3>
      <ul>
        <li>Type: {camper.form}</li>
        <li>Transmission: {camper.transmission}</li>
        <li>Fuel: {camper.engine}</li>
        <li>Length: {camper.length} m</li>
        <li>Width: {camper.width} m</li>
        <li>Height: {camper.height} m</li>
      </ul>

      <h3>Equipment</h3>
      <ul>
        {camper.details &&
          Object.entries(camper.details).map(([key, value]) =>
            value ? <li key={key}>✔ {key}</li> : null
          )}
      </ul>
    </div>
  );
};

export default Features;
