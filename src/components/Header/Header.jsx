import "./Header.css";
import logo from "../../images/Logo.png";
import avatar from "../../images/Ellipse 18.png";
function Header({ onAddClothes }) {
  return <header className="header">
    <img className="header__logo" src={logo} alt="WTWR" />
    <p className="header__date-and-location">June 15, New York</p>
    <button className="header__add-clothes-btn" type="button" onClick={onAddClothes}>+ Add clothes</button>
    <div className="header__user-container"><p className="header__username">Ryan Renfrow</p><img src={avatar} alt="Ryan Renfrow's avatar" className="header__avatar" /></div>
  </header>;
}
export default Header;
