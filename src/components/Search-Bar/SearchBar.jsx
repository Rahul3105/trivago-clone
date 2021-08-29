import styled from "styled-components";
import calender from "../../Logos/calendar.png";
import placeholder from "../../Logos/placeholder.png";

import addgroup from "../../Logos/addgroup.png";

import { Button } from "@material-ui/core";

import { useContext } from "react";
import ClearIcon from "@material-ui/icons/Clear";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import GuestCard from "../material-ui-components/GuestCard";
import { useState } from "react";
import { useEffect } from "react";
import { Search } from "./Search";

import { useHistory } from "react-router-dom";


import { SearchDataContext } from "../Context/SearchDataContext";


export function SearchBar() {
  const { searchData, handleSearchData, handleGuestsData, guestsData, handleRoomsData, handleDays, handleFirstDate, handleSecondDate } = useContext(SearchDataContext)
  console.log(searchData)
  const [show, setShow] = useState(false);
  const [hotelClass, setHotelClass] = useState(false);
  const [houseClass, setHouseClass] = useState(false);
  const [border, setBorder] = useState(false);
  const [datePicker, setDatePicker] = useState(false);
  const [clickedCheckOut, setClickedCheckOut] = useState(false);
  const [guestSelect, setGuestSelect] = useState(false);
  const [location, setLocation] = useState("");
  const [checkInDate, setCheckInDate] = useState("-- /-- /----");
  const [checkOutDate, setCheckOutDate] = useState("-- /-- /----");
  const [guestNumber, setGuestNumber] = useState(2)
  const [roomsNumber, setRoomsNumber] = useState(1)


  const [daysNum, setDaysNum] = useState(null)
  const history = useHistory()
  useEffect(() => {
    setShow(true);
  }, []);
  const handleBorder = () => {
    setBorder(true);
    setDatePicker(false);
    setClickedCheckOut(false);
  };

  const handleShow = () => {
    setShow(true);
    setHotelClass(false);
    setHouseClass(false);
    setBorder(false);
  };
  const handleHotelClass = () => {
    setHotelClass(true);
    setShow(false);
    setHouseClass(false);
    setBorder(false);
  };
  const handleHouseClass = () => {
    setHouseClass(true);
    setShow(false);
    setHotelClass(false);
    setBorder(false);
  };
  const handleLocationInput = (e) => {
    e.preventDefault();
    console.log(location);
    setLocation(e.target.value);
  };
  const handleClear = () => {
    setLocation("");
  };
  const handleDatePicker = () => {
    setDatePicker(!datePicker);
    setClickedCheckOut(false);
    setGuestSelect(false)
  };
  const handleClickedCheckOut = () => {
    setClickedCheckOut(!clickedCheckOut);
    setDatePicker(false);
    setGuestSelect(false)
  };
  const handleGuestSelector = () => {
    setDatePicker(false);
    setClickedCheckOut(false);
    setGuestSelect(!guestSelect)

  }
  const handleSearchButton = () => {

    handleSearchData(location)
    handleGuestsData(guestNumber)
    handleRoomsData(roomsNumber)

    handleFirstDate(checkInDate)
    handleSecondDate(checkOutDate)

    let first = Number(checkInDate.slice(8, 10))
    let last = Number(checkOutDate.slice(8, 10))

    let fmonth = checkInDate.slice(4, 7)
    let smonth = checkOutDate.slice(4, 7)

    if (fmonth === smonth) {
      handleDays(last - first)
    } else {
      if (smonth === "Jan" || smonth === "Mar" || smonth === "May" || smonth === "Jul" || smonth === "Aug" || smonth === "Oct" || smonth === "Nov" || smonth === "Dec") {
        if (last < first) {
          if (fmonth === "Jun" || fmonth === "Sep" || fmonth === "Nov" || fmonth === "Apr") {
            handleDays(30 - first + last)
          } else if (fmonth === "Jan" || fmonth === "Mar" || fmonth === "May" || fmonth === "Jul" || fmonth === "Aug" || fmonth === "Oct" || fmonth === "Nov" || fmonth === "Dec") {
            handleDays(31 - first + last)
          }
        }
      }
      if (smonth === "Jun" || smonth === "Sep" || smonth === "Nov" || smonth === "Apr") {
        if (last < first) {
          if (fmonth === "Jun" || fmonth === "Sep" || fmonth === "Nov" || fmonth === "Apr") {
            handleDays(30 - first + last)
          } else if (fmonth === "Jan" || fmonth === "Mar" || fmonth === "May" || fmonth === "Jul" || fmonth === "Aug" || fmonth === "Oct" || fmonth === "Nov" || fmonth === "Dec") {
            handleDays(31 - first + last)
          }
        }
      }
    }




    history.push('/hotel-booking')
  }
  // console.log(checkInDate)
  return (
    <SearchBarWrapper>
      <div className="search-bar-cont">
        <CategoryLinksWrapper>
          <div className={show ? "afterClick" : undefined} onClick={handleShow}>
            <span className={show ? "afterClickAnchor" : undefined}>
              All stays
            </span>
          </div>
          <div
            className={hotelClass ? "afterClick space-left" : "space-left"}
            onClick={handleHotelClass}
          >
            <span className={hotelClass ? "afterClickAnchor" : undefined}>
              Hotel
            </span>
          </div>
          <div
            className={
              houseClass
                ? "afterClick space-left houseAPwidth"
                : "space-left houseAPwidth"
            }
            onClick={handleHouseClass}
          >
            <span className={houseClass ? "afterClickAnchor" : undefined}>
              House/Apartment
            </span>
          </div>
        </CategoryLinksWrapper>
        <SearchBoxWrapper>
          <SearchBarMainWrapper>
            <SelectLocationWrapper>
              <div
                onClick={handleBorder}
                className={border ? "dottedBorder" : undefined}
              >
                <img src={placeholder} alt="" />{" "}
                <input
                  placeholder="Enter a hotel name or destination"
                  type="text"
                  value={location}
                  onChange={handleLocationInput}
                />
                <Button
                  onClick={handleClear}
                  style={{
                    maxWidth: "30px",
                    maxHeight: "30px",
                    minWidth: "30px",
                    minHeight: "30px",
                    top: "4px",
                  }}
                >
                  <ClearIcon />
                </Button>
              </div>
            </SelectLocationWrapper>
            <PickDateWrapper>
              <div>
                <div onClick={handleDatePicker} className="checkIndate">
                  <img src={calender} alt="" />
                  <div className="date-al date-al-margin">
                    <span>Check in</span>
                    <span>{checkInDate}</span>
                  </div>
                  {checkInDate !== "-- /-- /----" &&
                    <div className="arrows-margin">
                      <ArrowBackIosIcon style={{ cursor: "pointer" }} />
                      <ArrowForwardIosIcon style={{ cursor: "pointer" }} />
                    </div>
                  }
                </div>
                <span className="partitionLine"></span>
                <div onClick={handleClickedCheckOut} className="checkOutdate">
                  <div className="date-al date-al-margin">
                    <span>Check out</span>
                    <span>{checkOutDate}</span>
                  </div>
                  {checkInDate !== "-- /-- /----" && <div className="arrows-margin2">
                    <ArrowBackIosIcon style={{ cursor: "pointer" }} />
                    <ArrowForwardIosIcon style={{ cursor: "pointer" }} />
                  </div>}
                </div>
              </div>
            </PickDateWrapper>
            <SelectGuestsWrapper>
              <div>
                <div onClick={handleGuestSelector} className="guestsnumber">
                  <img src={addgroup} alt="" />
                  <div className="guest-al">
                    <span>{roomsNumber} Room</span>
                    <span>{guestNumber} Guests</span>
                  </div>
                </div>
                <button onClick={handleSearchButton}>Search</button>
              </div>
            </SelectGuestsWrapper>
          </SearchBarMainWrapper>
        </SearchBoxWrapper>
        {datePicker && (
          <Search
            left="25%"
            top="36rem"
            position="absolute"
            setCheckInDate={setCheckInDate}
            setCheckOutDate={setCheckOutDate}
          />
        )}
        {clickedCheckOut && (
          <Search
            left="25%"
            top="36rem"
            position="absolute"
            setCheckInDate={setCheckInDate}
            setCheckOutDate={setCheckOutDate}
          />
        )}
        {guestSelect && <GuestCard top="36rem" position="absolute" right="30rem" setGuestNumber={setGuestNumber} setRoomsNumber={setRoomsNumber} />}

        <BookingLogosWrapper>
          <div className="booking-sites-text">
            <h4>We compare multiple booking sites at once</h4>
          </div>
          <div className="booking-sites-logo">
            <div>
              <img
                className="partner_logo agodaLogo"
                src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos/395.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="partner_logo logo-width"
                src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos/452.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="partner_logo logo-width booking.comLogo"
                src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos/626.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="partner_logo"
                src="	https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos/2564.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="partner_logo "
                src="	https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos/14.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="partner_logo logo-width"
                src="https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos/634.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="partner_logo"
                src="	https://imgcy.trivago.com/image/upload/hardcodedimages/mpm-localised-logos/2452.png"
                alt=""
              />
            </div>
            <div className="More">+100 more</div>
          </div>
        </BookingLogosWrapper>
      </div>
    </SearchBarWrapper>
  );
}

export const SearchBarWrapper = styled.div`
  width: 100%;
  height: 300px;
  background-color: rgb(245, 245, 246);
  /* border: 1px solid black; */
  padding: 7rem 18%;
  .dottedBorder {
    border: 1px dotted black;
  }
  .search-bar-cont {
    display: grid;
    grid-template-columns: 1fr;
    width: 97rem;
  }
`;
export const BookingLogosWrapper = styled.div`
  display: grid;
  width: 100%;
  align-items: center;
  padding-top: 1rem;
  .booking-sites-text {
    h4{
      font-size: 14px;
    }
  }
  .booking-sites-logo {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
    padding-left: 3rem;
    padding-top: 1rem;

    .partner_logo {
      width: 60%;
      max-height: 25px;
    }
    .logo-width {
      height: 20px;
      width: 80%;
    }
    .booking.comLogo {
      height: 18px;
      position: relative;
      top: 5px;
    }
    .agodaLogo {
      width: 42%;
      max-height: 25px;
    }
    .More {
      font-size: 12px;
      justify-content: center;
      
      color: rgb(154, 161, 165);
      top: 3px;
    }
  }
`;
export const CategoryLinksWrapper = styled.div`
  display: flex;
  .afterClick {
    background-color: white;
  }
  & > div {
    min-width: 80px;
    max-width: auto;
    height: 40px;
    padding: 1rem;
    border-top-left-radius: 1.4rem;
    border-top-right-radius: 1.4rem;
    background-color: rgb(229, 242, 246);
    text-align: center;
    .afterClickAnchor {
      color: rgb(0, 127, 173);
      font-weight: bold;
    }
    span {
      text-decoration: none;
      font-size: 13px;
      letter-spacing: 1px;
      position: relative;
      cursor: pointer;
      /* ::after{
                color: rgb(0,127,173);
                font-weight: bold;
            } */
      :hover {
        color: rgb(0, 127, 173);
        text-decoration: underline;
      }
    }
  }
  .space-left {
    margin-left: 0.7rem;
  }
  .houseAPwidth {
    width: 135px;
  }
`;
export const SearchBoxWrapper = styled.div`
  border-radius: 0 12px 12px 12px;
  width: 100%;
  height: 6rem;

  box-shadow: 1px 1px 4px rgb(205 208 210);

  padding: 0rem 0.8rem;
  background-color: white;
`;
export const SearchBarMainWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;
export const SelectLocationWrapper = styled.div`
  width: 32%;
  display: flex;
  align-items: center;
  justify-content: start;
  border-right: 1px solid rgb(205, 208, 210);
  img {
    width: 18px;
    position: relative;
    top: 7px;
  }
  & > div {
    width: 100%;
    height: 4rem;
    input {
      width: 80%;
      outline: none;
      border: none;
      position: relative;
      top: 4px;
      font-size: 15px;
      ::placeholder {
        color: rgb(154, 161, 165);
      
      }
    }
    .verticleAlign {
      position: relative;
      top: 0.3rem;
    }
  }
`;
export const PickDateWrapper = styled.div`
  width: 40%;
  padding: 0rem 1rem;
  border-right: 1px solid rgb(205, 208, 210);

  & > div {
    width: 100%;
    display: flex;
    height: 100%;
    .checkIndate {
      width: 50%;
      display: flex;

      position: relative;

      align-items: center;
      padding-left: 1px;

      height: 4rem;
      top: 10px;
      :active {
        border: 1px dotted;
      }

      img {
        width: 18px;
      }
    }
    .date-al-margin {
      position: relative;
      left: 1rem;
      grid-gap: 0.2rem;
    }
    .partitionLine {
      width: 1px;
      height: 80%;
      background-color: rgb(205, 208, 210);
      margin-top: 6px;
    }
    .arrows-margin {
      position: relative;
      left: 2rem;
    }
    .arrows-margin2 {
      position: relative;
      left: 5rem;
    }
    .date-al {
      display: grid;

      & > span:nth-child(1) {
        font-size: 12px;
        font-weight: 100;
      }
      & > span:nth-child(2) {
        font-size: 12px;
        font-weight: 600;
      }
    }
    .checkOutdate {
      width: 50%;
      display: flex;
      align-items: center;
      position: relative;

      height: 4rem;
      top: 10px;
      :active {
        border: 1px dotted;
      }
    }
  }
`;
export const SelectGuestsWrapper = styled.div`
  width: 32%;
  /* padding: 1rem; */
  padding-left: 1rem;
  & > div {
    display: flex;
    align-items: center;
    height: 100%;
    img {
      width: 18px;
      height: 18px;
      position: relative;
      top: 4px;
    }
    .guestsnumber {
      display: flex;
      width: 50%;
      :active {
        border: 1px dotted;
      }
      .guest-al {
        display: grid;
        position: relative;
        left: 1rem;

        & > span:nth-child(1) {
          font-size: 11px;
        }
        & > span:nth-child(2) {
          font-size: 12px;
          font-weight: bold;
        }
      }
    }
    button {
    width: 60%;
    height:80%;
    padding: 1rem;
    background-color: #007fad;
    border: 1px solid #007fad;
    border-bottom-color: #005f81;
    border-radius: 4rem;
    color: white;
    outline: none;
    border: none;
    font-size: 16px;
    font-weight: 700;
      :hover {
        background-color: #005f81;
        cursor: pointer;
      }
    }
  }
`;
