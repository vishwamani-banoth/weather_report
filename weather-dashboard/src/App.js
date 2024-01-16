import React, { useState } from 'react';
import './App.css'; 
import WeatherForm from './components/WeatherForm';
import WeatherDetails from './components/WeatherDetails';
import { fetchWeatherData } from './api/weatherApi'; 
import GlobeComponent from './Globe'; 

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [cityCoordinates, setCityCoordinates] = useState(null); // Store city coordinates
  const [error, setError] = useState(null);

  const handleWeatherSubmit = async (city) => {
    try {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
      setError(null);
      const { coord } = data;
      if (coord) {
        setCityCoordinates([coord.lat, coord.lon]);
      } else {
        setCityCoordinates(null);
      }
    } catch (error) {
      console.error(error);
      setWeatherData(null); 
      setCityCoordinates(null); 
      setError('City not found'); 
    }
  };

  return (
    <div className="App">
      <h1>Weather Station Dashboard</h1>
      <div id='square'>
        <WeatherForm onWeatherSubmit={handleWeatherSubmit} />
        {error && <p className="error">{error}</p>}
        {weatherData && <WeatherDetails data={weatherData} />}
      </div>
      {cityCoordinates && <GlobeComponent cityCoordinates={cityCoordinates} />}
    </div>
  );
}

export default App;
