import { Link } from "react-router-dom";
import "./MainNavigation.css";
import SocialMediaIcons from "../icons/SocialMediaIcons";

const MainNavigation = () => {
  return (
    <nav className="main-navigation">
      <div>
        <Link to="/" className="logo">
          Anniken
        </Link>
      </div>
      <ul className="main-navigation__list">
        <li>
          <Link to="/about" className="main-navigation__item">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="main-navigation__item">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className="main-navigation__item">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
