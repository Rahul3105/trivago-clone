import { createContext, useState } from "react";
export const SearchDataContext = createContext();


export const SearchDataProvider = ({ children }) => {
    const [searchData, setSearchData] = useState("");
    const [guestsData, setGuestsData] = useState(2);
    const [roomsData, setRoomsData] = useState(1);
    const [days, setDays] = useState(1)
    const [firstDate, setFirstDate] = useState(null)
    const [secondDate, setSecondDate] = useState(null)
    const [filterData, setFilterData] = useState([])
    const handleGuestsData = (el) => {
        setGuestsData(el)
    }
    const handleSearchData = (par) => {
        setSearchData(par);
    }
    const handleRoomsData = (el) => {
        setRoomsData(el);
        console.log("hii from context")
    }
    const handleDays = (el) => {
        setDays(el)

        console.log("hii from context2")
    }
    const handleFirstDate = (el) => {
        setFirstDate(el)
    }
    const handleSecondDate = (el) => {
        setSecondDate(el)
    }
    const handleFilterData = (el) => {
        setFilterData(el)
    }
    return <SearchDataContext.Provider value={{ searchData, handleSearchData, handleGuestsData, guestsData, handleRoomsData, roomsData, handleDays, days, firstDate, secondDate, handleFirstDate, handleSecondDate, handleFilterData, filterData }}>{children}</SearchDataContext.Provider>
}

