import React, { useState } from "react";
import SearchBar from "./SearchBar";
const Weather = () => {
  const [searchValue, setSearchValue] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    getWeatherData(searchValue)
  }

  async function getWeatherData(searchValue) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${process.env.REACT_APP_API_KEY}`);
    const data = await response.json();
    setWeatherData(data);
  }
  return (
    <div className="weather-card">
      <h2 className="card-heading">Weather App</h2>
      <span className="info-text">Please enter city name to check the weather!</span>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} handleSubmit={handleSubmit} />
      {weatherData && <div>
        <div>{`${weatherData.name}/${weatherData.sys.country}`}</div>
      </div>}
    </div>
  );
};

export default Weather;
