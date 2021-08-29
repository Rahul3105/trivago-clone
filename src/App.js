import NavBar from "./components/navbar/NavBar";
import "./App default css/App.css";
import { useSelector } from "react-redux";
import { Routes } from "./components/Route component/Routes";

import HotCard from "./components/HotDet/HotCard";

import Loading from "./components/material-ui-components/LoadingAnimation";

import { SearchBar } from './components/Search-Bar/SearchBar';
import { FilterSearchBar } from './components/FilterSearchBar/FilterSearchBar';
import BigHot from "./components/HotDet/BigHot";


function App() {
  const login = useSelector((state) => state.login);
  return (
    <div>

      {login.isLoading && <Loading />}
      {/* <HotCard /> */}
      <Routes />
      const login = useSelector((state) => state.login);
      return (
            <div>
                  <Routes />
            </div>
      );
}

export default App;
