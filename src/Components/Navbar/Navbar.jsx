import logo from "../../Assets/logo.png";
import search_icon from "../../Assets/search_icon.png";
import basket_icon from "../../Assets/basket_icon.png";
import "../Navbar/Navbar.css";
import { useState } from "react";
function Navbar() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <>
      <div className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <ul className="navbar-menu">
          <li
            onClick={() => setActiveNav("#")}
            className={activeNav === "#" ? "active" : ""}
          >
            home
          </li>
          <li
            onClick={() => setActiveNav("menu")}
            className={activeNav === "menu" ? "active" : ""}
          >
            menu
          </li>
          <li
            onClick={() => setActiveNav("mobile-app")}
            className={activeNav === "mobile-app" ? "active" : ""}
          >
            mobile-app
          </li>
          <li
            onClick={() => setActiveNav("contact-us")}
            className={activeNav === "contact-us" ? "active" : ""}
          >
            contact us
          </li>
        </ul>
        <div className="navbar-right">
          <img src={search_icon} alt="" />
          <div className="navbar-search-icon">
            <img src={basket_icon} alt="" />
            <div className="dot"></div>
          </div>
          <button>sign in</button>
        </div>
      </div>
    </>
  );
}
export default Navbar;
