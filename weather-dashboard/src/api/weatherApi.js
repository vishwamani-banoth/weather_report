
const API_KEY = '3cd112ba4cceba2967177482e0f41301';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

async function fetchWeatherData(city) {
  try {
    const response = await fetch(`${API_URL}?q=${city}&APPID=${API_KEY}&units=metric`);
    if (!response.ok) {
      throw new Error('City not found');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export { fetchWeatherData };
