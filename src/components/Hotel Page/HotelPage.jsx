import NavBar from '../navbar/NavBar';
import BigHot from '../HotDet/BigHot';
import { FilterSearchBar } from "../FilterSearchBar/FilterSearchBar";
import Footer from '../footer/Footer';
import { PaginationComponent } from './PaginationComponent'
import { useState } from 'react';
import { SortBy } from './SortBy'
const HotelPage = () => {
    const [currPage, setCurrPage] = useState(1);
    const handlePageChange = (val) => {
        setCurrPage(val)
    }
    return (
        <>
            <NavBar />
            <FilterSearchBar />
            <div style={{ backgroundColor: 'rgb(235,236,237)' }}>
                <SortBy />
                <BigHot currPage={currPage} />
                <PaginationComponent currPage={currPage} setCurrPage={handlePageChange} />
            </div>
            <Footer />
        </>
    )

}


export { HotelPage };