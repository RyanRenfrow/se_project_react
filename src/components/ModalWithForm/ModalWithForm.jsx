import { useState } from "react";
import "./ModalWitForm.css";

function ModalWithForm({ onClose, onAddItem }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [weather, setWeather] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onAddItem({ name: name.trim(), image: image.trim(), weather });
  }

  return (
    <div className="modal" onClick={onClose}>
      <dialog className="modal__content" ref={(dialog) => { if (dialog && !dialog.open) dialog.showModal(); }} onCancel={onClose} onClick={(event) => event.stopPropagation()} aria-labelledby="add-title">
        <button className="modal__close" type="button" onClick={onClose} aria-label="Close dialog">&times;</button>
        <form onSubmit={handleSubmit}>
          <h2 id="add-title">New garment</h2>
          <label className="modal__label">Name<input value={name} onChange={(event) => setName(event.target.value)} placeholder="Name" required maxLength={40} /></label>
          <label className="modal__label">Image<input type="url" value={image} onChange={(event) => setImage(event.target.value)} placeholder="Image URL" required /></label>
          <fieldset className="modal__weather">
            <legend>Select the weather type:</legend>
            {["hot", "warm", "cold"].map((type) => (
              <label key={type}><input type="radio" name="weather" value={type} checked={weather === type} onChange={(event) => setWeather(event.target.value)} required />{type[0].toUpperCase() + type.slice(1)}</label>
            ))}
          </fieldset>
          <button className="modal__submit" type="submit" disabled={!name.trim() || !image.trim() || !weather}>Add garment</button>
        </form>
      </dialog>
    </div>
  );
}
export default ModalWithForm;
