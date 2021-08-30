import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import StarIcon from "@material-ui/icons/Star";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { Redirect } from "react-router-dom";
//payment gateway stuff
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const CheckoutPage = () => {
  // payment gateway stuff
  const history = useHistory();
  const { data } = useSelector((state) => state.redirectData);
  const [payment, setPayment] = useState(1500);
  const [form, setForm] = useState({});
  const logoObj = {
    goibibo:
      "https://cdn.freelogovectors.net/wp-content/uploads/2019/02/goibibo-logo.png",
    agoda:
      "https://e7.pngegg.com/pngimages/542/120/png-clipart-logo-agoda-com-hotel-brand-travel-agent-hotel-emblem-text.png",
  };
  toast.configure();

  const [product, setProduct] = useState({
    name: form.name,
    price: payment,
    description: "Hotel booking",
  });

  async function handleToken(token, addresses) {
    const response = await axios
      .post("http://localhost:3002/payment", { token, product })
      .then(({ data }) => {
        if (data.token.id != "") {
          toast("Success! Check email for details", { type: "success" });
          setForm({});
          history.push("/");
        } else {
          toast("Something went wrong", { type: "error" });
        }
      })
      .catch((err) => {
        toast("Something went wrong", { type: "error" });
      });
  }

  return (
    <StyledCheckoutPage>
      <header>
        <AppBar position="static" className="navBar">
          <Toolbar>
            <img
              src={
                data.redirect === "GoIbibo" ? logoObj.goibibo : logoObj.agoda
              }
              alt="img"
            />
          </Toolbar>
        </AppBar>
      </header>

      <StyledDetailsForm>
        <header>
          <span>1</span>Enter your details
        </header>
        <h2>We will use these details to share your booking information</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <TextField label="Full Name" variant="outlined" />
          <TextField label="Email" variant="outlined" />
          <TextField label="Mobile no." variant="outlined" />
          <Button variant="contained" color="secondary">
            Proceed
          </Button>
          <StripeCheckout
            stripeKey="pk_test_51JTa73SBG37VySlEpREWj3nafDUedQKFoBVv9quV8pagoXvk0GSoz0VDwmUmGzJFukUlHgq8exfcWEpNhSwkR4Co00PDFIYJL1"
            token={handleToken}
            amount={payment * 100}
            name={form.name}
            currency="INR"
            allowRememberMe
            billingAddress
            shippingAddress
            email={form.email}
            // disabled={disabledtab}
          />
        </form>
      </StyledDetailsForm>

      <StyledOrderSummary>
        <div className="hotel-name">
          <div>
            <h1>{data.name}</h1>
            <div className="new">
              <StarIcon />
              {data.star}{" "}
            </div>
          </div>
          <img
            src="https://images.oyoroomscdn.com/uploads/hotel_image/37/thumb/c7702d8af149b9f8.jpg"
            alt="hotel-img"
          />
        </div>

        <div className="booking-date">
          <div>Thum 26 Aug-Fri, 27 Aug</div> |<div>1 Room, 2 Guests</div>
        </div>
        <div className="flex-space-btw">
          <h5>Room price for 1 Night X 2 Guests</h5>
          <p>${data.deals[0]}</p>
        </div>

        <div className="flex-space-btw">
          <h5>Price Drop</h5>
          <p>$241</p>
        </div>

        <div className="flex-space-btw">
          <h5>25% Coupon Discount</h5>
          <p>$413</p>
        </div>

        <hr />

        <div className="flex-space-btw">
          <h5>
            Payable Amount <br />
            inclusive of all taxes
          </h5>
          <p>$1322</p>
        </div>

        <div className="booked-tag">8 people booked this hotel today</div>
      </StyledOrderSummary>

      <RatingCont>
        <div>
          <div>
            5<StarIcon />
          </div>
          <StyledRatingBar color={"rgb(245,157,0)"} percentage={"80%"}>
            <div className="skills"></div>
          </StyledRatingBar>
        </div>

        <div>
          <div>
            4<StarIcon />
          </div>
          <StyledRatingBar color={"rgb(0,93,47)"} percentage={"20%"}>
            <div className="skills"></div>
          </StyledRatingBar>
        </div>

        <div>
          <div>
            3<StarIcon />
          </div>
          <StyledRatingBar color={"red"} percentage={"50%"}>
            <div className="skills"></div>
          </StyledRatingBar>
        </div>

        <div>
          <div>
            2<StarIcon />
          </div>
          <StyledRatingBar color={"blue"} percentage={"60%"}>
            <div className="skills"></div>
          </StyledRatingBar>
        </div>

        <div>
          <div>
            1<StarIcon />
          </div>
          <StyledRatingBar color={"lime"} percentage={"10%"}>
            <div className="skills"></div>
          </StyledRatingBar>
        </div>
      </RatingCont>
    </StyledCheckoutPage>
  );
};

const StyledOrderSummary = styled.div`
  width: 450px;
  max-width: 500px;
  border-radius: 4px;
  border: solid 1px rgba(122, 122, 122, 0.17);
  box-shadow: 0 2px 26px 0 rgb(125 125 125 / 10%);
  padding: 24px;
  box-sizing: border-box;
  position: absolute;
  top: 15%;
  right: 5%;

  & > .hotel-name {
    display: flex;
  }
  & > .hotel-name h1 {
    font-size: 14px;
    font-weight: bold;
    line-height: 1.5;
    margin-bottom: 8px;
  }
  & .new {
    border-radius: 2px;
    padding: 5px 6px;
    margin-top: 15px;
    background-color: #52b520;
    font-size: 12px;
    color: #fff;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .booking-date {
    display: flex;
    color: gray;
    font-size: 14px;
    margin: 20px 0;
    justify-content: space-between;
    height: 30px;
    border-bottom: 1px solid gainsboro;
  }
  & > hr {
    border: 0.2px solid gainsboro;
  }
  & > .flex-space-btw {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    font-size: 15px;
    color: rgb(105, 102, 102);
  }
  & .booked-tag {
    display: flex;
    padding: 10px;
    font-weight: 600;
    color: rgb(238, 46, 36);
    border: 0px;
    font-size: 14px;
    line-height: 1.5;
    -webkit-box-pack: center;
    justify-content: center;
    border-radius: 4px;
    background-color: rgba(239, 64, 35, 0.12);
    margin-top: 25px;
  }
`;

const StyledRatingBar = styled.div`
  box-sizing: border-box;
  width: 80%;
  margin: auto;
  background-color: #ddd;
  margin-bottom: 20px;
  border-radius: 20px;
  .skills {
    text-align: right;
    padding-bottom: 12px;
    width: ${({ percentage }) => percentage};
    background-color: ${({ color }) => color};
    border-radius: 20px;
  }
`;

const RatingCont = styled.div`
  width: 500px;
  margin-left: 30px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 10px 0;
  margin-top: 20px;
  border-radius: 5px;
  & > div {
    display: flex;
    width: 90%;
    margin: auto;
    font-size: 15px;
    letter-spacing: 5px;
    color: gray;
  }
`;

const StyledDetailsForm = styled.div`
  width: 648px;
  border-radius: 4px;
  margin-right: 24px;
  padding-bottom: 50px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-top: 30px;
  margin-left: 30px;
  & > header {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 14px 24px;
    color: rgb(0, 0, 0);
    background: rgb(249, 249, 251);
    font-size: 20px;
    font-weight: bold;
    line-height: 1.6;
  }
  & > header span {
    font-size: 12px;
    font-weight: bold;
    color: rgb(255, 255, 255);
    padding: 5px 7px;
    border-radius: 4px;
    margin-right: 12px;
    background: rgb(0, 0, 0);
  }
  & h2 {
    font-size: 14px;
    line-height: 1.7;
    margin: 24px 35px;
  }
  & > form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    width: 90%;
    margin: auto;
  }
  & label,
  & span,
  & input {
    font-size: 15px;
  }
`;
const StyledCheckoutPage = styled.div`
  & .navBar {
    background-color: white;
  }
  & header img {
    width: 100px;
  }
`;
