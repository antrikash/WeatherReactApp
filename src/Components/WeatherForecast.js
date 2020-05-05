import React, { Component } from "react";

import Search from "./Search";

class WeatherForecast extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center" style={{ color: "orange" }}>
          Weather Forecast
        </h1>
        <Search />
      </div>
    );
  }
}

export default WeatherForecast;
