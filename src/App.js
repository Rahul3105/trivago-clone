import NavBar from './components/navbar/NavBar';
import "./App default css/App.css";
import { useSelector } from "react-redux";
import { Routes } from "./components/Route component/Routes";
// import MuiCarousel from "./components/material-ui-components/MuiCarousel";
import HotCard from "./components/HotDet/HotCard";

import Loading from "./components/material-ui-components/LoadingAnimation";

function App() {
  const login = useSelector((state) => state.login);
  return (
    <div>

      {login.isLoading && <Loading />}
      <Routes />

      <NavBar />
      <HotCard />
      

    </div>
  );
}
export default App;
