import logo from "../assets/logo-footer.svg";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-wrap">
        <img src={logo} alt="Little Lemon logo" />
        <div className="footer-menu-wrap">
          <nav className="footer-menu">
            <h2>Doormat Navigation</h2>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/menu">Menu</a>
              </li>
              <li>
                <a href="/reservations">Reservations</a>
              </li>
              <li>
                <a href="/order-online">Order Online</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
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
