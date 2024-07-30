export default function Weather({ weather }) {
    console.log(weather)
  return (
    <div>
      <h2>
        Weather in {weather.name}, {weather.sys.country}
      </h2>
      <h4>Description: {weather.weather[0].description}</h4>
      <h4>Temperature: {weather.main.temp}°C</h4>
      <h4>Humidity: {weather.main.humidity}%</h4>
      <h4>Wind Speed: {weather.wind.speed} m/s</h4>
    </div>
  );
}
