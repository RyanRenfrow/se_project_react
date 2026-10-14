import "./ItemModal.css";

function ItemModal({ item, onClose }) {
  return (
    <div className="modal" onClick={onClose}>
      <dialog className="modal__content item-modal" ref={(dialog) => { if (dialog && !dialog.open) dialog.showModal(); }} onCancel={onClose} onClick={(event) => event.stopPropagation()} aria-labelledby="item-title">
        <button className="modal__close" type="button" onClick={onClose} aria-label="Close dialog">&times;</button>
        <img className="item-modal__image" src={item.image} alt={item.name} />
        <div className="item-modal__details"><h2 id="item-title">{item.name}</h2><p>Weather: {item.weather}</p></div>
      </dialog>
    </div>
  );
}
export default ItemModal;
