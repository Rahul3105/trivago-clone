import NavBar from "./components/navbar/NavBar";
import "./App default css/App.css";
import { useSelector } from "react-redux";
import { Routes } from "./components/Route component/Routes";
// import MuiCarousel from "./components/material-ui-components/MuiCarousel";
import HotCard from "./components/HotDet/HotCard";
import { LocationCard } from "./components/material-ui-components/LocationCard";
import { MoreFilterCard } from "./components/material-ui-components/MoreFilterCard";

import Loading from "./components/material-ui-components/LoadingAnimation";
import { CheckoutPage } from "./components/Checkout-Page/CheckoutPage";
import { FilterSearchBar } from "./components/FilterSearchBar/FilterSearchBar";
import { SearchBar } from "./components/Search-Bar/SearchBar";
import { RatingCard } from "./components/material-ui-components/RatingCard";
function App() {
  const login = useSelector((state) => state.login);
  return (
    <div>
      {/* {login.isLoading && <Loading />} */}
      {/* <Routes /> */}
      {/* <CheckoutPage /> */}
      {/* <LocationCard />
      <MoreFilterCard />
      <RatingCard /> */}
      <SearchBar />

      <FilterSearchBar />


    </div>
  );
}

export default App;
