import logo from "../../Assets/logo.png";
import search_icon from "../../Assets/search_icon.png";
import basket_icon from "../../Assets/basket_icon.png";
import '../Navbar/Navbar.css';
function Navbar() {
  return (
    <>
      <div className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <ul className="navbar-menu">
          <li>Home</li>
          <li>Menu</li>
          <li>Mobile App</li>
          <li>Contact Us</li>
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
