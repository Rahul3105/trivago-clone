import React, { useState } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";

export default function Map() {
  const [port, setPort] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });
  const [sel, setSel] = useState(null);
  return (
    <div>
      <ReactMapGl
        {...port}
        mapboxApiAccessToken="pk.eyJ1IjoiYWtzaGF5a3VtYXIyNCIsImEiOiJja3N1aGFhOTMxZzZqMnF0ZmZ1eDRmNXJmIn0.ylSBEBM4k84BqHw-Hl1lOQ"
        onViewportChange={(p) => setPort(p)}
        mapStyle="mapbox://styles/akshaykumar24/cksum88qz319v18o2jzl25kao/draft"
      >
        <Marker latitude={37.8271784} longitude={-122.29130780000003}>
          <button
            onClick={(e) => {
              e.preventDefault();
              setSel([37.8271784, -122.29130780000003]);
            }}
          >
            Here
          </button>
        </Marker>
        {sel ? (
          <Popup
            onClose={() => setSel(null)}
            latitude={sel[0]}
            longitude={sel[1]}
          >
            <div>Hereeeee</div>
          </Popup>
        ) : null}
      </ReactMapGl>
    </div>
  );
}
