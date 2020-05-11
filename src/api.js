import list from "./data/city.json";
import axios from "axios";

export const getPlaceList = name => {
  let filterList = [];
  if (name) {
    filterList = list.data.filter(elem =>
      elem.city.name.toLowerCase().includes(name.toLowerCase())
    );
  }
  return filterList;
};

export const getWeatherInfo = async locationId => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?id=${locationId}&APPID=ff5d084541aac5b27ef0f46c449da8ca`
    );
    console.log("response", res.data);
    return { error: false, data: res.data };
  } catch (err) {
    console.log("response", err);
    return { error: true, data: [] };
  }
};
