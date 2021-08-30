import React, { useState, useEffect } from "react";
import HotCard from "./HotCard";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getAllHotel } from "../../store/actions";
import { useContext } from "react";
import { SearchDataContext } from "../Context/SearchDataContext";
import MultiMap from "../Map/MultiMap";
import styled from "styled-components";

const BigHot = ({ currPage }) => {
  const { searchData } = useContext(SearchDataContext);
  const [list, setList] = useState([]);
  const [map, setMap] = useState(false);
  const dispatch = useDispatch();
  const { hotel } = useSelector((state) => state.activities, shallowEqual);

  useEffect(() => {
    handleAllDetails();
  }, [searchData, currPage]);

  console.log(hotel, "hotel");

  const handleAllDetails = () => {
    dispatch(getAllHotel(searchData, currPage));
  };
  return (
    <>
      <MapBut
        onClick={() => {
          setMap((p) => !p);
        }}
      >
        {map ? "Close" : "View"} Map
      </MapBut>
      <Flx>
        <div>
          {hotel.map((i) => (
            <HotCard x={i} />
          ))}
        </div>
        {map && <MultiMap w={500} h={600} x={hotel} />}
      </Flx>
    </>
  );
};

export default BigHot;

const Flx = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-around;
  margin: auto;
  overflow: hidden;
  > :nth-child(2) {
    height: 600px;
    width: 500px;
    /* position: relative; */
    z-index: 1;
    top: 0;
    right: 0;
    border: 1px solid red;
  }
`;
const MapBut = styled.button`
background: url(https://media.gettyimages.com/vectors/abstract-city-map-vector-id165792741?k=20&m=165792741&s=612x612&w=0&h=9rZbvv7tW-Hivpno3lZ8CodMu4ZbFZVCfQFK5-58OBI=);
    height: 34px;
    width: 200px;
    font-size: 20px;
    font-weight: 700;
    color: rgb(0,127,173);
    border: none;
    position: absolute;
    top: 243px;
    right: 29rem;
    z-index: 0;
    border-radius: 10px;
`;
