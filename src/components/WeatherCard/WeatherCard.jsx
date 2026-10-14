import "./WeatherCard.css";

function WeatherCard({ weatherData }) {
  return (
    <section
      className="weather-card"
      aria-label={`Temperature: ${weatherData.temperature} degrees Fahrenheit`}
    >
      <p className="weather-card__temperature">
        {weatherData.temperature}&deg;F
      </p>
      <div className="weather-card__art" aria-hidden="true">
        <span className="weather-card__sun" />
        <span className="weather-card__cloud" />
      </div>
    </section>
  );
}

export default WeatherCard;
