import React, { Component } from "react";
// import axios from "axios";

import WeatherResult from "./WeatherResult";

class Search extends Component {
  state = {
    searchInput: "",
    ouput: [
      { location: "Jammu", temp: Math.floor(Math.random() * Math.floor(40)) }
    ]
  };
  handleChange = e => {
    console.log(e.target.value);
    this.setState(
      {
        searchInput: e.target.value
      }
      // () =>
      //   axios.post(`API/${this.state.searchInput}`, {
      //     headers: {
      //       "Content-Type": "application/json"
      //     }
      //   })
    );
  };
  render() {
    return (
      <div className="container">
        <input
          className="form-control"
          type="text"
          placeholder="Search Location"
          value={this.state.searchInput}
          onChange={this.handleChange}
        />
        <br />
        <WeatherResult result={this.state.ouput} />
      </div>
    );
  }
}

export default Search;
