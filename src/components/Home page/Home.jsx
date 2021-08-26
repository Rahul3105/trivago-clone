import NavBar from '../navbar/NavBar';
import { HomeCarousel } from '../home-page-carousel component/HomeCarousel';
import { QNASection } from '../Home page/QNASection';
import Footer from '../footer/Footer';
import { MoreCitiesSection } from './MoreCitiesSection';
import { RecentlyHome } from '../Recently-activity/RecentlyHome';
import { SearchBar } from '../Search-Bar/SearchBar'
export const Home = () => {
    return (
        <>
            <NavBar />
            <SearchBar />
            <RecentlyHome/>
            <HomeCarousel />
            <QNASection />
            <MoreCitiesSection/>
            <Footer />
        </>
    )
}