export default function Weather({ weather }) {
    if (!weather || !weather.name || !weather.sys || !weather.weather || !weather.main || !weather.wind) {
      return <div>No weather data available.</div>;
    }
  
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
  