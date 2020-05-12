import React, { Component, Fragment } from "react";

import "./index.css";

class WeatherResult extends Component {
  render() {
    let date =
      this.props.result.data !== undefined
        ? new Date(this.props.result.data.dt).toDateString()
        : "";
    let temp =
      this.props.result.data !== undefined
        ? (this.props.result.data.main.temp - 273.1).toFixed(1)
        : "";
    return (
      <Fragment>
        <table>
          <thead>
            <tr>
              <th>Location</th>
              <th>Date</th>
              <th>Temp in 'C </th>
            </tr>
          </thead>
          <tbody>
            {this.props.result.data !== undefined && (
              <tr>
                <td>{this.props.result.data.name}</td>
                <td>{date}</td>
                <td>{temp}`c</td>
              </tr>
            )}
          </tbody>
        </table>
        {this.props.result.data !== undefined && (
          <img
            alt="icon"
            src={`http://openweathermap.org/img/wn/${
              this.props.result.data.weather[0].icon
            }@2x.png`}
          />
        )}
      </Fragment>
    );
  }
}

export default WeatherResult;
