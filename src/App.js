import NavBar from "./components/navbar/NavBar";
import "./App default css/App.css";
import { useSelector } from "react-redux";
import { Routes } from "./components/Route component/Routes";

import HotCard from "./components/HotDet/HotCard";
import { LocationCard } from "./components/material-ui-components/LocationCard";
import { MoreFilterCard } from "./components/material-ui-components/MoreFilterCard";

<<<<<<< HEAD
import Loading from "./components/material-ui-components/LoadingAnimation";
=======
>>>>>>> 0a5729379015d1f36243903a042e141ee99e2c41
import { SearchBar } from "./components/Search-Bar/SearchBar";
import { FilterSearchBar } from "./components/FilterSearchBar/FilterSearchBar";
import BigHot from "./components/HotDet/BigHot";
import Loading from "./components/material-ui-components/LoadingAnimation";

function App() {
  const login = useSelector((state) => state.login);
  return (
    <div>
<<<<<<< HEAD
      {/* {login.isLoading && <Loading />} */}
      {/* <ImageSlideShow slides={ImageSliderData} /> */}
      {/* <MapComponent /> */}

      {/* <CheckoutPage /> */}
      {/* <LocationCard />
      <MoreFilterCard />
      <RatingCard /> */}

      {/* <FilterSearchBar /> */}

      {/* <FilterSearchBar />  */}
      <Routes />

      {/* <FilterSearchBar /> */}
=======
      {login.isLoading && <Loading />}
      <Routes />
>>>>>>> 0a5729379015d1f36243903a042e141ee99e2c41
    </div>
  );
}

export default App;
