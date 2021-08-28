

import MuiTabs from '../material-ui-components/MuiTabs';

import styled from 'styled-components';

import { TopCities } from './TopCities';
import { TopDestinations } from './TopDestinations';


const HomeCarousel = () => {
    return (
        <StyleHomeCarouselComponent>
            <h2>These top destinations are just a click away</h2>
            <MuiTabs section={[<TopCities/>, <TopDestinations/>]} title={ ['Top Cities' , 'Top Destinations']}/>
        </StyleHomeCarouselComponent>
    )
}
const StyleHomeCarouselComponent = styled.div`
    width:80%;
    margin:auto;
    & > h2 {
        color:#007fad;
        font-size:18px;
        margin-bottom: 15px;
    }
`;
export { HomeCarousel }
