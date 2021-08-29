import { Box, CssBaseline, Container } from '@material-ui/core';
import Pagination from '@material-ui/lab/pagination';
import { useEffect , useState} from 'react';
import styled from 'styled-components';
const PaginationComponent = ({ currPage, setCurrPage }) => {
    const [pageNum, setPageNum] = useState(1);
    useEffect(() => {
        setPageNum(currPage);
    },[currPage])
    const handlePageChange = (value) => {
        setCurrPage(value);
    }
    return <div>
        <CssBaseline />
        <StyledContainer  component={Box} py={3} >
            <Pagination
                count={4}
                shape='rounded'
                defaultPage={pageNum}
                onChange = {(event,value) => handlePageChange(value)}
            />
        </StyledContainer>
    </div>
    
}
const StyledContainer = styled(Container)`
    padding: 35px 0;
    width: fit-content;
    & * {
        font-size:15px;
        font-weight:700;
        color: gray;
    } 

`;
export { PaginationComponent };