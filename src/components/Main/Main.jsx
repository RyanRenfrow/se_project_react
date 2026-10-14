import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

function Main({ items, onItemClick, weatherData, weatherError }) {
  const visibleItems = weatherData
    ? items.filter((item) => item.weather === weatherData.type)
    : items;
  return (
    <main>
      {weatherData ? (
        <WeatherCard weatherData={weatherData} />
      ) : (
        <p role={weatherError ? "alert" : "status"}>
          {weatherError
            ? "Weather is unavailable. Showing all clothing until weather can be loaded."
            : "Loading weather. Showing all clothing for now."}
        </p>
      )}
      <section className="clothes" aria-labelledby="clothes-title">
        <h1 className="clothes__title" id="clothes-title">
          {weatherData
            ? `Today is ${weatherData.temperature}° F / You may want to wear:`
            : "Your clothing"}
        </h1>
        <ul className="clothes__list">
          {visibleItems.map((item) => (
            <li key={item._id}>
              <ItemCard item={item} onSelect={onItemClick} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
export default Main;
