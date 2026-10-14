import "./ItemModal.css";
import { useModalDialog } from "../../utils/useModalDialog";

function ItemModal({ item, isOpen, onClose }) {
  const { dialogRef, handleBackdropClick } = useModalDialog(isOpen, onClose);
  return (
    <div
      className={`modal modal_type_preview ${isOpen ? "modal_is-opened" : ""}`}
      onClick={onClose}
    >
      <dialog
        ref={dialogRef}
        className="modal__content item-modal"
        onCancel={onClose}
        onClick={handleBackdropClick}
        aria-labelledby="item-title"
      >
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
        >
          &times;
        </button>
        {item && (
          <>
            <img
              className="item-modal__image"
              src={item.link}
              alt={item.name}
            />
            <div className="item-modal__details">
              <h2 id="item-title">{item.name}</h2>
              <p>Weather: {item.weather}</p>
            </div>
          </>
        )}
      </dialog>
    </div>
  );
}
export default ItemModal;
