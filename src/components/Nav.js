import hamburger from "../assets/hamburger.svg";
import "../styles/nav.css";

function Nav() {
  return (
    <nav className="nav">
      <button type="button" className="nav-btn" aria-label="Click to open menu">
        <img src={hamburger} alt="Hamburger icon" />
      </button>
      <ul className="nav-list">
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
      {/*
      <ul className="nav-list">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/menu" className="nav-link">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/booking" className="nav-link">
            Reservations
          </Link>
        </li>
        <li>
          <Link to="/order-online" className="nav-link">
            Order Online
          </Link>
        </li>
        <li>
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
      </ul>
      */}
    </nav>
  );
}

export default Nav;
