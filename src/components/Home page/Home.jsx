import NavBar from "../navbar/NavBar";
import { HomeCarousel } from "../home-page-carousel component/HomeCarousel";
import { QNASection } from "../Home page/QNASection";
import Footer from "../footer/Footer";
import { MoreCitiesSection } from "./MoreCitiesSection";
import { RecentlyHome } from "../Recently-activity/RecentlyHome";
import { SearchBar } from "../Search-Bar/SearchBar";
import { useSelector } from "react-redux";

//loading animation

import Loading from '../material-ui-components/LoadingAnimation'
export const Home = () => {
    const loginInfo = useSelector((state) => state.login);
    return (
        <>
            { loginInfo.isLoading && <Loading/> }
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
