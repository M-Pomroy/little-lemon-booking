import hamburger from "../assets/hamburger.svg";
import "../styles/nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <button type="button" className="nav-btn" aria-label="Click to open menu">
        <img src={hamburger} alt="Hamburger icon" />
      </button>
      <div className="nav-list">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/menu" className="nav-link">
          Menu
        </Link>
        <Link to="/booking" className="nav-link">
          Reservations
        </Link>
        <Link to="/order-online" className="nav-link">
          Order Online
        </Link>
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
