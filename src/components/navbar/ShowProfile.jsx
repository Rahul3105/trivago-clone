import { GoogleLogout } from "react-google-login";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core";
import { getLocalStorage } from "../../utils/LocalStorage";
import { logoutUser } from "../../store/login/actions";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  pad: {
    borderBottom: "none",
    fontSize: "1.6rem",
    padding: "2px 5px",
    alignItems: "center",

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
  none: {
    border: "none",
    backgroundColor: "transparent",
  },
  font: {
    fontSize: "13px",
  },
});

const ShowProfile = () => {
  const theme = useTheme();
  const big = useMediaQuery(theme.breakpoints.up(1280));
  const userInfo = getLocalStorage("currLoggedIn");
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutUser());
  };
  const classes = useStyles();
  // console.log(userInfo.imageUrl);
  return (
    <>
      {/* <h2>
        {userInfo?.firstName} {userInfo?.lastName} {userInfo?.name}
      </h2> */}
      <Select value="Name" className={classes.pad}>
        <MenuItem value="Name" style={{ alignItems: "center" }}>
          <img
            src={
              "https://image.flaticon.com/icons/png/128/725/725105.png" ||
              userInfo.imageUrl
            }
            alt=""
            style={{ width: "20px" }}
            className={classes.font}
          />
          {userInfo?.firstName} {userInfo?.lastName} {userInfo?.name}
        </MenuItem>
        <MenuItem value="recently" className={classes.font}>
          Recentyly Viewed
        </MenuItem>
        <MenuItem value="overView" className={classes.font}>
          Booking Overview
        </MenuItem>
        <MenuItem value="settings" className={classes.font}>
          Account Setting
        </MenuItem>
        <MenuItem value="out">
          <button
            onClick={() => dispatch(logoutUser())}
            className={classes.none}
          >
            Log out
          </button>
        </MenuItem>
      </Select>
      {/* {userInfo.googleAuth ? (
        <GoogleLogout
          clientId={process.env?.REACT_APP_GOOGLE_API_KEY}
          buttonText="Logout"
          onLogoutSuccess={logout}
        ></GoogleLogout>
      ) : (
        <button onClick={() => dispatch(logoutUser())}>Log out</button>
      )} */}
      {big && (
        <Select className={classes.pad} fontSize={"24px"} value="INR">
          <MenuItem className={classes.font} value="AED">
            AED - Emirati Dirham
          </MenuItem>
          <MenuItem className={classes.font} value="ARS">
            ARS - Argentine Peso
          </MenuItem>
          <MenuItem className={classes.font} value="AUD">
            AUD - Australian Dollar
          </MenuItem>
          <MenuItem className={classes.font} value="AZN">
            AZN - Azerbaijani Manat
          </MenuItem>
          <MenuItem className={classes.font} value="BGN">
            BGN - Bulgarian Lev
          </MenuItem>
          <MenuItem className={classes.font} value="BHD">
            BHD - Bahraini Dinar
          </MenuItem>
          <MenuItem className={classes.font} value="BRL">
            BRL - Brazilian Real
          </MenuItem>
          <MenuItem className={classes.font} value="CAD">
            CAD - Canadian Dollar
          </MenuItem>
          <MenuItem className={classes.font} value="CHF">
            CHF - Swiss Franc
          </MenuItem>
          <MenuItem className={classes.font} value="CLP">
            CLP - Chilean Peso
          </MenuItem>
          <MenuItem className={classes.font} value="CNY">
            CNY - Chinese Yuan
          </MenuItem>
          <MenuItem className={classes.font} value="COP">
            COP - Colombian Peso
          </MenuItem>
          <MenuItem className={classes.font} value="CZK">
            CZK - Czech Koruna
          </MenuItem>
          <MenuItem className={classes.font} value="DKK">
            DKK - Danish Krone
          </MenuItem>
          <MenuItem className={classes.font} value="DZD">
            DZD - Algerian Dinar
          </MenuItem>
          <MenuItem className={classes.font} value="EGP">
            EGP - Egyptian Pound
          </MenuItem>
          <MenuItem className={classes.font} value="EUR">
            EUR - Euro
          </MenuItem>
          <MenuItem className={classes.font} value="GBP">
            GBP - British Pound
          </MenuItem>
          <MenuItem className={classes.font} value="HKD">
            HKD - Hong Kong Dollar
          </MenuItem>
          <MenuItem className={classes.font} value="HRK">
            HRK - Croatian Kuna
          </MenuItem>
          <MenuItem className={classes.font} value="HUF">
            HUF - Hungarian Forint
          </MenuItem>
          <MenuItem className={classes.font} value="IDR">
            IDR - Indonesian Rupiah
          </MenuItem>
          <MenuItem className={classes.font} value="ILS">
            ILS - Israeli New Shekel
          </MenuItem>
          <MenuItem className={classes.font} value="INR">
            INR - Indian Rupee
          </MenuItem>
          <MenuItem className={classes.font} value="JOD">
            JOD - Jordanian Dinar
          </MenuItem>
          <MenuItem className={classes.font} value="JPY">
            JPY - Japanese Yen
          </MenuItem>
          <MenuItem className={classes.font} value="KRW">
            KRW - S. Korean Won
          </MenuItem>
          <MenuItem className={classes.font} value="KWD">
            KWD - Kuwaiti Dinar
          </MenuItem>
          <MenuItem className={classes.font} value="KZT">
            KZT - Kazakhstani Tenge
          </MenuItem>
          <MenuItem className={classes.font} value="LBP">
            LBP - Lebanese Pound
          </MenuItem>
          <MenuItem className={classes.font} value="MAD">
            MAD - Morocco Dirhams
          </MenuItem>
          <MenuItem className={classes.font} value="MDL">
            MDL - Moldovan Leu
          </MenuItem>
          <MenuItem className={classes.font} value="MXN">
            MXN - Mexican Peso
          </MenuItem>
          <MenuItem className={classes.font} value="MYR">
            MYR - Malaysian Ringgit
          </MenuItem>
          <MenuItem className={classes.font} value="NGN">
            NGN - Nigerian Naira
          </MenuItem>
          <MenuItem className={classes.font} value="NOK">
            NOK - Norwegian Krone
          </MenuItem>
          <MenuItem className={classes.font} value="NZD">
            NZD - New Zealand Dollar
          </MenuItem>
          <MenuItem className={classes.font} value="OMR">
            OMR - Omani Rial
          </MenuItem>
          <MenuItem className={classes.font} value="PEN">
            PEN - Peruvian Nuevo Sol
          </MenuItem>
          <MenuItem className={classes.font} value="PHP">
            PHP - Philippine Peso
          </MenuItem>
          <MenuItem className={classes.font} value="PLN">
            PLN - Polish Zloty
          </MenuItem>
          <MenuItem className={classes.font} value="QAR">
            QAR - Qatari Riyal
          </MenuItem>
          <MenuItem className={classes.font} value="RON">
            RON - Romanian Leu
          </MenuItem>
          <MenuItem className={classes.font} value="RSD">
            RSD - Serbian Dinar
          </MenuItem>
          <MenuItem className={classes.font} value="RUB">
            RUB - Russian Ruble
          </MenuItem>
          <MenuItem className={classes.font} value="SAR">
            SAR - Saudi Riyal
          </MenuItem>
          <MenuItem className={classes.font} value="SEK">
            SEK - Swedish Krona
          </MenuItem>
          <MenuItem className={classes.font} value="SGD">
            SGD - Singaporean Dollar
          </MenuItem>
          <MenuItem className={classes.font} value="THB">
            THB - Thai Baht
          </MenuItem>
          <MenuItem className={classes.font} value="TND">
            TND - Tunisian Dinar
          </MenuItem>
          <MenuItem className={classes.font} value="TRY">
            TRY - Turkish Lira
          </MenuItem>
          <MenuItem className={classes.font} value="TWD">
            TWD - New Taiwan Dollar
          </MenuItem>
          <MenuItem className={classes.font} value="UAH">
            UAH - Ukrainian Hryvnia
          </MenuItem>
          <MenuItem className={classes.font} value="USD">
            USD - US Dollar
          </MenuItem>
          <MenuItem className={classes.font} value="UYU">
            UYU - Uruguayan Peso
          </MenuItem>
          <MenuItem className={classes.font} value="VND">
            VND - Vietnamese Dong
          </MenuItem>
          <MenuItem className={classes.font} value="ZAR">
            ZAR - South African Rand
          </MenuItem>
        </Select>
      )}
    </>
  );
};
export { ShowProfile };
