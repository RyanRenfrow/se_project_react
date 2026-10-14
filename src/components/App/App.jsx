import { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { apiKey, coordinates, locationName } from "../../utils/constants";
import { defaultClothingItems } from "../../utils/clothingItems";
import { getWeather } from "../../utils/weatherApi";

function App() {
  // App holds the data that several components need.
  const [items, setItems] = useState(defaultClothingItems);
  const [activeModal, setActiveModal] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [weatherError, setWeatherError] = useState("");
  const weatherRequest = useRef(null);
  const [itemName, setItemName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    let isActive = true;
    // Reuse the request during StrictMode's development effect replay.
    if (!weatherRequest.current) {
      weatherRequest.current = getWeather(coordinates, apiKey);
    }
    weatherRequest.current
      .then((data) => {
        if (isActive) setWeatherData(data);
      })
      .catch((error) => {
        if (isActive) setWeatherError(error.message);
      });
    return () => {
      isActive = false;
    };
  }, []);

  function handleCloseModal() {
    setActiveModal("");
  }

  function handleItemClick(item) {
    setSelectedItem(item);
    setActiveModal("preview");
  }

  function handleAddItem(event) {
    event.preventDefault();
    setItems([
      ...items,
      { _id: Date.now(), name: itemName.trim(), link: imageUrl.trim(), weather },
    ]);
    handleCloseModal();
  }

  function handleOpenAddModal() {
    setItemName("");
    setImageUrl("");
    setWeather("");
    setActiveModal("add");
  }

  return (
    <div className="page">
      <div className="page__content">
        <Header
          location={weatherData?.city || locationName}
          onAddClothes={handleOpenAddModal}
        />
        <Main
          weatherData={weatherData}
          weatherError={weatherError}
          items={items}
          onItemClick={handleItemClick}
        />
        <Footer />
      </div>
      <ModalWithForm
        title="New garment"
        name="add-garment"
        buttonText="Add garment"
        isOpen={activeModal === "add"}
        onClose={handleCloseModal}
        onSubmit={handleAddItem}
        isSubmitDisabled={!itemName.trim() || !imageUrl.trim() || !weather}
      >
        <label className="modal__label">
          Name
          <input
            name="name"
            value={itemName}
            onChange={(event) => setItemName(event.target.value)}
            placeholder="Name"
            required
            maxLength={40}
          />
        </label>
        <label className="modal__label">
          Image URL
          <input
            name="image"
            type="url"
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
            placeholder="Image URL"
            required
          />
        </label>
        <fieldset className="modal__weather">
          <legend>Select the weather type:</legend>
          {["hot", "warm", "cold"].map((type) => (
            <label key={type}>
              <input
                type="radio"
                name="weather"
                value={type}
                checked={weather === type}
                onChange={(event) => setWeather(event.target.value)}
                required
              />
              {type[0].toUpperCase() + type.slice(1)}
            </label>
          ))}
        </fieldset>
      </ModalWithForm>
      <ItemModal
        item={selectedItem}
        isOpen={activeModal === "preview"}
        onClose={handleCloseModal}
      />
    </div>
  );
}
export default App;
