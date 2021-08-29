import { Box, Button, Container, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import WifiSharpIcon from "@material-ui/icons/WifiSharp";
import AcUnitSharpIcon from "@material-ui/icons/AcUnitSharp";
import LiveTvSharpIcon from "@material-ui/icons/LiveTvSharp";
import PoolSharpIcon from "@material-ui/icons/PoolSharp";
import LocalParkingSharpIcon from "@material-ui/icons/LocalParkingSharp";
export const OverBelow = ({ x, r }) => {
  const rating = r;
  const reviews = x.reviewNum;
  return (
    <BelowBox>
      <Container className="container">
        <div className="box-len">
          <Box className="flex-box">
            <div className="rating-box">{rating}</div>
            <Typography variant="h3" className="review-data">
              <p className="condional-reviews">
                {500 < reviews && reviews < 1499
                  ? "Average"
                  : 1500 < reviews && reviews < 2500
                  ? "Good"
                  : reviews > 2501
                  ? "Very Good"
                  : "Excellent"}{" "}
              </p>
              <p>
                {`(${reviews} reviews)`}
                <Typography className="rating-index">
                  trivago Rating Index
                </Typography>
              </p>
            </Typography>
          </Box>
          <Button variant="outlined" className="guest-review-button">
            Read guest's reviews {`>`}
          </Button>
        </div>
        <hr className="line-len" />

        <div className="box-len">
          <Typography
            component="h2"
            variant="h3"
            className="amenities-heading"
          >{`Amenities & facilities`}</Typography>
          <Box className="icon-box">
            <div className="left-dis">
              <WifiSharpIcon fontSize="large" className="icons" />
              <div className="free">Free</div>
              <p className="logo-name">Wifi</p>
            </div>

            <div className="left-dis">
              <AcUnitSharpIcon fontSize="large" className="icons" />
              <p className="logo-name">A/C</p>
            </div>

            <div className="left-dis">
              <PoolSharpIcon fontSize="large" className="icons" />
              <p className="logo-name">Pool</p>
            </div>
            <div className="left-dis">
              <LiveTvSharpIcon fontSize="large" className="icons" />
              <p className="logo-name">TV</p>
            </div>

            <div className="left-dis">
              <LocalParkingSharpIcon fontSize="large" className="icons" />
              <p className="logo-name">Parking</p>
            </div>
          </Box>
          <Button variant="outlined" className="guest-review-button">
            Show all amenities {`>`}
          </Button>
        </div>

        <hr className="line-len" />
      </Container>
    </BelowBox>
  );
};

const BelowBox = styled.div`
  & .container {
    /* border: 1px solid red; */
  }

  & .flex-box {
    display: flex;
  }
  & .box-len {
    width: 100%;
  }
  & .rating-box {
    font-size: 24px;
    padding: 5px 0;
    font-weight: 700;
    background-color: rgb(0, 95, 0);
    color: white;
    text-align: center;
    border-radius: 20px;
    width: 7rem;
    height: 40px;
  }
  & .condional-reviews {
    padding: 0 4px;
    font-weight: 700;
  }
  & .review-data {
    display: flex;
    font-size: 18px;
    padding: 1%;
  }
  & .rating-index {
    font-size: 14px;
    padding: 4% 2%;
    margin-left: -40%;
  }
  & .guest-review-button {
    border: 1px solid black;
    font-size: 12px;
    font-weight: 700;
    float: right;
    padding: 1%;
    margin: 1%;
    height: 40px;
    :hover {
      background-color: #999;
      color: white;
      border: none;
    }
  }

  & .line-len {
    clear: both;
    width: 100%;
    margin: 10% -2%;
  }

  & .amenities-heading {
    font-size: 17px;
    padding: 0 1% 0% 3%;
    font-weight: 580;
    color: black;
  }
  & .icon-box {
    display: flex;
    padding: 3%;
    margin: 2%;
  }
  & .free {
    width: 3rem;
    font-size: 12px;
    height: 15px;
    padding: 0;
    margin: 0 0 0 0;
    font-weight: 700;
    background-color: #62a30f;
    color: white;
    text-align: center;
    border-radius: 10%;
  }
  & .icons {
    margin: 1%;
    width: 3rem;
  }
  & .logo-name {
    font-size: 14px;
    padding: 1%;
  }
  & .left-dis {
    margin: 1% 6%;
  }
`;
