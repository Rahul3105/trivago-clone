import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import { makeStyles, withStyles } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import Clean from "./clean";
import Amenity from "./Amenity";
import Rating from "@material-ui/lab/Rating";
import Photo from "./Photo";
import ReviewMain from "./Review";
import CardLoad from "./CardLoad";
import Overview from "./Overview";
import Deal from "./Deal";
import { useHistory } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useContext } from "react";
import { SearchDataContext } from "../Context/SearchDataContext";
import { useDispatch } from 'react-redux';
import { redirectSuccess } from '../../store/Redirect/actions'
const useStyle = makeStyles({
  logoWidth: {
    width: "20px",
    height: "20px",
  },
  colo: {
    maxWidth: "1000px",
    margin: "auto",
  },
});

const HotCard = ({ x }) => {
  const { guestsData, roomsData, days } = useContext(SearchDataContext)

  const dispatch = useDispatch();
  const [map, setMap] = useState(true);
  const [det, SetDet] = useState(false);
  const [over, SetOver] = useState(false);
  const [info, SetInfo] = useState(false);
  const [pic, SetPic] = useState(false);
  const [review, SetReview] = useState(false);
  const [deal, SetDeal] = useState(false);
  const [ld, setLd] = useState(true);
  const history = useHistory();

  const cls = useStyle();

  const r = (
    (x.review.location +
      x.review.room +
      x.review.services +
      x.review.facilities +
      x.review.vom) /
    5
  ).toFixed(1);
  const redirectTo = [
    "Agoda",
    "Booking.com",
    "GoIbibo",
    "Destinia",
    "Trip.com",
  ];
  let c = Infinity,
    ind = 0;
  for (let i = 0; i < 5; i++) {
    if (c > x.deals[i]) {
      ind = i;
      c = x.deals[i];
    }
  }
  useEffect(() => {
    setTimeout(() => {
      setLd(false);
    }, Math.random() * 3000);
  }, []);

  const tog1 = () => {
    SetOver((p) => !p);
    SetInfo(false);
    SetPic(false);
    SetReview(false);
    SetDeal(false);
  };
  const tog2 = () => {
    SetOver(false);
    SetInfo((p) => !p);
    SetPic(false);
    SetReview(false);
    SetDeal(false);
  };
  const tog3 = () => {
    SetOver(false);
    SetInfo(false);
    SetPic((p) => !p);
    SetReview(false);
    SetDeal(false);
  };
  const tog4 = () => {
    SetOver(false);
    SetInfo(false);
    SetPic(false);
    SetReview((p) => !p);
    SetDeal(false);
  };
  const tog5 = () => {
    SetOver(false);
    SetInfo(false);
    SetPic(false);
    SetReview(false);
    SetDeal((p) => !p);
  };
  const big = () => {
    SetDet((p) => !p);
    SetOver(false);
    SetInfo(false);
    SetPic(false);
    SetReview(false);
    SetDeal(false);
  };
  ////this is for redirecting to other website
  const handleRedirect = () => {
    history.push(`/redirect/${x.redirect}.com`);
    dispatch(redirectSuccess(x));
    setTimeout(() => {
      history.replace(`/externalSide/${x.redirect}.com`);
    }, 5000);
  };
  return (
    <div>
      {map &&
        (ld ? (
          <CardLoad setLd={setLd} ld={ld} />
        ) : (
          <Cont onClick={big}>
            <Imag>
              <img src={`${x.img[0]}`} alt="" />
              <Fav>
                <FavoriteBorderOutlinedIcon className={cls.logoWidth} />
              </Fav>
            </Imag>

            <Mid>
              <div>
                <h2>{x.name}</h2>
              </div>
              <Star>
                <Rating value={x.star} readOnly />
                <p>Hotel</p>
              </Star>
              <button>
                <div>
                  <RoomOutlinedIcon className={cls.logoWidth} />
                  <p>
                    {x.dist} km from {x.address}
                  </p>
                </div>
                <ExpandMoreIcon className={cls.logoWidth} />
              </button>
              <button>
                <div>
                  <Grn>{r}</Grn>
                  <b>{r < 8.5 ? "Good" : "Excellent"}</b> ({x.reviewNum}{" "}
                  reviews)
                </div>
                <ExpandMoreIcon className={cls.logoWidth} />
              </button>
            </Mid>
            <Last>
              <BigGrn>
                <p>{x.redirect}</p>
                <div className="facilitiespar">
                  <CheckCircleIcon className={cls.logoWidth} />
                  {x.cancelation && <p> | Free Cancelation </p>}
                  {x.breakfast && <p> | Free BreakFast </p>}
                </div>

                <div style={{ display: "grid" }}>

                  <span style={{ fontSize: "13px" }}>{roomsData > 0 && days > 0 ? `${guestsData} guests ${days} night for ₹${x.deals[ind] * roomsData * days}` : `₹${x.deals[ind] * 1 * 1}`} </span>
                  <div className="viewDealbtn">
                    <h2>{roomsData > 0 && days > 0 ? ` ₹${x.deals[ind] * roomsData * days}` : `₹${x.deals[ind] * 1 * 1}`}</h2>
                    <button

                      onClick={handleRedirect}
                    >

                      View Deal <ArrowForwardIosIcon fontSize="small" />
                    </button>
                  </div>
                </div>
              </BigGrn>
              <div>
                <div>
                  <h3>
                    {redirectTo[ind + 1]
                      ? redirectTo[ind + 1]
                      : redirectTo[ind]}
                  </h3>
                  <h3>₹{x.deals[ind + 1] ? x.deals[ind + 1] : x.deals[ind]}</h3>
                </div>
                <div>
                  <h3>Our Lowest Price</h3>
                  <p>
                    <b>₹{x.deals[ind]}</b>
                    <span> {redirectTo[ind]}</span>
                  </p>
                </div>
                {/* <h2>₹7,580</h2>
                <button>{`View Deal > `}</button> */}
              </div>
            </Last>
          </Cont>
        ))}
      {map && det && (
        <Bar>
          <div>
            <button
              onClick={tog1}
              style={{
                color: over ? "rgb(0,127,173)" : "",
                borderBottom: over ? "2px solid rgb(0,127,173)" : "",
              }}
            >
              OverView
            </button>
            <button
              onClick={tog2}
              style={{
                color: info ? "rgb(0,127,173)" : "",
                borderBottom: info ? "2px solid rgb(0,127,173)" : "",
              }}
            >
              Info
            </button>
            <button
              onClick={tog3}
              style={{
                color: pic ? "rgb(0,127,173)" : "",
                borderBottom: pic ? "2px solid rgb(0,127,173)" : "",
              }}
            >
              Photos
            </button>
            <button
              onClick={tog4}
              style={{
                color: review ? "rgb(0,127,173)" : "",
                borderBottom: review ? "2px solid rgb(0,127,173)" : "",
              }}
            >
              Reviews
            </button>
            <button
              onClick={tog5}
              style={{
                color: deal ? "rgb(0,127,173)" : "",
                borderBottom: deal ? "2px solid rgb(0,127,173)" : "",
              }}
            >
              Deals
            </button>
          </div>
        </Bar>
      )}
      {map && over && <Overview x={x} r={r} />}
      {map && info && (
        <>
          <Amenity x={x} />
          <Clean />
        </>
      )}
      {map && pic && <Photo hotImg={x.img} />}
      {map && review && <ReviewMain x={x} r={r} />}
      {map && deal && <Deal x={x} />}
    </div>
  );
};

export default HotCard;

const Cont = styled.div`
  display: flex;
  width: 1000px;
  min-height: 150px;
  max-height: 200px;
  border-radius: 20px;
  padding: 3px;
  margin: auto;
  background-color: white;
  box-shadow: 0 1px 4px rgb(41 51 57 / 50%);
  /* margin-bottom: 8px; */
  border: 1px solid rgb(235, 236, 237);
  * {
    white-space: pre;
  }
  > div:nth-child(1) {
    flex: 1;
    img {
      width: 100%;
      height: 100%;
    }
  }
  > div:nth-child(2) {
    flex: 2;
  }
  > div:nth-child(3) {
    flex: 1.4;
  }
`;
const Imag = styled.div`
  > img {
    border-radius: 15px;
  }
`;
const Mid = styled.div`
  * {
    padding: 0;
    margin: 0;
    font-size: 14px;
  }

  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  h2 {
    font-size: 19px;
    font-weight: 700;
  }
  button {
    background-color: transparent;
    border: none;
    align-items: center;
    border-top: 1px solid rgb(235, 236, 237);
    padding: 20px 5px 0;
    display: flex;
    justify-content: space-between;
    > div {
      display: flex;
      flex-direction: row;
      * {
        padding: 2px;
        align-items: center;
      }
    }
    :hover {
      background-color: rgb(235, 236, 237);
    }
  }
`;
const Last = styled.div`
  * {
    padding: 0;
    margin: 0;
    font-size: 14px;
  }
  > div:nth-child(2) {
    display: flex;
    height: 35%;
    justify-content: space-evenly;
    > div {
      align-items: center;
      border: 1px solid rgb(235, 236, 237);
      border-radius: 10px;
      padding: 5px 10px;
      margin: 5px;
      width: 100%;
    }
    > div:hover {
      background-color: rgb(235, 236, 237);
    }

    > div:nth-child(1) {
      flex: 1.5;
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
    }
    > :nth-child(2) {
      flex: 2;
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
    }
  }
`;
const Grn = styled.p`
  background-color: rgb(0, 95, 0);
  width: 40px;
  color: white;
  border-radius: 5px;
`;
const Star = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  p {
    font-size: 15px;
    margin-left: 1rem;
  }
`;
const BigGrn = styled.div`
  width: 100%;
  height: 65%;
  padding: 5px;
  background-color: rgb(241, 248, 234);
  border-radius: 15px;
  border: 1px solid white;
  .facilitiespar {
    p {
      font-size: 13px;
    }
  }
  > p {
    font-size: 14px;
    padding: 5px 10px;
  }
  div {
    display: flex;
    padding: 5px 10px;
    color: rgb(0, 95, 0);
  }
  div:nth-child(3) {
    justify-content: space-between;
    align-items: center;
    * {
      font-size: 20px;
    }
    button {
      background-color: rgb(2, 128, 0);
      border: none;
      height: 35px;
      width: 115px;
      color: white;
      padding: 2px 15px;
      font-size: 16px;
      font-weight: 600;
      border-radius: 20px;
      display: flex;
      align-items: center;
      position: relative;
      left: 94px;
      top: -5px;

      :hover {
        background-color: rgb(0, 95, 0);
      }
    }
  }
  :hover {
    border: 1px solid rgb(153, 204, 102);
  }
`;
const Bar = styled.div`
  max-width: 1000px;
  margin: auto;
  height: 50px;
  background-color: white;
  border-top: 1px solid #ebeced;
  border-bottom: 1px solid #cdd0d2;
  text-align: center;
  button {
    padding: 15px;
    background-color: transparent;
    border: none;
    font-size: 14px;
    font-weight: 700;
    color: rgb(105, 115, 121);
  }
  button:hover {
    background-color: rgb(235, 236, 237);
  }
`;

const Fav = styled.button`
  position: relative;
  left: -215px;
  top: -16rem;
  height: 2.5rem;
  margin: 0;
  width: 2rem;
  padding: 0;
  background-color: rgb(27, 38, 69);
  border: none;
  border-radius: 25%;
  color: white;
`;
