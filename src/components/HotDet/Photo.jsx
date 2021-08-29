import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Skeleton from "@material-ui/lab/Skeleton";
import { ImageSlideShow } from "../Image SlideShow/ImageSlideShow";
const Photo = ({ hotImg }) => {
  const [load, setLoad] = useState(true);
  const l = hotImg.slice(0, 12);
  const [openModal, setOpenModal] = useState(false);
  const [currOpenModal, setCurrOpenModal] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, Math.random() * 3000);
  }, []);
  const handleOpenModal = (ind) => {
    setCurrOpenModal(ind);
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
    // setCurrOpenModal(0)
  };
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
    <>
      <Pics>
        {l.map((it, ind) => {
          return (
            <img
              src={it}
              alt=""
              onClick={() => handleOpenModal(ind)}
              key={ind}
            />
          );
        })}
      </Pics>
      <ImageSlideShow
        open={openModal}
        onClose={handleCloseModal}
        ImageSliderData={l}
        currPos={currOpenModal}
      />
    </>
  );
};

export default Photo;

const Pics = styled.div`
  width: 1000px;
  display: flex;
  margin: auto;
  background-color: white;
  padding-bottom: 15px;
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
