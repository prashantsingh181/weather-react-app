import React, { useState } from "react";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";

const Weather = () => {
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    getWeatherData(searchValue)
  }

  async function getWeatherData(searchValue) {
    try {
      setLoading(true);
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${process.env.REACT_APP_API_KEY}`);
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
        setError(null);
      } else {
        setError(response.statusText);
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="weather-card">
      <div>
        <h2 className="card-heading">Weather App</h2>
        <span className="info-text">Please enter city name to check the weather!</span>
      </div>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} handleSubmit={handleSubmit} />
      {error && <span>{error}</span>}
      <WeatherCard loading={loading} weatherData={weatherData} />
    </div>
  );
};

export default Weather;
