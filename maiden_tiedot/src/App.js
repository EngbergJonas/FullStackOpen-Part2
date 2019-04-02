import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Countries from "./components/Countries";
import Weather from "./components/Weather";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [weather, setWeather] = useState([]);
  const [setFilter, setNewFilter] = useState("");

  //Api key should be hidden, working progress
  const apiKey = "0476777031464da0a01105155190204";

  const filterResult = countries.filter(country =>
    country.name.toLowerCase().includes(setFilter.toLowerCase())
  );

  //Country url (only ones)
  const countryHook = () => {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      setCountries(response.data);
    });
  };
  useEffect(countryHook, []);

  //Weatherurl (changing)
  const weatherHook = () => {
    axios.get(getCapital()).then(response => {
      setWeather(response.data);
    });
  };
  useEffect(weatherHook, [filterResult.length === 1]);

  //Get the capital of the country for weather data
  const getCapital = () => {
    if (filterResult.length === 1) {
      return filterResult.map(
        country =>
          `http://api.apixu.com/v1/current.json?key=${apiKey}&q=${
            country.capital
          }`
      );
    }
    return `http://api.apixu.com/v1/current.json?key=${apiKey}&q=Paris`;
  };

  const handleFilter = event => {
    setNewFilter(event.target.value);
  };

  return (
    <div>
      <h1>Maiden tiedot</h1>
      <Filter filter={setFilter} eventHandler={handleFilter} />
      <Countries result={filterResult} newResult={setNewFilter} />
      <Weather result={weather} countryResult={filterResult} />
    </div>
  );
};
export default App;
