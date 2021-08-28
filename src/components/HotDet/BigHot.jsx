import React, { useState, useEffect } from "react";
import HotCard from "./HotCard";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getAllHotel } from "../../store/actions";
import { useContext } from "react";
import { SearchDataContext } from "../Context/SearchDataContext";
const BigHot = () => {
  const { searchData } = useContext(SearchDataContext)
  const [list, setList] = useState([]);
  console.log(searchData)

  const dispatch = useDispatch();
  const { hotel } = useSelector((state) => state.activities, shallowEqual);
  useEffect(() => {

    handleAllDetails();
  }, []);
  const handleAllDetails = () => {

    dispatch(getAllHotel(searchData));

  };

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
