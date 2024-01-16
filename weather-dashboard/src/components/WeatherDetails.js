import React from 'react';


function WeatherDetails({ data }) {
  return (
    <div id="weatherDetails">
      <h2>{data.name}</h2>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
      <p>Weather: {data.weather[0].description}</p>
    </div>
  );
}

export default WeatherDetails;
