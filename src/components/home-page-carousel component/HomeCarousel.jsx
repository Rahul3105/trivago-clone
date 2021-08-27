import MuiCarousel from '../material-ui-components/MuiCarousel';
import MuiTabs from '../material-ui-components/MuiTabs';

import styled from 'styled-components';


const HomeCarousel = () => {
    return (
        <StyleCarousel>
            <h2>These top destinations are just a click away</h2>
            <MuiTabs/>
            <MuiCarousel />
        </StyleCarousel>
    )
}
const StyleCarousel = styled.div`
    width:80%;
    margin:auto;
    & > h2 {
        color:#007fad;
        font-size:18px;
        margin-bottom: 15px;
    }
`
export {HomeCarousel}