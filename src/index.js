import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { PrimeReactProvider } from "primereact/api";
import swDev from "./swDev";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </Provider>
);
swDev();
