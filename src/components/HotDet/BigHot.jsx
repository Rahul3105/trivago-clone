import React, { useState, useEffect } from "react";
import HotCard from "./HotCard";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getAllHotel } from "../../store/actions";

const BigHot = () => {
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  const { hotel } = useSelector((state) => state.activities, shallowEqual);
  const handleAllDetails = () => {
    dispatch(getAllHotel);
  };
  useEffect(() => {
    handleAllDetails();
  }, []);
  console.log(hotel);
  return (
    <>
      {hotel.map((i) => (
        <HotCard p={i} />
      ))}
    </>
  );
};

export default BigHot;
