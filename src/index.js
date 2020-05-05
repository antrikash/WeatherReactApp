import React from "react";
import ReactDOM from "react-dom";

import WeatherForecast from "./Components/WeatherForecast";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <WeatherForecast />
  </React.StrictMode>,
  rootElement
);
