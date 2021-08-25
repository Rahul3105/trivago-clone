import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles({
  align: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoWidth: {
    width: "30px",
    height: "30px",
  },
  sel: {
    border: "1px solid white",
    width: "100%",
    borderRadius: "8px",
    height: "44px",
    padding: "10px 25px",
    outline: "none",
    margin: "20px auto",
    color: "white !important",
  },
  whiteText: {
    color: "white",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <Div>
      <MainFoot>
        <Grid container className={classes.align}>
          <Grid item xs={12} md={6}>
            <h2 className={classes.whiteText}>
              Want to receive exclusive hotel offers? Subscribe to our
              newsletter!
            </h2>
          </Grid>
          <Grid item container xs={12} md={6}>
            <Grid item xs={8} sm={10}>
              <Onput type="text" placeholder="Email adress" />
            </Grid>
            <Grid item xs={4} sm={2}>
              <Click>Subscribe</Click>
            </Grid>
          </Grid>
        </Grid>
        <Grid container className={classes.align}>
          <Grid item xs={12} md={9}>
            <h2 className={classes.whiteText}>
              trivago N.V., Kesselstraße 5 – 7, 40221 Düsseldorf, Germany
            </h2>
          </Grid>
          <Grid item xs={12} md={3}>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={"INDIA"}
              label="Country"
              className={classes.sel}
              style={{ fontSize: "14px", backgroundColor: "white" }}
            >
              <MenuItem value="INDIA">
                <em>INDIA</em>
              </MenuItem>
              <MenuItem value={"USA"}>USA</MenuItem>
              <MenuItem value={"GERMANY"}>GERMANY</MenuItem>
              <MenuItem value={"RUSSIA"}>RUSSIA</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Social>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              tabindex="-1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                class="svg-color--primary"
                fill="#fff"
                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm3 5.6h-1.5s-.6.3-.6.5v1.6H15c-.1 1.2-.3 2.3-.3 2.3h-1.9v6.8H10V12H8.7V9.7h1.4V7.8c0-.3-.1-2.6 2.9-2.6h2.1c-.1 1-.1 2.1-.1 2.4z"
              ></path>
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              tabindex="-1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                class="svg-color--primary"
                fill="#fff"
                d="M13 2C7.5 2 3 6.5 3 12s4.5 10 10 10 10-4.5 10-10S18.5 2 13 2zm5.6 7.9v.4c0 4.4-3.6 7.9-8 7.9-1.6 0-3-.5-4.3-1.2h.4c1.4 0 2.7-.5 3.8-1.3h-.2c-1.2 0-2.2-.8-2.6-1.9h.5c.3 0 .5 0 .8-.1-.5-.1-1-.3-1.4-.7-.5-.5-.9-1.2-.9-2v-.1c.4.2.8.3 1.3.3-.5-.3-.8-.7-1.1-1.1V9c0-.5.1-1 .4-1.4.3.3.6.7.9.9l.2.2c.6.5 1.3.9 2.1 1.2.1 0 .2.1.3.1.3.1.7.2 1 .3.1 0 .2 0 .3.1.3 0 .6.1 1 .1-.1-.2-.1-.5-.1-.7 0-.4.1-.8.2-1.1.1-.3.3-.6.5-.8.1-.1.2-.2.3-.2.3-.3.7-.5 1.1-.6.3-.1.5-.1.7-.1.8 0 1.5.4 2.1.9.1 0 .2-.1.4-.1.5-.1 1-.3 1.4-.6 0 .1 0 .2-.1.2-.2.6-.6 1-1.1 1.3v.1c.5-.1 1-.2 1.5-.5-.4.6-.9 1.1-1.4 1.6z"
              ></path>
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              tabindex="-1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <circle
                class="svg-color--primary"
                fill="#FFF"
                cx="12"
                cy="12"
                r="2.25"
              ></circle>
              <path
                class="svg-color--primary"
                fill="#FFF"
                d="M17.49 9.27c-.03-.65-.14-1.01-.23-1.25-.12-.31-.27-.54-.51-.77-.23-.24-.46-.39-.77-.51-.24-.09-.6-.2-1.25-.23-.72-.03-.93-.04-2.73-.04s-2.01.01-2.73.04c-.65.03-1.01.14-1.25.23-.31.12-.54.27-.77.51-.24.23-.39.46-.51.77-.09.24-.2.6-.23 1.25-.03.72-.04.93-.04 2.73s.01 2.01.04 2.73c.03.65.14 1.01.23 1.25.12.31.27.54.51.77.23.24.46.39.77.51.24.09.6.2 1.25.23.72.03.93.04 2.73.04s2.01-.01 2.73-.04c.65-.03 1.01-.14 1.25-.23.31-.12.54-.27.77-.51.24-.23.39-.46.51-.77.09-.24.2-.6.23-1.25.03-.72.04-.93.04-2.73s-.01-2.01-.04-2.73zM12 15.46c-1.91 0-3.46-1.55-3.46-3.46S10.09 8.54 12 8.54s3.46 1.55 3.46 3.46-1.55 3.46-3.46 3.46zm3.6-6.25c-.45 0-.81-.36-.81-.81 0-.45.36-.81.81-.81.45 0 .81.36.81.81 0 .45-.36.81-.81.81z"
              ></path>
              <path
                class="svg-color--primary"
                fill="#FFF"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.7 12.78c-.03.72-.14 1.21-.31 1.64-.17.44-.4.82-.78 1.19-.37.38-.75.61-1.19.78-.43.17-.92.28-1.64.31-.72.04-.95.05-2.78.05s-2.06-.01-2.78-.05c-.72-.03-1.21-.14-1.64-.31-.44-.17-.82-.4-1.19-.78-.38-.37-.61-.75-.78-1.19-.17-.43-.28-.92-.31-1.64-.04-.72-.05-.95-.05-2.78s.01-2.06.05-2.78c.03-.72.14-1.21.31-1.64.17-.44.4-.82.78-1.19.37-.38.75-.61 1.19-.78.43-.17.92-.28 1.64-.32.72-.03.95-.04 2.78-.04s2.06.01 2.78.04c.72.04 1.21.15 1.64.32.44.17.82.4 1.19.78.38.37.61.75.78 1.19.17.43.28.92.31 1.64.04.72.05.95.05 2.78s-.01 2.06-.05 2.78z"
              ></path>
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              tabindex="-1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                class="svg-color--primary"
                fill="#fff"
                d="M10 9l5 3-5 3V9zm12 3c0 5.5-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2s10 4.5 10 10zm-3-2.6S19 7 16.6 7H7.4S5 7 5 9.4v5.2S5 17 7.4 17h9.2s2.4 0 2.4-2.4V9.4z"
              ></path>
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              tabindex="-1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                class="svg-color--primary"
                fill="#fff"
                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM8.7 17.4H6.2V9.7h2.6v7.7zM7.4 8.7C6.6 8.7 6 8.1 6 7.3 6 6.6 6.6 6 7.5 6s1.4.6 1.4 1.3c0 .8-.6 1.4-1.5 1.4zM18 17.4h-2.6v-4.1c0-1-.4-1.7-1.3-1.7-.7 0-1.1.5-1.3.9-.1.2-.1.4-.1.6v4.3h-2.6V9.7h2.6v1.1c.3-.5 1-1.3 2.3-1.3 1.7 0 3 1.1 3 3.5v4.4z"
              ></path>
            </svg>
          </div>
        </Social>
        <Grid container>
          <Grid item sm={12} md={4}>
            <Bot1>
              <p>Company</p>
              <p>Jobs</p>
              <p>Press</p>
              <p>Investor Relation</p>
            </Bot1>
          </Grid>
          <Grid item sm={12} md={4}>
            <Bot1>
              <p>Mobile apps - searching on the go</p>
              <p>trivago Business Studio</p>
            </Bot1>
          </Grid>
          <Grid item sm={12} md={4}>
            <Bot1>
              <p>Help</p>
              <p>Learn how trivago works</p>
              <p>Terms and Conditions</p>
              <p>Legal Information</p>
              <p>Privacy Notice</p>
              <p>Site Map</p>
            </Bot1>
          </Grid>
        </Grid>
        <BotLogo>
          <img src="images/trivago.svg" alt="" width="130px" />
          <p>Copyright 2021 trivago | All rights reserved.</p>
        </BotLogo>
      </MainFoot>
    </Div>
  );
};

export default Footer;

const Div = styled.div`
  background-color: #0a1121;
`;
const Social = styled.div`
  display: flex;
  left: 0;
  * {
    width: 35px;
    height: 35px;
    margin: 15px 5px;
  }
`;
const MainFoot = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 30px;
  color: white !important;
`;
const Onput = styled.input`
  width: 95%;
  height: 44px;
  border-radius: 8px;
  outline: none;
  padding: 10px;
  margin: 30px auto;
`;

const Click = styled.button`
  width: 98%;
  background-color: #697379;
  border-radius: 8px;
  height: 44px;
  margin: 30px auto;
  border: none;
  :hover {
    background-color: transparent;
  }
`;
const Bot1 = styled.div`
  padding: 25px;
  margin: auto;
  color: white !important;
  * {
    padding: 5px;
    font-size: 12px;
    color: white !important;
  }
  *:hover {
    text-decoration: underline;
  }
`;
const BotLogo = styled.div`
  text-align: center;
  color: white !important;
  p {
    padding: 10px 0 25px;
  }
`;
