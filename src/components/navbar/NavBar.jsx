import React, { useState } from "react";
import { useTheme } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import styled from "styled-components";
import KingBedOutlinedIcon from "@material-ui/icons/KingBedOutlined";
import DirectionsCarOutlinedIcon from "@material-ui/icons/DirectionsCarOutlined";
import FlightIcon from "@material-ui/icons/Flight";
import BusinessCenterOutlinedIcon from "@material-ui/icons/BusinessCenterOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import Drawer from "@material-ui/core/Drawer";
import NavigateNextOutlinedIcon from "@material-ui/icons/NavigateNextOutlined";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import { getLocalStorage } from "../../utils/LocalStorage";

import { useHistory, useParams } from "react-router-dom";

import { useSelector } from "react-redux";

import { ShowProfile } from "./ShowProfile";

const useStyles = makeStyles({
  pad: {
    borderBottom: "none",
    fontSize: "1.6rem",
    padding: "2px 5px",
    hover: {
      borderBottom: "none",
    },
    "&:before": {
      borderBottom: "none",
    },
    "&:after": {
      borderBottom: "none",
    },
  },
  drawMe: {
    width: "100%",
  },
  logoWidth: {
    width: "30px",
    height: "30px",
  },
});

const NavBar = () => {
  const [draw, setDraw] = useState(false);
  const theme = useTheme();
  const history = useHistory();

  //Conditional rendering based on screen sizes
  const mob = useMediaQuery(theme.breakpoints.down(700));
  const pad = useMediaQuery(theme.breakpoints.up(700));
  const med = useMediaQuery(theme.breakpoints.up(880));
  const tri = useMediaQuery(theme.breakpoints.up(980));
  const big = useMediaQuery(theme.breakpoints.up(1280));
  ///////

  const loginInfo = useSelector((state) => state.login);
  const classes = useStyles();

  //Get user details from loacl storage
  const userInfo = getLocalStorage("currLoggedIn");

  //this function is to redirect to auth component for login and signup purpose
  const handleAuth = () => {
    history.push("/auth/login");
  };
  return (
    <>
      <Top>
        {/* {history.location.pathname !== "/" && big && (
          <img src="images/trivago.svg" alt="" width="135px" />
        )} */}
        {!big && <img src="images/trivago.svg" alt="" width="135px" />}
        {med && (
          <First>
            {loginInfo.isAuth && (
              <img src="images/trivago.svg" alt="" width="120px" />
            )}
            <button
              className="firstBtns"
              style={{
                flexDirection: big ? "row" : "column",
                marginLeft: tri ? "15em" : "0",
                cursor: "pointer",
              }}
            >
              <KingBedOutlinedIcon className={classes.logoWidth} />
              Stays
            </button>
            <button
              className="firstBtns"
              style={{
                flexDirection: big ? "row" : "column",
                cursor: "pointer",
              }}
            >
              <LocationOnOutlinedIcon className={classes.logoWidth} />
              Weekend
            </button>
            <button
              className="firstBtns"
              style={{
                flexDirection: big ? "row" : "column",
                cursor: "pointer",
              }}
            >
              <DirectionsCarOutlinedIcon className={classes.logoWidth} />
              Cars
            </button>
            <button
              className="firstBtns"
              style={{
                flexDirection: big ? "row" : "column",
                cursor: "pointer",
              }}
            >
              <FlightIcon className={classes.logoWidth} />
              Flight
            </button>
            <button
              className="firstBtns"
              style={{
                flexDirection: big ? "row" : "column",
                cursor: "pointer",
              }}
            >
              <BusinessCenterOutlinedIcon className={classes.logoWidth} />
              Packages
            </button>
          </First>
        )}
        {loginInfo.isAuth ? (
          <Log>
            <ShowProfile />
          </Log>
        ) : (
          <Log>
            <button onClick={handleAuth}>
              <PersonOutlineOutlinedIcon className={classes.logoWidth} />
              {!mob ? "Log-In" : ""}
            </button>
            {!med ? (
              <>
                <button onClick={() => setDraw(true)}>
                  <MenuOutlinedIcon className={classes.logoWidth} />
                  {!mob ? "Menu" : ""}
                </button>
                <Drawer
                  anchor={"right"}
                  open={draw}
                  onClose={() => setDraw(false)}
                >
                  <div style={{ width: "98vw" }}>
                    <TopMenu>
                      <button onClick={() => setDraw(false)}>
                        <ArrowBackOutlinedIcon className={classes.logoWidth} />
                      </button>
                      <h2>Menu</h2>
                    </TopMenu>
                    <One>
                      <p>Recently Viewed</p>
                      <NavigateNextOutlinedIcon className={classes.logoWidth} />
                    </One>
                    <One>
                      <p>Booking Overview</p>
                      <NavigateNextOutlinedIcon className={classes.logoWidth} />
                    </One>
                    <One>
                      <p>Log-In</p>
                      <NavigateNextOutlinedIcon className={classes.logoWidth} />
                    </One>
                    <One>
                      <h2>Settings</h2>
                    </One>
                    <One>
                      <p>Country</p>
                      <div>
                        <p>INDIA</p>
                        <NavigateNextOutlinedIcon
                          className={classes.logoWidth}
                        />
                      </div>
                    </One>
                    <One>
                      <p>Currency</p>
                      <Select
                        className={classes.pad}
                        fontSize={"24px"}
                        value="INR"
                      >
                        <MenuItem value="AED">AED - Emirati Dirham</MenuItem>
                        <MenuItem value="ARS">ARS - Argentine Peso</MenuItem>
                        <MenuItem value="AUD">AUD - Australian Dollar</MenuItem>
                        <MenuItem value="AZN">AZN - Azerbaijani Manat</MenuItem>
                        <MenuItem value="BGN">BGN - Bulgarian Lev</MenuItem>
                        <MenuItem value="BHD">BHD - Bahraini Dinar</MenuItem>
                        <MenuItem value="BRL">BRL - Brazilian Real</MenuItem>
                        <MenuItem value="CAD">CAD - Canadian Dollar</MenuItem>
                        <MenuItem value="CHF">CHF - Swiss Franc</MenuItem>
                        <MenuItem value="CLP">CLP - Chilean Peso</MenuItem>
                        <MenuItem value="CNY">CNY - Chinese Yuan</MenuItem>
                        <MenuItem value="COP">COP - Colombian Peso</MenuItem>
                        <MenuItem value="CZK">CZK - Czech Koruna</MenuItem>
                        <MenuItem value="DKK">DKK - Danish Krone</MenuItem>
                        <MenuItem value="DZD">DZD - Algerian Dinar</MenuItem>
                        <MenuItem value="EGP">EGP - Egyptian Pound</MenuItem>
                        <MenuItem value="EUR">EUR - Euro</MenuItem>
                        <MenuItem value="GBP">GBP - British Pound</MenuItem>
                        <MenuItem value="HKD">HKD - Hong Kong Dollar</MenuItem>
                        <MenuItem value="HRK">HRK - Croatian Kuna</MenuItem>
                        <MenuItem value="HUF">HUF - Hungarian Forint</MenuItem>
                        <MenuItem value="IDR">IDR - Indonesian Rupiah</MenuItem>
                        <MenuItem value="ILS">
                          ILS - Israeli New Shekel
                        </MenuItem>
                        <MenuItem value="INR">INR - Indian Rupee</MenuItem>
                        <MenuItem value="JOD">JOD - Jordanian Dinar</MenuItem>
                        <MenuItem value="JPY">JPY - Japanese Yen</MenuItem>
                        <MenuItem value="KRW">KRW - S. Korean Won</MenuItem>
                        <MenuItem value="KWD">KWD - Kuwaiti Dinar</MenuItem>
                        <MenuItem value="KZT">KZT - Kazakhstani Tenge</MenuItem>
                        <MenuItem value="LBP">LBP - Lebanese Pound</MenuItem>
                        <MenuItem value="MAD">MAD - Morocco Dirhams</MenuItem>
                        <MenuItem value="MDL">MDL - Moldovan Leu</MenuItem>
                        <MenuItem value="MXN">MXN - Mexican Peso</MenuItem>
                        <MenuItem value="MYR">MYR - Malaysian Ringgit</MenuItem>
                        <MenuItem value="NGN">NGN - Nigerian Naira</MenuItem>
                        <MenuItem value="NOK">NOK - Norwegian Krone</MenuItem>
                        <MenuItem value="NZD">
                          NZD - New Zealand Dollar
                        </MenuItem>
                        <MenuItem value="OMR">OMR - Omani Rial</MenuItem>
                        <MenuItem value="PEN">
                          PEN - Peruvian Nuevo Sol
                        </MenuItem>
                        <MenuItem value="PHP">PHP - Philippine Peso</MenuItem>
                        <MenuItem value="PLN">PLN - Polish Zloty</MenuItem>
                        <MenuItem value="QAR">QAR - Qatari Riyal</MenuItem>
                        <MenuItem value="RON">RON - Romanian Leu</MenuItem>
                        <MenuItem value="RSD">RSD - Serbian Dinar</MenuItem>
                        <MenuItem value="RUB">RUB - Russian Ruble</MenuItem>
                        <MenuItem value="SAR">SAR - Saudi Riyal</MenuItem>
                        <MenuItem value="SEK">SEK - Swedish Krona</MenuItem>
                        <MenuItem value="SGD">
                          SGD - Singaporean Dollar
                        </MenuItem>
                        <MenuItem value="THB">THB - Thai Baht</MenuItem>
                        <MenuItem value="TND">TND - Tunisian Dinar</MenuItem>
                        <MenuItem value="TRY">TRY - Turkish Lira</MenuItem>
                        <MenuItem value="TWD">TWD - New Taiwan Dollar</MenuItem>
                        <MenuItem value="UAH">UAH - Ukrainian Hryvnia</MenuItem>
                        <MenuItem value="USD">USD - US Dollar</MenuItem>
                        <MenuItem value="UYU">UYU - Uruguayan Peso</MenuItem>
                        <MenuItem value="VND">VND - Vietnamese Dong</MenuItem>
                        <MenuItem value="ZAR">
                          ZAR - South African Rand
                        </MenuItem>
                      </Select>
                    </One>
                  </div>
                </Drawer>
              </>
            ) : (
              <Select className={classes.pad} value={0}>
                <MenuItem value={0}>Menu</MenuItem>
                <MenuItem value={1}>Recentyly Viewed</MenuItem>
                <MenuItem value={2}>Booking Overview</MenuItem>
              </Select>
            )}
            {big && (
              <>
                <Select className={classes.pad} fontSize={"24px"} value="INR">
                  <MenuItem value="AED">AED - Emirati Dirham</MenuItem>
                  <MenuItem value="ARS">ARS - Argentine Peso</MenuItem>
                  <MenuItem value="AUD">AUD - Australian Dollar</MenuItem>
                  <MenuItem value="AZN">AZN - Azerbaijani Manat</MenuItem>
                  <MenuItem value="BGN">BGN - Bulgarian Lev</MenuItem>
                  <MenuItem value="BHD">BHD - Bahraini Dinar</MenuItem>
                  <MenuItem value="BRL">BRL - Brazilian Real</MenuItem>
                  <MenuItem value="CAD">CAD - Canadian Dollar</MenuItem>
                  <MenuItem value="CHF">CHF - Swiss Franc</MenuItem>
                  <MenuItem value="CLP">CLP - Chilean Peso</MenuItem>
                  <MenuItem value="CNY">CNY - Chinese Yuan</MenuItem>
                  <MenuItem value="COP">COP - Colombian Peso</MenuItem>
                  <MenuItem value="CZK">CZK - Czech Koruna</MenuItem>
                  <MenuItem value="DKK">DKK - Danish Krone</MenuItem>
                  <MenuItem value="DZD">DZD - Algerian Dinar</MenuItem>
                  <MenuItem value="EGP">EGP - Egyptian Pound</MenuItem>
                  <MenuItem value="EUR">EUR - Euro</MenuItem>
                  <MenuItem value="GBP">GBP - British Pound</MenuItem>
                  <MenuItem value="HKD">HKD - Hong Kong Dollar</MenuItem>
                  <MenuItem value="HRK">HRK - Croatian Kuna</MenuItem>
                  <MenuItem value="HUF">HUF - Hungarian Forint</MenuItem>
                  <MenuItem value="IDR">IDR - Indonesian Rupiah</MenuItem>
                  <MenuItem value="ILS">ILS - Israeli New Shekel</MenuItem>
                  <MenuItem value="INR">INR - Indian Rupee</MenuItem>
                  <MenuItem value="JOD">JOD - Jordanian Dinar</MenuItem>
                  <MenuItem value="JPY">JPY - Japanese Yen</MenuItem>
                  <MenuItem value="KRW">KRW - S. Korean Won</MenuItem>
                  <MenuItem value="KWD">KWD - Kuwaiti Dinar</MenuItem>
                  <MenuItem value="KZT">KZT - Kazakhstani Tenge</MenuItem>
                  <MenuItem value="LBP">LBP - Lebanese Pound</MenuItem>
                  <MenuItem value="MAD">MAD - Morocco Dirhams</MenuItem>
                  <MenuItem value="MDL">MDL - Moldovan Leu</MenuItem>
                  <MenuItem value="MXN">MXN - Mexican Peso</MenuItem>
                  <MenuItem value="MYR">MYR - Malaysian Ringgit</MenuItem>
                  <MenuItem value="NGN">NGN - Nigerian Naira</MenuItem>
                  <MenuItem value="NOK">NOK - Norwegian Krone</MenuItem>
                  <MenuItem value="NZD">NZD - New Zealand Dollar</MenuItem>
                  <MenuItem value="OMR">OMR - Omani Rial</MenuItem>
                  <MenuItem value="PEN">PEN - Peruvian Nuevo Sol</MenuItem>
                  <MenuItem value="PHP">PHP - Philippine Peso</MenuItem>
                  <MenuItem value="PLN">PLN - Polish Zloty</MenuItem>
                  <MenuItem value="QAR">QAR - Qatari Riyal</MenuItem>
                  <MenuItem value="RON">RON - Romanian Leu</MenuItem>
                  <MenuItem value="RSD">RSD - Serbian Dinar</MenuItem>
                  <MenuItem value="RUB">RUB - Russian Ruble</MenuItem>
                  <MenuItem value="SAR">SAR - Saudi Riyal</MenuItem>
                  <MenuItem value="SEK">SEK - Swedish Krona</MenuItem>
                  <MenuItem value="SGD">SGD - Singaporean Dollar</MenuItem>
                  <MenuItem value="THB">THB - Thai Baht</MenuItem>
                  <MenuItem value="TND">TND - Tunisian Dinar</MenuItem>
                  <MenuItem value="TRY">TRY - Turkish Lira</MenuItem>
                  <MenuItem value="TWD">TWD - New Taiwan Dollar</MenuItem>
                  <MenuItem value="UAH">UAH - Ukrainian Hryvnia</MenuItem>
                  <MenuItem value="USD">USD - US Dollar</MenuItem>
                  <MenuItem value="UYU">UYU - Uruguayan Peso</MenuItem>
                  <MenuItem value="VND">VND - Vietnamese Dong</MenuItem>
                  <MenuItem value="ZAR">ZAR - South African Rand</MenuItem>
                </Select>
              </>
            )}
          </Log>
        )}
      </Top>
      {!med && (
        <Second>
          <button>Stays</button>
          <button>Weekend</button>
          <button>Cars</button>
          <button>Flight</button>
          <button>Packages</button>
        </Second>
      )}
      {history.location.pathname === "/" && (
        <Content>
          {!loginInfo.isAuth && tri && (
            <img src="images/trivago.svg" alt="" width="250px" />
          )}
          <div>
            {!loginInfo.isAuth ? (
              <h1>
                Deals from your favourite booking sites. All in one place.
              </h1>
            ) : (
              <h1>
                Good Day, {userInfo?.firstName} {userInfo?.lastName}
                {userInfo?.name}
              </h1>
            )}
            <p>
              Try searching for a city, a specific hotel, or even a landmark!
            </p>
          </div>
        </Content>
      )}
    </>
  );
};

export default NavBar;

const Content = styled.div`
  display: flex;
  width: 900px;
  margin: 25px auto;
  font-size: 2rem;
  height: 9rem;
  justify-content: center;
  align-items: center;
  /* position: relative; */

  div {
    padding-left: 2vw;
    border-left: 1px solid #ebeced;
    margin-left: 16px;
    display: grid;
    padding-top: 2rem;
    padding-bottom: 2rem;
    height: 8rem;
  }
  img {
    border: none;
    border: none;
    width: 180px;
    height: 58px;
  }
  h1 {
    font-size: 2.5rem;
  }
  div > p {
    flex: 0 1 100%;
    font-size: 1.7rem;
    font-weight: 400;
    display: block;
    margin-top: 8px;
  }
`;
const Second = styled.div`
  width: 100%;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  display: flex;
  button {
    padding: 15px 15px;
    background-color: transparent;
    border: none;
  }
  button::selection {
    background: #b3d4fc;
    text-shadow: none;
  }
  > button:nth-child(1) {
    color: rgb(0, 124, 194);
    font-weight: 600;
    border-bottom: 3px solid rgb(0, 124, 194);
  }
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(235, 236, 237);
  > img {
    padding: 15px !important;
  }
`;
const First = styled.div`
  align-items: center;
  display: flex;
  button {
    display: flex;
    padding: 10px 15px;
    background-color: transparent;
    border: none;
    align-items: center;
    text-align: center;
    :hover {
      background-color: rgb(245, 245, 246);
    }
  }
  button > * {
    padding: 2px 4px;
  }
  > button:nth-child(1) {
    color: rgb(0, 124, 194);
    font-weight: 600;
    border-bottom: 3px solid rgb(0, 124, 194);
  }
  > img {
    padding: 15px !important;
  }
`;
const Log = styled.div`
  position: absolute;
  right: 2vw;
  align-items: center;
  display: flex;
  button {
    padding: 0 10px;
    align-items: center;
    display: flex;
    text-align: center;
    background-color: transparent;
    border: none;
  }
  button > * {
    padding: 2px 4px;
  }
`;
const One = styled.div`
  width: 100%;
  padding: 5px 3vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(235, 236, 237);
`;
const TopMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  button {
    padding: 10px 15px;
    background-color: transparent;
    border: none;
  }
`;
