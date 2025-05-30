import { useState } from "react";
import hamburger from "../assets/hamburger.svg";
import "../styles/nav.css";
import { Link } from "react-router-dom";

function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="nav">
      <button
        type="button"
        className="nav-btn"
        aria-label="Click to open menu"
        onClick={() => setNavOpen(true)}
      >
        <img src={hamburger} alt="Hamburger icon" />
      </button>
      <div className={navOpen ? "nav-list nav-list--open" : "nav-list"}>
        <button
          type="button"
          className="close-btn"
          aria-label="Click to close menu"
          onClick={() => setNavOpen(false)}
        ></button>
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
      </div>
    </nav>
  );
}

export default Nav;
