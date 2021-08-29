import React, { useEffect, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core";
import Slider from "@material-ui/core/Slider";
import styled from "styled-components";
import Skeleton from "@material-ui/lab/Skeleton";

const PrettoSlider = withStyles({
  root: {
    alignItems: "center",
    padding: "12px 0",
  },
  thumb: {
    height: 8,
    width: 24,
    backgroundColor: "transparent",
    marginTop: 8,
    marginLeft: 12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
    color: "rgb(2,128,0)",
  },
  rail: {
    height: 8,
    borderRadius: 4,
    color: "#b7d7f7",
  },
})(Slider);
const useStyle = makeStyles({
  logoWidth: {
    width: "20px",
    height: "20px",
  },
  colo: {
    maxWidth: "1000px",
    margin: "auto",
    backgroundColor: "white",
    paddingBottom: "15px",
  },
});
const ReviewMain = ({ x, r }) => {
  const [load, setLoad] = useState(true);
  const cls = useStyle();
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, Math.random() * 3000);
  }, []);
  return load ? (
    <div className={cls.colo}>
      <Tag>
        <Skeleton animation="wave" width="30%" />
        <Review>
          <div>
            <h1>
              <Skeleton animation="wave" width="30%" />
            </h1>
            <p>
              <Skeleton animation="wave" />
            </p>
          </div>
          <div>
            <div>
              <p>
                <Skeleton animation="wave" width="30%" />
              </p>
              <p>
                <Skeleton animation="wave" width="50%" />
              </p>
              <p>
                <Skeleton animation="wave" width="30%" />
              </p>
              <p>
                <Skeleton animation="wave" width="40%" />
              </p>
              <p>
                <Skeleton animation="wave" width="60%" />{" "}
              </p>
            </div>
            <div>
              <p>
                <Skeleton animation="wave" width="100%" />
              </p>
              <p>
                <Skeleton animation="wave" width="100%" />
              </p>
              <p>
                <Skeleton animation="wave" width="100%" />
              </p>
              <p>
                <Skeleton animation="wave" width="100%" />
              </p>
              <p>
                <Skeleton animation="wave" width="100%" />
              </p>
            </div>
            <div>
              <p>
                <Skeleton animation="wave" width="100%" />
              </p>
              <p>
                <Skeleton animation="wave" width="100%" />
              </p>
              <p>
                <Skeleton animation="wave" width="100%" />
              </p>
              <p>
                <Skeleton animation="wave" width="100%" />
              </p>
              <p>
                <Skeleton animation="wave" width="100%" />
              </p>
            </div>
          </div>
        </Review>
      </Tag>
    </div>
  ) : (
    <div className={cls.colo}>
      <Tag>Rating Overview</Tag>
      <Review>
        <div>
          <h2>{r}</h2>
          <p>
            <b>trivago Rating Index</b> based on Top <b>100</b> reviews across
            the web
          </p>
        </div>
        <div>
          <div>
            <p>Location</p>
            <p>Rooms</p>
            <p>Services</p>
            <p>Facilities</p>
            <p>Value for Money</p>
          </div>
          <div>
            <PrettoSlider disabled defaultValue={x.review.location * 10} />
            <PrettoSlider disabled defaultValue={x.review.room * 10} />
            <PrettoSlider disabled defaultValue={x.review.services * 10} />
            <PrettoSlider disabled defaultValue={x.review.facilities * 10} />
            <PrettoSlider disabled defaultValue={x.review.vom * 10} />
          </div>
          <div>
            <p>
              {x.review.location > 8.5 ? "Excellent" : "Good"} (
              {x.review.location}/10)
            </p>
            <p>
              {x.review.room > 8.5 ? "Excellent" : "Good"} ({x.review.room}
              /10)
            </p>
            <p>
              {x.review.services > 8.5 ? "Excellent" : "Good"} (
              {x.review.services}/10)
            </p>
            <p>
              {x.review.facilities > 8.5 ? "Excellent" : "Good"} (
              {x.review.facilities}/10)
            </p>
            <p>
              {x.review.vom > 8.5 ? "Excellent" : "Good"} ({x.review.vom}
              /10)
            </p>
          </div>
        </div>
      </Review>
    </div>
  );
};

export default ReviewMain;

const Review = styled.div`
  width: 980px;
  margin: 10px;
  display: flex;
  padding: 20px;
  border: 1px solid rgb(205, 208, 210);
  border-radius: 15px;
  > :nth-child(1) {
    flex: 1;
    h2 {
      background-color: rgb(0, 95, 0);
      color: white;
      width: 60px;
      font-size: 26px;
      text-align: center;
      padding: 2px 5px;
      border-radius: 20px;
      margin-bottom: 15px;
    }
    p {
      font-size: 13px;
      :hover {
        text-decoration: underline;
      }
    }
  }
  > :nth-child(2) {
    flex: 2;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    > :nth-child(1) {
      flex: 1.2;
      border-left: 1px solid rgb(205, 208, 210);
      padding-left: 10px;
    }
    > :nth-child(3) {
      flex: 1;
      text-align: end;
    }
    > :nth-child(2) {
      width: 50px;
      flex: 1.8;
    }
    p {
      font-size: 14px;
      padding: 6px;
    }
  }
`;
const Tag = styled.h2`
  padding: 20px 15px 10px;
  font-size: 18px;
  font-weight: 600;
`;
