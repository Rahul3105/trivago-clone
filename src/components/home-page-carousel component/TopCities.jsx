import { ModifiedCarousel } from './ModifiedCarousel';
import styled from 'styled-components';

const TopCities = () => {
    return <>
        <ModifiedCarousel>
             {cities.map((item) => {
                return <StyledCity>
                    <div className="imgCont">
                        <img src={item.img} alt="location-img" />
                    </div>
                    <h1>Hotels in {item.location}</h1>
                    <p>{item.noOfHotels} Hotels <strong className="strong-text">Avg.${ item.avgPrice }</strong></p>
                </StyledCity>
            })}
        </ModifiedCarousel>
    </>
}
export {TopCities}
export const StyledCity = styled.div`
  width: 270px;
  :hover{
      text-decoration:underline;
      cursor: pointer;
  }
  & > .imgCont > img {
    border-radius: 20px;
    width: 100%;
  }
  & .strong-text {
    color: #028000;
    word-spacing:10ch;
    :hover{
        cursor: pointer;
        text-decoration:underline;
    }
  }
  & > h1 {
    margin: 5px 0;
  }
  & > p {
    font-size: 14px;
  }
`;

const cities = [
  {
    location: "Delhi",
    noOfHotels: 1400,
    avgPrice: 3000,
    img: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,f_auto,h_258,q_auto,w_258/categoryimages/64/96/64967_v41.jpeg",
  },
  {
    location: "Mumbai",
    noOfHotels: 1400,
    avgPrice: 2500,
    img: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,f_auto,h_258,q_auto,w_258/categoryimages/64/98/64981_v33.jpeg",
  },
  {
    location: "Bengluru",
    noOfHotels: 1400,
    avgPrice: 2000,
    img: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,f_auto,h_258,q_auto,w_258/categoryimages/64/97/64975_v42.jpeg",
  },
  {
    location: "Dubai",
    noOfHotels: 6330,
    avgPrice: 2780,
    img: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,f_auto,h_258,q_auto,w_258/categoryimages/15/07/15075_v24.jpeg",
  },
  {
    location: "Jaipur",
    noOfHotels: 6330,
    avgPrice: 2300,
    img: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,f_auto,h_258,q_auto,w_258/categoryimages/64/98/64989_v42.jpeg",
  },
  {
    location: "Paris",
    noOfHotels: 46986,
    avgPrice: 16482,
    img: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,f_auto,h_258,q_auto,w_258/categoryimages/22/23/22235_v18.jpeg",
  },
];