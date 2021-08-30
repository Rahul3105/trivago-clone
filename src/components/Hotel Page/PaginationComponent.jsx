import { Box, CssBaseline, Container } from '@material-ui/core';
import Pagination from '@material-ui/lab/pagination';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { shallowEqual, useDispatch, useSelector } from "react-redux";


const PaginationComponent = ({ currPage, setCurrPage }) => {

    const { hotel } = useSelector((state) => state.activities, shallowEqual);
    const [pageNum, setPageNum] = useState(1);
    console.log(Math.floor(hotel.length / 10))
    useEffect(() => {
        setPageNum(currPage);
    }, [currPage])
    const handlePageChange = (value) => {
        setCurrPage(value);
    }
    return <div>
        <CssBaseline />
        <StyledContainer component={Box} py={3} >
            <Pagination
                count={Math.ceil(hotel.length / 10)}
                shape='rounded'
                defaultPage={pageNum}
                onChange={(event, value) => handlePageChange(value)}
            />
        </StyledContainer>
    </div>

}
const StyledContainer = styled(Container)`
    padding: 35px 0 !important;
    width: fit-content !important;
    & * {
        font-size:15px !important;
        font-weight:700 !important;
        color: gray !important;
    } 

`;
export { PaginationComponent };