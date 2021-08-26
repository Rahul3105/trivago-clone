import "./App default css/App.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import { Routes } from "./components/Route component/Routes";
// import MuiCarousel from "./components/material-ui-components/MuiCarousel";
import HotCard from "./components/HotDet/HotCard";
function App() {
  return (
    <div>
      <Routes />
      <NavBar />
      <HotCard />
      <Footer />
    </div>
  );
}
export default App;
