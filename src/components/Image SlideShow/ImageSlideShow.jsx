
import React, { useState } from 'react';
import { ImageSliderData } from './ImageSliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import styled from 'styled-components';
import { Modal } from '@material-ui/core';
const ImageSlideShow = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

    return (
      <Modal open={true}>
            <StyledSlider >
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            {ImageSliderData.map((slide, index) => {
                return (
                <div
                    className={index === current ? 'slide active' : 'slide'}
                    key={index}
                >
                    {index === current && (
                    <img src={slide.image} alt='travel image' className='image' />
                    )}
                </div>
                );
            })}
            </StyledSlider>
    </Modal>
  );

};

const StyledSlider = styled.div`
    position: relative;
    height: 100vh;
     display: flex;
    justify-content: center;
    align-items: center;
  .image {
    width: 1000px;
    height: 600px;
    border-radius: 10px;
  }
  
  .right-arrow {
    position: absolute;
    top: 50%;
    right: 32px;
    font-size: 3rem;
    color: #413939;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  }
  
  .left-arrow {
    position: absolute;
    top: 50%;
    left: 32px;
    font-size: 3rem;
    color: #463e3e;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  }
  
  .slide {
    opacity: 0;
    transition-duration: 1s ease;
  }
  
  .slide.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
  }

`;




export {ImageSlideShow};







