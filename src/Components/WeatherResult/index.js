import React, { Component, Fragment } from "react";

import "./index.css";

class WeatherResult extends Component {
  render() {
    console.log("result", this.props.result.data);
    let date =
      this.props.result.data !== undefined
        ? new Date(this.props.result.data.dt).toDateString()
        : "";
    let temp =
      this.props.result.data !== undefined
        ? (this.props.result.data.main.temp - 273.1).toFixed(1)
        : "";
    let maxTemp =
      this.props.result.data !== undefined
        ? (this.props.result.data.main.temp_max - 273.1).toFixed(1)
        : "";
    let minTemp =
      this.props.result.data !== undefined
        ? (this.props.result.data.main.temp_min - 273.1).toFixed(1)
        : "";
    return (
      <Fragment>
        <hr />
        <div>
          {this.props.result.data !== undefined && (
            <img
              alt="icon"
              src={`http://openweathermap.org/img/wn/${
                this.props.result.data.weather[0].icon
              }@2x.png`}
            />
          )}
          {this.props.result.data !== undefined && (
            <h5>
              {this.props.result.data.name},{" "}
              {this.props.result.data.sys.country}
            </h5>
          )}
          {this.props.result.data !== undefined && (
            <div>
              <span id="date">{date}</span>
            </div>
          )}
          {this.props.result.data !== undefined && (
            <span>{this.props.result.data.weather[0].description}</span>
          )}
          {this.props.result.data !== undefined && (
            <div>
              <span id="temp">{temp}°С</span>{" "}
              <span id="text">
                {`temperature from ${minTemp} to ${maxTemp}`}{" "}
              </span>
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

export default WeatherResult;
