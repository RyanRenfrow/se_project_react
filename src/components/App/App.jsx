import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { clothingItems } from "../../utils/constants";

function App() {
  // App holds the data that several components need.
  const [items, setItems] = useState(clothingItems);
  const [activeModal, setActiveModal] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  function closeModal() {
    setActiveModal("");
  }

  function handleItemClick(item) {
    setSelectedItem(item);
    setActiveModal("preview");
  }

  function handleAddItem(item) {
    setItems([...items, { ...item, id: Date.now() }]);
    closeModal();
  }

  return (
    <div className="page">
      <div className="page__content">
        <Header onAddClothes={() => setActiveModal("add")} />
        <Main items={items} onItemClick={handleItemClick} />
        <Footer />
      </div>
      {activeModal === "add" && <ModalWithForm onClose={closeModal} onAddItem={handleAddItem} />}
      {activeModal === "preview" && <ItemModal item={selectedItem} onClose={closeModal} />}
    </div>
  );
}
export default App;
