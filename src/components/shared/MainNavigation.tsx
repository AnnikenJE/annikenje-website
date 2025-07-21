import { Link } from "react-router-dom";
import "./MainNavigation.css";

//Home knappen må fjernes, skal ha default side med logo eller lignende

const MainNavigation = () => {
  return (
    <nav className="main-navigation">
      <ul className="main-navigation__list">
        <li>
          <Link to="/" className="main-navigation__item">
            Home
          </Link>
        </li>
        <li>
          <Link to="/experience" className="main-navigation__item">
            Experience
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
