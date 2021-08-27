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

const hotImg = [
  "https://tse4.mm.bing.net/th?id=OIP.XA-4n_CHeMA-qteo0KWyiAHaGO&pid=Api&P=0&w=215&h=182",
  "https://tse2.mm.bing.net/th?id=OIP.8PsnrR9xKfvTQhHztUdEBQHaFc&pid=Api&P=0&w=207&h=1530",
  "https://tse2.mm.bing.net/th?id=OIP.uqbFoCqk2k_VOjUdTVXbBwHaE8&pid=Api&P=0&w=228&h=153",
  "https://tse4.mm.bing.net/th?id=OIP.jDVX474QtM5qBBJxCKO2jQHaFC&pid=Api&P=0&w=251&h=172",
  "https://tse2.mm.bing.net/th?id=OIP.Mzwn784IH-ER8H-HxFSLtQHaD5&pid=Api&P=0&w=306&h=162",
  "https://imgcy.trivago.com/d_dummy.jpeg,f_auto,q_auto/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low//partnerimages/59/00/590027658.jpeg",
  "https://imgcy.trivago.com/d_dummy.jpeg,f_auto,q_auto/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low//partnerimages/59/00/590027688.jpeg",
  "https://tse3.mm.bing.net/th?id=OIP.Dcxhjsri6r0YALxfeXqXOgHaEK&pid=Api&P=0&w=287&h=162",
];
const a = [0, 1, 1, 1, 1, 0, 0, 1, 1.0];
const me = {
  hotel: [
    "a",
    "b",
    "c",
    "d",
    "a",
    "b",
    "c",
    "d",
    "a",
    "b",
    "c",
    "d",
    "a",
    "b",
    "c",
    "d",
    "a",
    "b",
    "c",
    "d",
  ],
  room: ["b", "c", "d", "a", "b", "c", "d", "a", "b", "c", "d", "a", "b"],
  spa: ["a", "b", "c", "d", "a"],
  accessability: ["a", "b", "c"],
  children: ["a", "b", "c"],
};
const HotCard = () => {
  const [map, setMap] = useState(true);
  const [det, SetDet] = useState(false);
  const [over, SetOver] = useState(false);
  const [info, SetInfo] = useState(false);
  const [pic, SetPic] = useState(false);
  const [review, SetReview] = useState(false);
  const [deal, SetDeal] = useState(false);
  const [ld, setLd] = useState(true);

  const cls = useStyle();

  useEffect(() => {
    setTimeout(() => {
      setLd(false);
    }, 3000);
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
  return (
    <div>
      <div>{ld ? "true" : "false"}</div>
      <button onClick={() => setMap(true)}>Open map</button>
      <button onClick={() => setMap(false)}>Close map</button>
      {map &&
        (ld ? (
          <CardLoad setLd={setLd} ld={ld} />
        ) : (
          <Cont onClick={big}>
            <Imag>
              <img
                src="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/75/66/7566748_v1.jpeg"
                alt=""
              />
              <Fav>
                <FavoriteBorderOutlinedIcon className={cls.logoWidth} />
              </Fav>
            </Imag>

            <Mid>
              <div>
                <h2>Conrad hotel</h2>
              </div>
              <Star>
                <Rating value={4} readOnly />
                <p>Hotel</p>
              </Star>
              <button>
                <div>
                  <RoomOutlinedIcon className={cls.logoWidth} />
                  <p>8.1 km from City Centre</p>
                </div>
                <ExpandMoreIcon className={cls.logoWidth} />
              </button>
              <button>
                <div>
                  <Grn> 8.6 </Grn>
                  <b>Excellent</b> (86 reviews)
                </div>
                <ExpandMoreIcon className={cls.logoWidth} />
              </button>
            </Mid>
            <Last>
              <BigGrn>
                <p>GoIibibo</p>
                <div>
                  <CheckCircleIcon className={cls.logoWidth} />
                  <p> | Free Cancelation </p>
                  <p> | Free BreakFast </p>
                </div>
                <div>
                  <h2>₹7,580</h2>
                  <button>View Deal > </button>
                </div>
              </BigGrn>
              <div>
                <div>
                  <h3>Conrad</h3>
                  <h3>₹7,280</h3>
                </div>
                <div>
                  <h3>Our Lowest Price</h3>
                  <p>
                    <b>₹6,384</b>
                    <span> Trip.com</span>
                  </p>
                </div>
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
      {map && over && <div>OverView</div>}
      {map && info && (
        <>
          <Amenity
            a={a}
            name={"Conrad"}
            about={
              "Located in Andheri East, The Leela Mumbai is a perfect starting point from which to explore Mumbai. The hotel offers guests a range of services and amenities designed to provide comfort and convenience. To be found at the hotel are 24-hour room service, 24-hour security, daily housekeeping, portable wi-fi rental, postal service. Guestrooms are designed to provide an optimal level of comfort with welcoming decor and some offering convenient amenities like locker, closet, towels, carpeting,clothes rack. Access to the hotel's hot tub, fitness center, sauna, outdoor pool, spa will further enhance your satisfying stay. Discover all Mumbai has to offer by making The Leela Mumbai your base."
            }
            me={me}
          />
          <Clean />
        </>
      )}
      {map && pic && <Photo hotImg={hotImg} />}
      {map && review && <ReviewMain />}
      {map && deal && <div>Deal</div>}
    </div>
  );
};

export default HotCard;

const Cont = styled.div`
  display: flex;
  max-width: 1000px;
  min-height: 150px;
  max-height: 200px;
  border-radius: 20px;
  padding: 3px;
  margin: auto;
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
    font-size: 22px;
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
  p {
    font-size: 16px;
  }
`;
const BigGrn = styled.div`
  width: 100%;
  height: 65%;
  padding: 5px;
  background-color: rgb(241, 248, 234);
  border-radius: 15px;
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
      height: 40px;
      color: white;
      padding: 2px 15px;
      font-size: 16px;
      font-weight: 600;
      border-radius: 20px;
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
  left: -210px;
  top: -165px;
  margin: 0;
  padding: 0;
  background-color: white;
  border: none;
  border-radius: 25%;
`;
