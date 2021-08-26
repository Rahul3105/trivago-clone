import NavBar from '../navbar/NavBar';
import { HomeCarousel } from '../home-page-carousel component/HomeCarousel';
import { QNASection } from '../Home page/QNASection';
import Footer from '../footer/Footer';
import { MoreCitiesSection } from './MoreCitiesSection';
import MuiSlider from '../material-ui-components/MuiSlider'
export const Home = () => {
    return (
        <>
            <NavBar />
            {/* <MuiSlider/> */}
            <HomeCarousel />
            <QNASection />
            <MoreCitiesSection/>
            <Footer />
        </>
    )
}