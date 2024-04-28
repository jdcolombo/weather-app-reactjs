import React from "react";
import WeatherComponent from "./components/weather";
import "./App.scss";
import Sunny from "./assets/sunny.png";
import PartlyCloudy from "./assets/partly_cloudy.png";

const weatherData = {
  temperature: 9,
  condition: "Sunny",
  time: "Friday 09:00",
  icon: Sunny,
  precipitacion: 0,
  humidity: 49,
  wind: 10,
  forecast: [
    {
      time: "10:00",
      day: "Fri",
      temperatureMax: 22,
      temperatureMin: 9,
      icon: Sunny,
    },
    {
      time: "13:00",
      day: "Sat",
      temperatureMax: 24,
      temperatureMin: 17,
      icon: PartlyCloudy,
    },
    {
      time: "16:00",
      day: "Sun",
      temperatureMax: 23,
      temperatureMin: 5,
      icon: Sunny,
    },
    {
      time: "19:00",
      day: "Mon",
      temperatureMax: 19,
      temperatureMin: 1,
      icon: PartlyCloudy,
    },
    {
      time: "22:00",
      day: "Tue",
      temperatureMax: 17,
      temperatureMin: 2,
      icon: PartlyCloudy,
    },
    {
      time: "01:00",
      day: "Wed",
      temperatureMax: 19,
      temperatureMin: 3,
      icon: Sunny,
    },
    {
      time: "04:00",
      day: "Thu",
      temperatureMax: 20,
      temperatureMin: 6,
      icon: PartlyCloudy,
    },
    {
      time: "07:00",
      day: "Fri",
      temperatureMax: 19,
      temperatureMin: 6,
      icon: PartlyCloudy,
    },
  ],
  // precipitacions: [
  //   { day: "Mon", percentage: 15 },
  //   { day: "Tue", percentage: 20 },
  // ],
  // windy: [
  //   { day: "Mon", speed: 5 },
  //   { day: "Tue", speed: 20 },
  // ],
};

const App = () => {
  return <WeatherComponent weatherData={weatherData} />;
};

export default App;
