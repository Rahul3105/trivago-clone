import styled from 'styled-components';
import  Carousel from 'react-elastic-carousel'

const StyledCarousel = styled(Carousel)`
    position: relative;
    /* border:1px solid lime; */
    & .rec-arrow {
        position: absolute;
        bottom: -5%;
        left:42%;
        background-color: white;
        box-shadow: none;
    }
    & .rec-arrow-right {

        left:53%
    }
`;
export const ModifiedCarousel = ({children}) => <StyledCarousel breakPoints={breakPoints}>{children }</StyledCarousel>;

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 4 }
];

