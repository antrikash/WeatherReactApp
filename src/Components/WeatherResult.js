import React, { Component, Fragment } from "react";

class WeatherResult extends Component {
  render() {
    console.log(this.props.result.data, "RESULT");
    return (
      <Fragment>
        <table>
          <thead>
            <tr>
              <th>Location</th>
              <th>Date</th>
              <th>Temperature in 'C </th>
            </tr>
          </thead>
          <tbody>
            {this.props.result.data !== undefined && (
              <tr>
                <td>{this.props.result.data.name}</td>
                <td>{this.props.result.data.dt}</td>
                <td style={{ padding: "2px", margin: "2px" }}>
                  {this.props.result.data.main.temp - 273.15} `c
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

export default WeatherResult;
