import "./App default css/App.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import { Routes } from "./components/Route component/Routes";
import MuiCarousel from "./components/material-ui-components/MuiCarousel";
function App() {
  return (
    <div>
      <Routes />
      <NavBar />
      <Footer />

      <MuiCarousel />
    </div>
  );
}
export default App;
