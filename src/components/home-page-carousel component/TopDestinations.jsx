import { ModifiedCarousel } from './ModifiedCarousel';
import styled from 'styled-components';

const TopDestinations = () => {
    return <>
        <ModifiedCarousel>
             {destinations.map((item) => {
                return <StyledCity>
                    <div className="imgCont">
                        <img src={item.img} alt="location-img" />
                    </div>
                    <h1>Hotels in {item.location}</h1>
                    <p>{item.noOfHotels} Hotels <strong>Avg.${ item.avgPrice }</strong></p>
                </StyledCity>
            })}
        </ModifiedCarousel>
    </>
}
export { TopDestinations  };
const StyledCity = styled.div`
    & > .imgCont > img {
        border-radius: 20px; 
    }
    & > h1 {
        margin: 5px 0;
    }
    & > p {
        font-size: 14px;
    }
`;

const destinations = [
    {
        location: 'Delhi',
        noOfHotels: 1400,
        avgPrice: 2000,
        img: 'https://imgcy.trivago.com/c_fill,d_dummy.jpeg,f_auto,h_258,q_auto,w_258/categoryimages/64/98/64981_v33.jpeg'
    },
    {
        location: 'Mumbai',
        noOfHotels: 1400,
        avgPrice: 2000,
        img: 'https://imgcy.trivago.com/c_fill,d_dummy.jpeg,f_auto,h_258,q_auto,w_258/categoryimages/64/98/64981_v33.jpeg'
    },
    {
        location: 'Delhi',
        noOfHotels: 1400,
        avgPrice: 2000,
        img: 'https://imgcy.trivago.com/c_fill,d_dummy.jpeg,f_auto,h_258,q_auto,w_258/categoryimages/64/98/64981_v33.jpeg'
    },
    {
        location: 'Delhi',
        noOfHotels: 1400,
        avgPrice: 2000,
        img: 'https://imgcy.trivago.com/c_fill,d_dummy.jpeg,f_auto,h_258,q_auto,w_258/categoryimages/64/98/64981_v33.jpeg'
    },
];