import React, { useState } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import RoomIcon from "@material-ui/icons/Room";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  logo: {
    width: "30px",
    height: "30px",
    color: "red",
  },
});

export default function MultiMap({ w, h, x }) {
  const cls = useStyle();
  console.log(x, "Here");
  const [port, setPort] = useState({
    width: w,
    height: h,
    latitude: x[0].map[0],
    longitude: x[0].map[1],
    zoom: 10,
  });
  const [sel, setSel] = useState(null);
  //console.log(port.latitude, port.longitude, "Loats");
  return (
    <div>
      <ReactMapGl
        {...port}
        mapboxApiAccessToken="pk.eyJ1IjoiYWtzaGF5a3VtYXIyNCIsImEiOiJja3N1aGFhOTMxZzZqMnF0ZmZ1eDRmNXJmIn0.ylSBEBM4k84BqHw-Hl1lOQ"
        onViewportChange={(p) => setPort(p)}
        mapStyle="mapbox://styles/akshaykumar24/cksum88qz319v18o2jzl25kao/draft"
      >
        {x.map((i) => (
          <Marker latitude={i.map[0]} longitude={i.map[1]}>
            <RoomIcon
              className={cls.logo}
              onMouseOver={(e) => {
                e.preventDefault();
                setSel([i.map[0], i.map[1], i]);
              }}
              onMouseOut={(e) => {
                e.preventDefault();
                setSel(null);
              }}
            />
          </Marker>
        ))}
        {sel ? (
          <Popup
            onClose={() => setSel(null)}
            latitude={sel[0]}
            longitude={sel[1]}
          >
            <div>
              <h3>{sel[2].name}</h3>
              <h2>₹{sel[2].deals.reduce((a, b) => Math.min(a, b))}</h2>
            </div>
          </Popup>
        ) : null}
      </ReactMapGl>
    </div>
  );
}
