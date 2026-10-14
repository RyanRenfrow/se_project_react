import "./ItemCard.css";
function ItemCard({ item, onSelect }) {
  return (
    <button
      type="button"
      className="item-card"
      onClick={() => onSelect(item)}
      aria-label={`View ${item.name}`}
    >
      <span className="item-card__name">{item.name}</span>
      <img className="item-card__image" src={item.link} alt={item.name} />
    </button>
  );
}
export default ItemCard;
