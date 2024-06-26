import logo from "../../Assets/logo.png";
import search_icon from "../../Assets/search_icon.png";
import basket_icon from "../../Assets/basket_icon.png";
import "../Navbar/Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar({setShowLogin}) {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <>
      <div className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <ul className="navbar-menu">
          <Link to="/"
            onClick={() => setActiveNav("#")}
            className={activeNav === "#" ? "active" : ""}
          >
            home
          </Link>
          <a href="#explore-menu"
            onClick={() => setActiveNav("menu")}
            className={activeNav === "menu" ? "active" : ""}
          >
            menu
          </a>
          <a href="#app-download"
            onClick={() => setActiveNav("mobile-app")}
            className={activeNav === "mobile-app" ? "active" : ""}
          >
            mobile-app
          </a>
          <a href="#footer"
            onClick={() => setActiveNav("contact-us")}
            className={activeNav === "contact-us" ? "active" : ""}
          >
            contact us
          </a>
        </ul>
        <div className="navbar-right">
          <img src={search_icon} alt="" />
          <div className="navbar-search-icon">
            <img src={basket_icon} alt="" />
            <div className="dot"></div>
          </div>
          <button onClick={()=>setShowLogin(true)}>sign in</button>
        </div>
      </div>
    </>
  );
}
export default Navbar;
