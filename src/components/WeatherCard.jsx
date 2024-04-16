import React from 'react';
import { FaLocationDot } from "react-icons/fa6";

const WeatherCard = ({ loading, weatherData }) => {
    if (loading) {
        return <div className="loader-container"><div className="loader" /></div>
    } else if (weatherData) {
        return <div className="weather-container">
            <div className="location-container">
                <span className="location">{`${weatherData.name} / ${weatherData.sys.country}`}</span>
                <span className="location-coords">
                    <FaLocationDot />
                    {`${weatherData.coord.lat} / ${weatherData.coord.lon}`}
                </span>
            </div>
            <div className="temp-container">
                {`${weatherData.main.temp} K`}
            </div>
            <div className="weather-content">
                <img
                    src={`https://openweathermap.org/img/wn/${weatherData.weather[0]?.icon}@2x.png`}
                    alt="weather icon"
                />
                <div className="weather-description">
                    <span className="weather-description-primary">{weatherData.weather[0]?.main}</span>
                    <span className="weather-description-secondary">{weatherData.weather[0]?.description}</span>
                </div>
            </div>
        </div>
    }
}

export default WeatherCard