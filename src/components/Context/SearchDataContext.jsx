import { createContext, useState } from "react";
export const SearchDataContext = createContext();


export const SearchDataProvider = ({ children }) => {
    const [searchData, setSearchData] = useState("");

    const handleSearchData = (par) => {
        setSearchData(par);
    }
    return <SearchDataContext.Provider value={{ searchData, handleSearchData }}>{children}</SearchDataContext.Provider>
}

