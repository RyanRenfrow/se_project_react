import "./WeatherCard.css";
function WeatherCard() {
  return <section className="weather-card" aria-label="Weather: 75 degrees Fahrenheit, partly cloudy">
    <p className="weather-card__temperature">75°F</p>
    <div className="weather-card__art" aria-hidden="true"><span className="weather-card__sun" /><span className="weather-card__cloud" /></div>
  </section>;
}
export default WeatherCard;
