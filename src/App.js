import "./App default css/App.css";
import { Routes } from "./components/Route component/Routes";
import { Search } from "./components/Search-Bar/Search";
import { SearchBar } from "./components/Search-Bar/SearchBar";
function App() {
  return (
    <div>
      {/* <Search /> */}
      <Routes />
      <SearchBar />
    </div>
  );
}
export default App;
