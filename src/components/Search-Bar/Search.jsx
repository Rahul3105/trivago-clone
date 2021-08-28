import { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import styled from 'styled-components'
import './Search.css'
export function Search({ setCheckOutDate, setCheckInDate, top, left, position }) {
    console.log(top)
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    }
    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate)
        // console.log(ranges.selection.startDate)

        setCheckInDate(ranges.selection.startDate.toString().slice(0, 15))
        setEndDate(ranges.selection.endDate)
        setCheckOutDate(ranges.selection.endDate.toString().slice(0, 15))
        // console.log(ranges.selection.endDate)
    }
    return <SearchWrapper top={top} position={position} left={left} >
        <DateRangePicker minDate={new Date()} ranges={[selectionRange]} onChange={handleSelect} />
    </SearchWrapper>
}
export const SearchWrapper = styled.div`
  left:  ${(props) => (props.left)};
  width: 46vw;
  background-color: white;
  position:  ${(props) => (props.position)};
  top:   ${(props) => (props.top)};
  box-shadow: 1px 7px 27px -3px black;
  animation: 0.8s AnimateRight 0s forwards;
  transform: translateX(-30%);
  font-size: 14px;


    z-index: 1;



`