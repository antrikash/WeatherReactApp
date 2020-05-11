import React, { Component } from "react";
import AutoSuggestion from "./AutoSuggestion/AutoSuggestion";
import WeatherResult from "./WeatherResult";

import { getPlaceList, getWeatherInfo } from "./../api";

class Search extends Component {
  state = {
    searchInput: "",
    cityList: [],
    weatherInfo: {}
  };
  handleChange = e => {
    let value = e.target.value;
    this.setState({
      searchInput: value
    });
    let list = getPlaceList(value);
    this.setState({
      cityList: list.map(obj => obj)
    });
  };
  onOptionSelect = async detail => {
    let res = await getWeatherInfo(detail.city.id);
    console.log("PPP", res);
    this.setState({
      weatherInfo: res
    });
  };
  render() {
    return (
      <div className="container">
        <AutoSuggestion
          className="form-control"
          type="text"
          placeholder="Search Weather by City Name"
          value={this.state.searchInput}
          list={this.state.cityList}
          onChange={this.handleChange}
          onOptionSelect={this.onOptionSelect}
        />
        <WeatherResult result={this.state.weatherInfo} />
      </div>
    );
  }
}

export default Search;
