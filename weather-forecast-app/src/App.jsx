
import React, { useState } from 'react';
import WeatherCard from './components/WeatherCard';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = "YOUR_API_KEY"; // Replace with OpenWeather API key

  const getWeather = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      if (data.cod === 200) {
        setWeather(data);
      } else {
        alert(data.message);
        setWeather(null);
      }
    } catch (error) {
      alert("Error fetching data");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-4">
      <h1 className="text-3xl font-bold mb-4 text-blue-800">🌤️ Weather Forecast</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="px-4 py-2 rounded shadow outline-none"
        />
        <button onClick={getWeather} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          {loading ? 'Loading...' : 'Get Weather'}
        </button>
      </div>
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}

export default App;
