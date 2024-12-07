import { useEffect, useRef } from "react";
import * as tt from "@tomtom-international/web-sdk-maps";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import "./App.css";

function App() {
  const mapContainer = useRef(null); // Corrected reference
  const AMSTERDAM = { lng: 4.896029, lat: 52.371807 }; // Amsterdam coordinates
  const API_KEY = "kZT4xbl7YoCMomVVfHJw538yyaPni4YD"; // Your TomTom API key

  useEffect(() => {
    if (!mapContainer.current) return; // Ensure map container exists

    const map = tt.map({
      key: API_KEY,
      container: mapContainer.current, // Pass the DOM element directly
      center: AMSTERDAM,
      zoom: 10,
      language: "en-GB",
    });

    // Add Controls
    map.addControl(new tt.FullscreenControl());
    map.addControl(new tt.NavigationControl());

    // Clean up on component unmount
    return () => map.remove();
  }, [API_KEY]);

  return (
    <div className="container">
      <nav className="nav">
        <h1>Geofencing in React</h1>
      </nav>
      <div ref={mapContainer} className="map" />
    </div>
  );
}

export default App;
