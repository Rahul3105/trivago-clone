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
  return (
    <>
      {/* <h2>
        {userInfo?.firstName} {userInfo?.lastName} {userInfo?.name}
      </h2> */}
      <Select value="Name" className={classes.pad}>
        <MenuItem value="Name" style={{ alignItems: "center" }}>
          <img
            src={
              userInfo.iamgeUrl ||
              "https://image.flaticon.com/icons/png/128/725/725105.png"
            }
            alt=""
            style={{ width: "20px" }}
          />
          {userInfo?.firstName} {userInfo?.lastName} {userInfo?.name}
        </MenuItem>
        <MenuItem value="recently">Recentyly Viewed</MenuItem>
        <MenuItem value="overView">Booking Overview</MenuItem>
        <MenuItem value="settings">Account Setting</MenuItem>
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
      )}
    </>
  );
};
export { ShowProfile };
