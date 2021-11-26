import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { routes } from "./shared/constant";

import { ReactLocation, Router } from "react-location";

const location = new ReactLocation();

ReactDOM.render(
  <Router location={location} routes={routes}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
