import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {Store} from "./store/store";
// import { Store } from "./store/slices/auth";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={Store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
