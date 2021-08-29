import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from './store/Store';
import { SearchDataProvider } from '../src/components/Context/SearchDataContext'
ReactDOM.render(
  <Provider store={store}>
    <SearchDataProvider>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </SearchDataProvider>
  </Provider>,
  document.getElementById("root")
);
