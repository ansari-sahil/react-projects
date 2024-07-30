import { useState } from "react";
import Header from "./components/Header";
import Weather from "./components/Weather";

const apiKey = "f28d0c48fe92640ea8341d10c62bb170";

export default function App() {
  const [weather, setWeather] = useState(null); // Initial state set to null
  const [loading, setLoading] = useState(false); // State to handle loading

  const fetchWeather = async (city) => {
    setLoading(true); // Start loading
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      setWeather(null); // Clear weather data on error
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div>
      <Header fetchWeather={fetchWeather} />
      {loading && <div>Loading...</div>}
      {weather && <Weather weather={weather} />}
    </div>
  );
}
