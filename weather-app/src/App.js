import { useState } from "react";
import Header from "./components/Header";
import Weather from "./components/Weather";


const apiKey = "f28d0c48fe92640ea8341d10c62bb170";

export default function App() {
  const [weather, setWeather] = useState({});

  const fetchWeather = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Header fetchWeather={fetchWeather} />
      <Weather weather={weather} />
    </div>
  );
}
