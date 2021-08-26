import "./App default css/App.css";
import { useSelector } from "react-redux";
import { Routes } from "./components/Route component/Routes";
import Loading from "./components/material-ui-components/LoadingAnimation";
import { CheckoutPage } from "./components/Checkout-Page/CheckoutPage";
function App() {
  const login = useSelector((state) => state.login);
  return (
    <div>
      {/* {login.isLoading && <Loading />} */}
      {/* <Routes /> */}
      <CheckoutPage />
    </div>
  );
}
export default App;
