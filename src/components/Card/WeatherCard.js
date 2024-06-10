import React, { useEffect, useState } from "react";
import { fetchWeather } from "../../api";
import "./WeatherCard.css";

const WeatherCard = ({ searchText }) => {
  const [weather, setWeather] = useState(null); 
  const [currentDateTime, setCurrentDateTime] = useState(new Date()); 

  useEffect(() => {
    const getWeather = async () => {
      if (!searchText) return; // If searchText is empty, do nothing
      try {
        const data = await fetchWeather(searchText); 
        setWeather(data); 
      } catch (error) {
        console.error(error); // Log error if fetching fails
      }
    };

    getWeather();

    const interval = setInterval(() => {
      setCurrentDateTime(new Date()); // Update with current date and time
    }, 60000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [searchText]); 

  if (!weather) return <div>Loading...</div>; // Show loading message while data is being fetched

  // Array of month names for formatting date
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const monthName = months[currentDateTime.getMonth()]; // Get current month name

  // Format date as "day month year"
  const formattedDate = `${currentDateTime.getDate()} ${monthName} ${currentDateTime.getFullYear()}`;

  return (
    <div className="weather-card">
      <div className="card-left">
        <p className="weather-condition">{weather.weather[0].description}</p> {/* Weather condition */}
        <h1>Weather in {weather.name}</h1> {/* City name */}
        <p>Temperature: {weather.main.temp.toString().slice(0, 2)}°C</p> {/* Temperature */}
        <p>
          {" "}
          {currentDateTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })} {/* Current time */}
        </p>
        <p> {formattedDate}</p> {/* Formatted date */}
      </div>
      <div className="card-right">
        <p className="right-box">
          <p>Humidity </p>
          <p>{weather.main.humidity}</p> {/* Humidity */}
        </p>
        <p className="right-box">
          <p>Pressure </p>
          <p>{weather.main.pressure}</p> {/* Pressure */}
        </p>
        <p className="right-box">
          <p>Wind Speed </p>
          <p>{weather.wind.speed}</p> {/* Wind speed */}
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
