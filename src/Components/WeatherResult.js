import React, { Component, Fragment } from "react";

class WeatherResult extends Component {
  renderList = () => {
    return this.props.result.map((elem, index) => {
      console.log(elem, "ELEMENt");
      return (
        <table key={index}>
          <thead>
            <tr>Location</tr>
            <tr>Temp</tr>
          </thead>
          <tbody>
            <tr key={index}>
              <td>{elem.location}</td>
              <td>{elem.temp}</td>
            </tr>
          </tbody>
        </table>
      );
    });
  };
  render() {
    console.log(this.props.result, "ASDFG");
    return (
      <Fragment>
        <table>
          <thead>
            <tr>
              <th>Location</th>
              <th>Temp</th>
            </tr>
          </thead>
          <tbody>
            {this.props.result.length > 0 &&
              this.props.result.map((elem, item) => (
                <tr key={item}>
                  <td>{elem.location}</td>
                  <td>{elem.temp}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

export default WeatherResult;
