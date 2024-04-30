import { assets } from "../../Assets/assets";
import "./Footer.css";
function Footer() {
  return (
    <>
      <div className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              nulla accusamus sunt! Inventore numquam saepe quod non ab
              nesciunt, explicabo omnis necessitatibus quia voluptate magni
              temporibus nostrum laboriosam. Consequatur, facilis.
            </p>
            <div className="footer-social-icons">
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
          </div>
          <div className="footer-content-center">
            <h2>Company</h2>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </div>
          <div className="footer-content-right">
            <h2>ET IN TOUCH</h2>
            <ul>
              <li>+1-123-123-123</li>
              <li>contact@gmail.com</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="footer-content">
          {" "}
          Copyright 2024 Tomato.com - All Right Reserved
        </p>
      </div>
    </>
  );
}
export default Footer;
