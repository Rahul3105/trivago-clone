import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Skeleton from "@material-ui/lab/Skeleton";

const Photo = ({ hotImg }) => {
  const [load, setLoad] = useState(true);
  //console.log(p.me);
  const l = hotImg.slice(0, 12);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, Math.random() * 3000);
  }, []);
  return load ? (
    <PicSkel>
      <Skeleton variant="rect" width={"23.5%"} height={200} animation="wave" />
      <Skeleton variant="rect" width={"23.5%"} height={200} animation="wave" />
      <Skeleton variant="rect" width={"23.5%"} height={200} animation="wave" />
      <Skeleton variant="rect" width={"23.5%"} height={200} animation="wave" />
      <Skeleton variant="rect" width={"23.5%"} height={200} animation="wave" />
      <Skeleton variant="rect" width={"23.5%"} height={200} animation="wave" />
      <Skeleton variant="rect" width={"23.5%"} height={200} animation="wave" />
      <Skeleton variant="rect" width={"23.5%"} height={200} animation="wave" />
    </PicSkel>
  ) : (
    <Pics>
      {l.map((it) => {
        return <img src={it} alt="" />;
      })}
    </Pics>
  );
};

export default Photo;

const Pics = styled.div`
  width: 1000px;
  display: flex;
  margin: auto;
  flex-wrap: wrap;
  img {
    width: 24%;
    height: auto;
    margin: 0.5%;
    border-radius: 10px;
  }
`;
const PicSkel = styled.div`
  width: 1000px;
  display: flex;
  margin: auto;
  flex-wrap: wrap;
  gap: 15px;
  * {
    border-radius: 15px;
  }
`;
