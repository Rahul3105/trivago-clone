import styled from 'styled-components';
const SortBy = () => {
    return (
        <StyledSortBy>
            <label>
                <span>Sort by</span>
                <StyledOption>
                    
                    <option value="1">Our recommendations</option>
                    <option value="2">Rating & Recommended</option>
                    <option value="3">Price & Recommended</option>
                    <option value="4">Distance & Recommended</option>
                    <option value="5">Rating only</option>
                    <option value="6">Price only</option>
                    <option value="7">Distance only</option>
                
                </StyledOption>
            </label>
        </StyledSortBy>
    )
}


const StyledSortBy = styled.div`
    padding: 20px 0;
    & > label {
        font-size: 15px;
        font-weight:700;
        margin-left:170px;
        
    }
    & > label > span {
            margin-right:10px;
    }
`;


const StyledOption = styled.select`
    background-position: right 10px top 50%;
    background-color: #fff;
    font-size: 12px;
    width: auto;
    height: 36px;
    padding-right: 24px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    border-radius: 8px;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
    padding-left:10px;
`;


export { SortBy };