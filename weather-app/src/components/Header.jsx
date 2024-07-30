import { useState } from "react";

export default function Header({ fetchWeather }) {
  const [city, setCity] = useState("");
  const handleChange = (e) => setCity(e.target.value)
  const onFetch = () => fetchWeather(city)
  
  return (
    <header>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        
        onChange={handleChange}
      />
      <button onClick={onFetch}>Get Weather</button>
      <h2>Current Weather:</h2>
      </header>
  );
}
