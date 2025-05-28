import logo from "../assets/logo-footer.svg";
import "../styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-wrap">
        <img src={logo} alt="Little Lemon logo" />
        <div className="footer-menu-wrap">
          <nav className="footer-menu">
            <h2>Doormat Navigation</h2>
            <div className="footer-menu-list">
              <Link to="/" className="footer-link">
                Home
              </Link>
              <Link to="/about" className="footer-link">
                About
              </Link>
              <Link to="/menu" className="footer-link">
                Menu
              </Link>
              <Link to="/booking" className="footer-link">
                Reservations
              </Link>
            </div>
          </nav>
          <nav className="footer-menu">
            <h2>Contact</h2>
            <ul>
              <li>
                <a href="tel:01265447852">+44 (0) 1265 447 852</a>
              </li>
              <li>
                <a href="mailto:contact@littlelemon.com">
                  contact@littlelemon.com
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
