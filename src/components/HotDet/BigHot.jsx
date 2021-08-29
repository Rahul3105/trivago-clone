import React, { useState, useEffect } from "react";
import HotCard from "./HotCard";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getAllHotel } from "../../store/actions";
import { useContext } from "react";
import { SearchDataContext } from "../Context/SearchDataContext";
const BigHot = ({currPage}) => {
  const { searchData } = useContext(SearchDataContext)
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  const { hotel } = useSelector((state) => state.activities, shallowEqual);
  
  useEffect(() => {
    handleAllDetails();
  }, [searchData, currPage]);

  const handleAllDetails = () => {
    dispatch(getAllHotel(searchData,currPage));

  };
  return (
    <>
      {hotel.map((i) => (
        <HotCard x={i} />
      ))}
    </>
  );
};

export default BigHot;
