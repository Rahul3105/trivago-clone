import { ModifiedCarousel } from "./ModifiedCarousel";
import styled from "styled-components";
import { StyledCity } from "./TopCities";
const TopDestinations = () => {
  return (
    <>
      <ModifiedCarousel>
        {destinations.map((item) => {
          return (
            <StyledCity>
              <div className="imgCont">
                <img src={item.img} alt="location-img" />
              </div>
              <h1>{item.location}</h1>
              <p>
                {item.noOfHotels} Hotels <strong>Avg.${item.avgPrice}</strong>
              </p>
            </StyledCity>
          );
        })}
      </ModifiedCarousel>
    </>
  );
};
export { TopDestinations };

const destinations = [
  {
    location: "goa",
    noOfHotels: 1400,
    avgPrice: 2000,
    img: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,f_auto,h_258,q_auto,w_258/categoryimages/64/93/64932_v75.jpeg",
  },
  {
    location: "kerala",
    noOfHotels: 1400,
    avgPrice: 2000,
    img: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,f_auto,h_258,q_auto,w_258/categoryimages/64/93/64939_v73.jpeg",
  },
  {
    location: "Pondicherry",
    noOfHotels: 1400,
    avgPrice: 2000,
    img: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,f_auto,h_258,q_auto,w_258/categoryimages/64/94/64948_v75.jpeg",
  },
  {
    location: "Dubai",
    noOfHotels: 1400,
    avgPrice: 2000,
    img: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,f_auto,h_258,q_auto,w_258/categoryimages/15/06/15068_v21.jpeg",
  },
  {
    location: "Delhi",
    noOfHotels: 1400,
    avgPrice: 2000,
    img: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,f_auto,h_258,q_auto,w_258/categoryimages/64/93/64931_v73.jpeg",
  },
  {
    location: "Rajesthan",
    noOfHotels: 1400,
    avgPrice: 2000,
    img: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,f_auto,h_258,q_auto,w_258/categoryimages/64/95/64950_v73.jpeg",
  },
];
