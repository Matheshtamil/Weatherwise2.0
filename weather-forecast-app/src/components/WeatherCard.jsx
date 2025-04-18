
import React from 'react';

function WeatherCard({ data }) {
  return (
    <div className="bg-white rounded shadow p-6 text-center">
      <h2 className="text-xl font-bold mb-2">{data.name}, {data.sys.country}</h2>
      <p className="text-5xl font-semibold">{Math.round(data.main.temp)}°C</p>
      <p className="capitalize text-gray-600 mt-2">{data.weather[0].description}</p>
      <div className="mt-4 text-sm text-gray-500">
        Humidity: {data.main.humidity}% | Wind: {data.wind.speed} m/s
      </div>
    </div>
  );
}

export default WeatherCard;
