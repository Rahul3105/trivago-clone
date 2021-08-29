import React, { useState } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import RoomIcon from "@material-ui/icons/Room";
import { makeStyles } from "@material-ui/core";
import styled from "styled-components";
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
              // onClick={(e) => {
              //   e.preventDefault();
              //   setSel([i.map[0], i.map[1], i]);
              // }}
            />
          </Marker>
        ))}
        {sel ? (
          <Popup
            onClose={() => setSel(null)}
            latitude={sel[0]}
            longitude={sel[1]}
          >
            <Show>
              <img src={sel[2].img[0]} alt="" />
              <div>
                <h3>{sel[2].name}</h3>
                <h2>₹{sel[2].deals.reduce((a, b) => Math.min(a, b))}</h2>
                <h1>
                  {(
                    (sel[2].review.location +
                      sel[2].review.room +
                      sel[2].review.services +
                      sel[2].review.facilities +
                      sel[2].review.vom) /
                    5
                  ).toFixed(1)}
                </h1>
              </div>
            </Show>
          </Popup>
        ) : null}
      </ReactMapGl>
    </div>
  );
}

const Show = styled.div`
  display: flex;
  gap: 10px;
  * {
    font-size: 14px;
    padding: 8px 0;
  }
  > img {
    width: 100px;
    height: 120px;
  }
  h1 {
    width: 50px;
    background-color: green;
    border: 1px solid black;
    text-align: center;
    border-radius: 25px;
    color: white;
    border: none;
    font-size: 16px;
  }
`;
