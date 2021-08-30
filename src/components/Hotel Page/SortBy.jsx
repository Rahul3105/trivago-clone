import styled from 'styled-components';
import { sortHotelData } from '../../store/actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
const SortBy = () => {
    const [sort, setSort] = useState('recommendations');
    const handleSort = (e) => {
        const { value } = e.target;
        console.log(value);
    }
    return (
        <StyledSortBy>
            <label>
                <span>Sort by</span>
                <StyledOption onChange={handleSort}>
                    <option value="recommendations">Our recommendations</option>
                    <option value="Rating">Rating & Recommended</option>
                    <option value="Price">Price & Recommended</option>
                    <option value="Distance">Distance & Recommended</option>
                    <option value="Rating">Rating only</option>
                    <option value="Price">Price only</option>
                    <option value="Distance">Distance only</option>
                </StyledOption>
            </label>
        </StyledSortBy>
    )
};


const StyledSortBy = styled.div`
    padding: 20px 0;
    & > label {
       font-size: 15px;
    font-weight: 700;
    margin-left: 170px;
    position: relative;
    left: 10rem;
        
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