import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">Travel<span>Trucks</span></div>

        <nav className="nav">
          <NavLink to="/" className="link">
            Home
          </NavLink>

          <NavLink to="/catalog" className="link">
            Catalog
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
