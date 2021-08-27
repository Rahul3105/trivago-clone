import NavBar from './components/navbar/NavBar';
import "./App default css/App.css";
import { useSelector } from "react-redux";
import { Routes } from "./components/Route component/Routes";
import Loading from "./components/material-ui-components/LoadingAnimation";
function App() {
  const login = useSelector((state) => state.login);
  return (
    <div>

      {login.isLoading && <Loading />}
      <Routes />

    </div>
  );
}
export default App;
