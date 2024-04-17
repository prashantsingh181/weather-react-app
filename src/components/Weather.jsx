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
    getWeatherData(searchValue);
  }

  async function getWeatherData(searchValue) {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${process.env.REACT_APP_API_KEY}`
      );
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
        setError(null);
      } else {
        setError(response.statusText);
        setWeatherData(null);
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <h1 className="page-heading">Weather App</h1>
      <div className="weather-container">
        <div>
          <span className="info-text">
            Please enter city name to check the weather!
          </span>
        </div>
        <SearchBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          handleSubmit={handleSubmit}
        />
        {error && <span className="error-message">{error}</span>}
        <WeatherCard loading={loading} weatherData={weatherData} />
      </div>
    </>
  );
};

export default Weather;
