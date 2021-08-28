import React, { useRef, useEffect, useState } from "react";
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

export default function Map({ w, h, lat, long }) {
  const cls = useStyle();
  const [port, setPort] = useState({
    width: w,
    height: h,
    latitude: 19.07283,
    longitude: 72.88261,
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
        <Marker latitude={19.07283} longitude={72.88261}>
          <RoomIcon
            className={cls.logo}
            onClick={(e) => {
              e.preventDefault();
              setSel([37.7577, -122.4376]);
            }}
          />
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
