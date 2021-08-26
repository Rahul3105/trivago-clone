import "./App default css/App.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";

import { Routes } from "./components/Route component/Routes";

import { SearchBar } from "./components/Search-Bar/SearchBar";
function App() {
  return (
    <div>

      <NavBar />
      <Footer />
      <Routes />
      <SearchBar />
    </div>
  );
}
export default App;
