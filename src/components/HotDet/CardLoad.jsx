import React, { useEffect, useState } from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import styled from "styled-components";

const CardLoad = () => {
  console.log("hi");
  return (
    <Cont>
      <Imag>
        <Skeleton variant="rect" animation="wave" width="100%" height="100%" />
      </Imag>
      <Mid>
        <div>
          <h2>
            <Skeleton animation="wave" width="30%" />
          </h2>
        </div>
        <Skeleton animation="wave" width="50%" />
        <button>
          <div>
            <p>
              <Skeleton animation="wave" width="400px" height="100%" />
            </p>
          </div>
        </button>
        <button>
          <div>
            <Skeleton animation="wave" width="400px" height="100%" />
          </div>
        </button>
      </Mid>
      <Last>
        <BigGrn>
          <p>
            <Skeleton animation="wave" width="100px" />
          </p>
          <div>
            <p>
              <Skeleton animation="wave" width="150px" />
            </p>
          </div>
          <div>
            <h2>
              <Skeleton animation="wave" width="100px" />
            </h2>
            <button>
              <Skeleton animation="wave" width="80px" />
            </button>
          </div>
        </BigGrn>
        <div>
          <div>
            <Skeleton
              variant="rect"
              width={"100%"}
              height={200}
              animation="wave"
            />
          </div>
          <div>
            <Skeleton
              variant="rect"
              width={"100%"}
              height={200}
              animation="wave"
            />
          </div>
        </div>
      </Last>
    </Cont>
  );
};

export default CardLoad;

const Cont = styled.div`
  display: flex;
  max-width: 1000px;
  min-height: 150px;
  max-height: 200px;
  border-radius: 20px;
  padding: 3px;
  margin: auto;
  border: 1px solid rgb(235, 236, 237);
  * {
    white-space: pre;
  }
  > div:nth-child(1) {
    flex: 1;
    img {
      width: 100%;
      height: 100%;
    }
  }
  > div:nth-child(2) {
    flex: 2;
  }
  > div:nth-child(3) {
    flex: 1.4;
  }
`;
const Imag = styled.div`
  > img {
    border-radius: 15px;
  }
`;
const Mid = styled.div`
  * {
    padding: 0;
    margin: 0;
    font-size: 14px;
  }

  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  h2 {
    font-size: 22px;
    font-weight: 700;
  }
  button {
    background-color: transparent;
    border: none;
    align-items: center;
    border-top: 1px solid rgb(235, 236, 237);
    padding: 20px 5px 0;
    display: flex;
    justify-content: space-between;
    > div {
      display: flex;
      flex-direction: row;
      * {
        padding: 2px;
        align-items: center;
      }
    }
    :hover {
      background-color: rgb(235, 236, 237);
    }
  }
`;
const Last = styled.div`
  * {
    padding: 0;
    margin: 0;
    font-size: 14px;
  }
  > div:nth-child(2) {
    display: flex;
    height: 35%;
    justify-content: space-evenly;
    > div {
      align-items: center;
      border: 1px solid rgb(235, 236, 237);
      border-radius: 10px;
      padding: 5px 10px;
      margin: 5px;
      width: 100%;
    }
    > div:hover {
      background-color: rgb(235, 236, 237);
    }

    > div:nth-child(1) {
      flex: 1.5;
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
    }
    > :nth-child(2) {
      flex: 2;
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
    }
  }
`;
const BigGrn = styled.div`
  width: 100%;
  height: 65%;
  padding: 5px;
  background-color: rgb(241, 248, 234);
  border-radius: 15px;
  > p {
    font-size: 14px;
    padding: 5px 10px;
  }
  div {
    display: flex;
    padding: 5px 10px;
    color: rgb(0, 95, 0);
  }
  div:nth-child(3) {
    justify-content: space-between;
    align-items: center;
    * {
      font-size: 20px;
    }
    button {
      background-color: rgb(2, 128, 0);
      border: none;
      height: 40px;
      color: white;
      padding: 2px 15px;
      font-size: 16px;
      font-weight: 600;
      border-radius: 20px;
      :hover {
        background-color: rgb(0, 95, 0);
      }
    }
  }
  :hover {
    border: 1px solid rgb(153, 204, 102);
  }
`;
