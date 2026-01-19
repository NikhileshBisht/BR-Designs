import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import "./NationwideFootprint.css";

// World map topology URL
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Indian cities coordinates [longitude, latitude]
const cities = [
  { name: "New Delhi", coordinates: [77.2090, 28.6139] },
  { name: "Gurgaon", coordinates: [77.1025, 28.4089] },
  { name: "Noida", coordinates: [77.3910, 28.5355] },
  { name: "Ahmedabad", coordinates: [72.5714, 23.0225] },
  { name: "Mumbai", coordinates: [72.8777, 19.0760] },
  { name: "Pune", coordinates: [73.8567, 18.5204] },
];

export default function NationwideFootprint() {

  return (
    <section className="footprint-section">
      {/* MAP BACKGROUND */}
      <div className="footprint-map-background">
        <ComposableMap
          projectionConfig={{
            scale: 1200,
            center: [76.5, 22.0]
          }}
          projection="geoMercator"
          width={1200}
          height={800}
          style={{ width: "100%", height: "100%" }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#e3f2fd"
                  stroke="#1976d2"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none", fill: "#e3f2fd" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>
          {cities.map((city) => (
            <Marker key={city.name} coordinates={city.coordinates}>
              <circle r={4} fill="#e11d48" />
            </Marker>
          ))}
        </ComposableMap>
      </div>

      {/* CONTENT OVERLAY */}
      <div className="footprint-container">
        <div className="footprint-content">
          <h2 className="footprint-title">
            <span className="footprint-diamond">◆</span>
            Nationwide foot print
          </h2>

          <p className="footprint-desc">
            We have successfully delivered high-impact projects across India,
            demonstrating our extensive reach and capability in key
            metropolitan cities.
          </p>

          <p className="footprint-subtitle">
            <strong>Our commitment to excellence spans across:</strong>
          </p>

          <ul className="footprint-list">
            {cities.map((city) => (
              <li key={city.name}>{city.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
