import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { BtnsWrapper } from "./GuestCard";
import CardContent from "@material-ui/core/CardContent";
import styled from "styled-components";
import fivestars from "../../Logos/fivestars.png";
import fourstars from "../../Logos/fourstars.png";
import threestars from "../../Logos/threestars.png";
import twostars from "../../Logos/twostars.png";
import star from "../../Logos/star.png";

//facilities Icons
import CancelIcon from "@material-ui/icons/Cancel";
import PoolIcon from "@material-ui/icons/Pool";
import LocalParkingIcon from "@material-ui/icons/LocalParking";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import HotTubIcon from "@material-ui/icons/HotTub";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import WifiIcon from "@material-ui/icons/Wifi";
import AirplayIcon from "@material-ui/icons/Airplay";
import PetsIcon from "@material-ui/icons/Pets";
import PaymentIcon from "@material-ui/icons/Payment";
import SpaIcon from "@material-ui/icons/Spa";
import AccessibleForwardIcon from "@material-ui/icons/AccessibleForward";
import { useState, useEffect } from "react";
import { set } from "date-fns/esm";



//////////filtering with stars

import { priceFilter } from '../../store/actions';

import { useSelector , useDispatch } from 'react-redux';

const useStyles = makeStyles({
  root: {
    maxWidth: "600px",
    fontSize: "14px",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridGap: "1rem",
    margin: "4rem auto",
    boxShadow: "1px 1px 20px black",
    position: "absolute",
    top: "15rem",
    right: "21rem",
    zIndex: "1",
  },
  starsCont: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridGap: "1rem",
  },
  facilitiesCont: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridGap: "1rem",
    boxShadow: " 0px 2px 1px -2px grey",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export function MoreFilterCard({
  setFacilitiesforfilter,
  setFacilitieslength,
}) {
  const classes = useStyles();
  const [isChecked, setIschecked] = useState(false);
  const [facilities, setFacilities] = useState({});
  const hotelState = useSelector((state) => state.activities);
  const dispatch = useDispatch(); 
  const handleChange = (event) => {
    setIschecked(false);
    if (event.target.checked) {
      const name = event.target.name;
      setFacilities({
        ...facilities,
        [name]: event.target.value,
      });
      setFacilitiesforfilter(facilities);
      setFacilitieslength(Object.keys(facilities).length);
    } else {
      for (let key in facilities) {
        if (facilities[key] === event.target.value) {
          delete facilities[key];
        }
      }
      console.log(facilities);
      setFacilitiesforfilter(facilities);
      setFacilitieslength(Object.keys(facilities).length);
    }
  };
  const handleCheckboxReset = () => {
    setIschecked(!isChecked);
    for (let i in facilities) {
      delete facilities[i];
    }

    setFacilitiesforfilter(facilities);
    setFacilitieslength(Object.keys(facilities).length);
  };
  useEffect(() => {
    console.log(facilities);
    console.log(Object.keys(facilities).length);
    setFacilitieslength(Object.keys(facilities).length);
    setFacilitiesforfilter(facilities);
  }, [facilities]);
  const handleStarFilter = (star) => {
    dispatch( priceFilter(star, hotelState.currQuery, 'star') ) 
  } 
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.starsCont}>
        <div>
          <span>Hotel class</span>
        </div>
        <HotelstarsWrapper>
          <div className="starBox" onClick={() => handleStarFilter(1)}>
            <img className="onestar" src={star} alt="" />
          </div>
          <div className="starBox" onClick={() => handleStarFilter(2)}>
            <img className="twostar" src={twostars} alt="" />
          </div>
          <div className="starBox" onClick={() => handleStarFilter(3)}>
          
            <img src={threestars} alt="" />
          </div>
          <div className="starBox" onClick={() => handleStarFilter(4)}>
            <img src={fourstars} alt="" />
          </div>
          <div className="starBox" onClick={() => handleStarFilter(5)}>
            <img src={fivestars} alt="" />
          </div>
          <div></div>
        </HotelstarsWrapper>
      </CardContent>
      <CardContent className={classes.facilitiesCont}>
        <div>
          <span>Popular Filters</span>
        </div>
        <FacilitiesWrapper>
          <div>
            <CancelIcon fontSize="large" />
            <span>Free cancellation</span>
            <input
              checked={isChecked ? false : null}
              onChange={handleChange}
              value="free cancellation"
              name="freeCancellation"
              type="checkbox"
            />
          </div>
          <div>
            <PoolIcon fontSize="large" /> <span>Pool</span>
            <input
              checked={isChecked ? false : null}
              onChange={handleChange}
              value="pool"
              name="pool"
              type="checkbox"
            />
          </div>
          <div>
            <LocalParkingIcon fontSize="large" />
            <span>Car park</span>
            <input
              checked={isChecked ? false : null}
              onChange={handleChange}
              value="car park"
              name="carPark"
              type="checkbox"
            />
          </div>
          <div>
            <RestaurantIcon fontSize="large" />
            <span>Restaurant</span>
            <input
              checked={isChecked ? false : null}
              onChange={handleChange}
              value="restaurant"
              name="restaurant"
              type="checkbox"
            />
          </div>
          <div>
            <PeopleAltIcon fontSize="large" />
            <span>Family friendly</span>
            <input
              checked={isChecked ? false : null}
              onChange={handleChange}
              value="family friendly"
              name="familyFriendly"
              type="checkbox"
            />
          </div>
          <div>
            <HotTubIcon fontSize="large" />
            <span>Whirlpool/Hot tub</span>
            <input
              checked={isChecked ? false : null}
              onChange={handleChange}
              value="whirlpool"
              name="whirlPool"
              type="checkbox"
            />
          </div>
          <div>
            <img
              src="https://th.bing.com/th/id/R.89767996b9002158e35847ae62a7a192?rik=I1Z0dz3ixKCedg&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2ficons8%2fios7%2f512%2fSports-Dumbbell-icon.png&ehk=wnUAE81qGpTlItAL5%2bwHzQBHBsPsE0HZIxnu4iu4sOE%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            />
            <span>Gym</span>
            <input
              checked={isChecked ? false : null}
              onChange={handleChange}
              value="gym"
              name="gym"
              type="checkbox"
            />
          </div>
          <div>
            <LocalOfferIcon fontSize="large" />
            <span>Excellent value</span>
            <input
              checked={isChecked ? false : null}
              onChange={handleChange}
              value="excellent value"
              name="excellentValue"
              type="checkbox"
            />
          </div>
          <div>
            <FreeBreakfastIcon fontSize="large" />
            <span>Free breakfast</span>
            <input
              checked={isChecked ? false : null}
              onChange={handleChange}
              value="Free breakfast"
              name="freeBreakfast"
              type="checkbox"
            />
          </div>
          <div>
            <WifiIcon fontSize="large" />
            <span>Wifi</span>
            <input
              checked={isChecked ? false : null}
              onChange={handleChange}
              value="wifi"
              name="wifi"
              type="checkbox"
            />
          </div>
          <div>
            <AirplayIcon fontSize="large" />
            <span>Airconditoning</span>
            <input
              checked={isChecked ? false : null}
              onChange={handleChange}
              value="Airconditoning"
              name="airConditioning"
              type="checkbox"
            />
          </div>
          <div>
            <PetsIcon fontSize="large" />
            <span>Pets friendly</span>
            <input
              checked={isChecked ? false : null}
              onChange={handleChange}
              value="Pets friendly"
              name="petsFriendly"
              type="checkbox"
            />
          </div>
          <div>
            <PaymentIcon fontSize="large" />
            <span>Pay at the property</span>
            <input
              checked={isChecked ? false : null}
              onChange={handleChange}
              value="Pay at the property"
              name="payAttheproperty"
              type="checkbox"
            />
          </div>
          <div>
            <SpaIcon fontSize="large" />
            <span>spa</span>
            <input
              checked={isChecked ? false : null}
              onChange={handleChange}
              value="spa"
              name="spa"
              type="checkbox"
            />
          </div>
          <div>
            <AccessibleForwardIcon fontSize="large" />
            <span>Wheelchair Accessible</span>
            <input
              checked={isChecked ? false : null}
              onChange={handleChange}
              value="Wheelchair Accessible"
              name="wheelchairAccessible"
              type="checkbox"
            />
          </div>
        </FacilitiesWrapper>
      </CardContent>
      <CardContent>
        <BtnsWrapper>
          <div>
            <button onClick={handleCheckboxReset} className="muiBtn1">
              Reset
            </button>
          </div>
          <div>
            <button className="muiBtn2">Done</button>
          </div>
        </BtnsWrapper>
      </CardContent>
    </Card>
  );
}

const HotelstarsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 5fr;
  width: 100%;
  & > div {
    cursor: pointer;
  }
  & > div:nth-child(1) {
    padding: 1.5rem;
  }

  & > div:nth-child(2) {
    padding: 1.3rem;
  }
  .starBox {
    width: 50px;
    height: 50px;
    border: 1px solid rgb(255, 194, 1);
    padding: 0.8rem;

    img {
      width: 100%;
    }
  }
`;

const FacilitiesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2px;
  & > div {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    height: 40px;
    justify-content: start;
    align-items: center;
    box-shadow: 0px 2px 1px -2px grey;
    border-radius: 2px;
    padding: 1rem;
    cursor: pointer;
    input {
      cursor: pointer;
    }
    .MuiSvgIcon-root {
      fill: currentColor;
      width: 1em;
      height: 1em;
      display: inline-block;
      font-size: 2rem;
      transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      flex-shrink: 0;
      user-select: none;
      color: rgb(105, 116, 122);
    }
    :hover {
      background-color: rgb(235, 236, 237);
    }
    img {
      width: 20px;
    }
  }
`;
