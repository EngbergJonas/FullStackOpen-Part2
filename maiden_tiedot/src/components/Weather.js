import React from "react";
const Weather = ({ result, countryResult }) => {
  if (countryResult.length === 1) {
    return (
      <div>
        <h1>
          <b>Weather in </b>
          {result.location.name}
        </h1>
        <p>
          <b>Temperature: </b>
          {result.current.temp_c} Celcius
        </p>
        <img src={result.current.condition.icon} alt="weatherPic" />
        <p>
          <b>Wind: </b>
          {result.current.wind_kph} kp and direction
          {result.current.wind_dir}
        </p>
      </div>
    );
  }
  return null;
};

export default Weather;
