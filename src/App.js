import "./App default css/App.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";

import { Routes } from "./components/Route component/Routes";
import { HomeCarousel } from "./components/home-page-carousel component/HomeCarousel";
function App() {
  return (
    <div>

      <NavBar />
      <Footer />
      <Routes />
    </div>
  );
}
export default App;
