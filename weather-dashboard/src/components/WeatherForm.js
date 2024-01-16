import React, { useState } from 'react';

function WeatherForm({ onWeatherSubmit }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onWeatherSubmit(city);
  };

  return (
    <div id="weatherForm">
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Get Weather</button>
    </form>
    </div>
  );
}

export default WeatherForm;
