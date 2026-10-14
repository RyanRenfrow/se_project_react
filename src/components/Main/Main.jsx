import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

function Main({ items, onItemClick }) {
  return (
    <main>
      <WeatherCard />
      <section className="clothes" aria-labelledby="clothes-title">
        <h1 className="clothes__title" id="clothes-title">Today is 75&deg; F / You may want to wear:</h1>
        <ul className="clothes__list">
          {items.map((item) => (
            <li key={item.id}><ItemCard item={item} onSelect={onItemClick} /></li>
          ))}
        </ul>
      </section>
    </main>
  );
}
export default Main;
