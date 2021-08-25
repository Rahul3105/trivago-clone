import { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './Search.css'
export function Search({ setCheckOutDate, setCheckInDate }) {
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
    return <div className="search">
        <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
    </div>
}