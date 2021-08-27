import "./App default css/App.css";
import { useSelector } from "react-redux";
import { Routes } from "./components/Route component/Routes";
// import MuiCarousel from "./components/material-ui-components/MuiCarousel";
import HotCard from "./components/HotDet/HotCard";
import CartLoad from "./components/HotDet/CardLoad";
import Loading from "./components/material-ui-components/LoadingAnimation";

function App() {
  const login = useSelector((state) => state.login);
  return (
    <div>
      <HotCard />
      {login.isLoading && <Loading />}
      <Routes />
      <CartLoad />
    </div>
  );
}
export default App;
