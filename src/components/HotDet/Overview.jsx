import React, { useEffect, useState } from "react";
import { OverBelow } from "./OverBelow";
import styled from "styled-components";
import Deal from "./Deal";
import Map from "../Map/StaticMap";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core";

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

const hotImg = [
  "https://tse4.mm.bing.net/th?id=OIP.XA-4n_CHeMA-qteo0KWyiAHaGO&pid=Api&P=0&w=215&h=182",
  "https://tse2.mm.bing.net/th?id=OIP.8PsnrR9xKfvTQhHztUdEBQHaFc&pid=Api&P=0&w=207&h=1530",
  "https://tse2.mm.bing.net/th?id=OIP.uqbFoCqk2k_VOjUdTVXbBwHaE8&pid=Api&P=0&w=228&h=153",
  "https://tse4.mm.bing.net/th?id=OIP.jDVX474QtM5qBBJxCKO2jQHaFC&pid=Api&P=0&w=251&h=172",
];

const Overview = ({ x, r }) => {
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
      <Imag>
        <img src={x.img[0]} alt="" />
        <img src={x.img[1]} alt="" />
        <img src={x.img[2]} alt="" />
        <div style={{ background: `url(${x.img[3]})` }}>
          <button>More Photos > </button>
        </div>
      </Imag>
      <Man>
        <Deal x={x} />
        <Buht>Show All Deals > </Buht>
      </Man>
      <Over>
        <OverBelow x={x} r={r} />
        <h1>
          <Map w={400} h={380} lat={x.map[0]} long={x.map[1]} />
        </h1>
      </Over>
    </div>
  );
};

export default Overview;

const Over = styled.div`
  max-width: 1000px;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  > div:nth-child(1) {
    flex: 1.6;
  }
  > h1 {
    flex: 1;
  }
`;
const Imag = styled.div`
  max-width: 960px;
  margin: 10px auto 30px;
  display: flex;
  gap: 0.25%;
  > img {
    width: 24.5%;
    height: auto;
    border-radius: 12px;
  }
  > div {
    width: 24.5%;
    height: auto;
    border-radius: 12px;
    align-items: center;
    text-align: center;
    opacity: 0.6;
    cursor: pointer;
    > button {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      opacity: 1;
      background: white;
      border: 1px solid grey;
      font-size: 18px;
      border-radius: 8px;
      padding: 8px 12px;
      transition: 300ms ease-in;
    }
    > button:hover {
      color: white;
      background: grey;
      transition: 200ms ease-out;
    }
  }
`;
const Man = styled.div`
  max-width: 950px;
  margin: 35px auto;
`;
const Buht = styled.button`
  background: white;
  border: 1px solid grey;
  font-size: 14px;
  font-weight: 600;
  border-radius: 5px;
  padding: 12px;
  margin-left: 85%;
  transition: 300ms ease-in;
  :hover {
    color: white;
    background: grey;
    transition: 200ms ease-out;
  }
`;
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
