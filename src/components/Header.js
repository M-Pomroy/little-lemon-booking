import logo from "../assets/logo.svg";
import Nav from "./Nav";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container header-wrap">
        <img src={logo} alt="Little Lemon logo" className="header-img" />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
