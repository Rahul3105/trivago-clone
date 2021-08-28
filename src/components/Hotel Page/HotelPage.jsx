import NavBar from '../navbar/NavBar';
import  BigHot from '../HotDet/BigHot';
import { FilterSearchBar } from "../FilterSearchBar/FilterSearchBar";
import Footer from '../footer/Footer';


const HotelPage = () => {

    return (
        <>
            <NavBar />
            <FilterSearchBar />
            <BigHot />
            <Footer />
        </>
    )

}

export { HotelPage };