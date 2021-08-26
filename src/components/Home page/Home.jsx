import NavBar from '../navbar/NavBar';
import { HomeCarousel } from '../home-page-carousel component/HomeCarousel';
import { QNASection } from '../Home page/QNASection';
import Footer from '../footer/Footer';
import { MoreCitiesSection } from './MoreCitiesSection';
import MuiSlider from '../material-ui-components/MuiSlider'
import { RecentlyHome } from '../Recently-activity/RecentlyHome';
export const Home = () => {
    return (
        <>
            <NavBar />
            {/* <MuiSlider/> */}
            <RecentlyHome/>
            <HomeCarousel />
            <QNASection />
            <MoreCitiesSection/>
            <Footer />
        </>
    )
}