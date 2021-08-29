import React, { useState, useEffect } from "react";
import HotCard from "./HotCard";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getAllHotel } from "../../store/actions";
import { useContext } from "react";
import { SearchDataContext } from "../Context/SearchDataContext";
import MultiMap from "../Map/MultiMap";
import styled from "styled-components";

const BigHot = () => {
  const { searchData } = useContext(SearchDataContext);
  const [list, setList] = useState([]);
  const [map, setMap] = useState(false);
  console.log(searchData, "searchData is Here");

  const dispatch = useDispatch();
  const { hotel } = useSelector((state) => state.activities, shallowEqual);
  useEffect(() => {
    handleAllDetails();
  }, [searchData]);
  const handleAllDetails = () => {
    dispatch(getAllHotel(searchData));
  };

  console.log(hotel, "hotel");
  return (
    <>
      <button
        onClick={() => {
          setMap((p) => !p);
        }}
      >
        {map ? "Close" : "Show"} Map
      </button>
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
