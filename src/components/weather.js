import React, { useState } from "react";
import "./weather.scss";

const WeatherComponent = ({ weatherData }) => {
  const [activeTab, setActiveTab] = useState("Temperature");

  const renderForecast = () => {
    switch (activeTab) {
      case "Temperature":
        return weatherData.forecast && weatherData.forecast.length > 0 ? (
          weatherData.forecast.map((forecast, index) => (
            <div className="forecast-item" key={index}>
              <p className="forecast-time">{forecast.time}</p>
              <div className="forecast-box">
                <p>{forecast.day}</p>
                <img src={forecast.icon} alt="weather icon" />
                <p className="forecast-temperature">
                  {forecast.temperatureMax}°{" "}
                  <span>{forecast.temperatureMin}°</span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No hay datos sobre temperatura</p>
        );
      case "Precipitation":
        return weatherData.precipitacions &&
          weatherData.precipitacions.length > 0 ? (
          weatherData.precipitacions.map((precipitacions, index) => (
            <div className="forecast-item" key={index}>
              <p>{precipitacions.day}</p>
              <p>{precipitacions.percentage}%</p>
            </div>
          ))
        ) : (
          <p>No hay datos sobre precipitaciones</p>
        );
      case "Wind":
        return weatherData.windy && weatherData.windy.length > 0 ? (
          weatherData.windy.map((windy, index) => (
            <div className="forecast-item" key={index}>
              <p>{windy.day}</p>
              <p>{windy.speed}%</p>
            </div>
          ))
        ) : (
          <p>No hay datos sobre viento</p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="weather-component">
      <div className="current-weather">
        <div className="weather-info">
          <img src={weatherData.icon} alt="weather icon" />
          <div className="weather-temperature">
            <h2>{weatherData.temperature}</h2>
            <span>
              <strong>°C</strong> | °F
            </span>
          </div>
          <div>
            <p>Precipitation: {weatherData.precipitacion}%</p>
            <p>Humidity: {weatherData.humidity}%</p>
            <p>Wind: {weatherData.wind} km/h</p>
          </div>
          <div className="weather-date">
            <h4>Weather</h4>
            <p className="date">{weatherData.time}</p>
            <p className="date">{weatherData.condition}</p>
          </div>
        </div>
      </div>
      <ul className="weather-tabs">
        <li
          className={`tab ${activeTab === "Temperature" ? "active" : ""}`}
          onClick={() => setActiveTab("Temperature")}
        >
          Temperature
        </li>
        <span>|</span>
        <li
          className={`tab ${activeTab === "Precipitation" ? "active" : ""}`}
          onClick={() => setActiveTab("Precipitation")}
        >
          Precipitation
        </li>
        <span>|</span>
        <li
          className={`tab ${activeTab === "Wind" ? "active" : ""}`}
          onClick={() => setActiveTab("Wind")}
        >
          Wind
        </li>
      </ul>
      <div className="weather-forecast">{renderForecast()}</div>
    </div>
  );
};

export default WeatherComponent;
