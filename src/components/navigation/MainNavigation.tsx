import { Link } from "react-router-dom";
import "./MainNavigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareGithub,
  faSquareLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const MainNavigation = () => {
  return (
    <nav className="main-navigation">
      <div className="logo__wrapper">
        <Link to="/" className="logo">
          Anniken
        </Link>
      </div>
      <ul className="main-navigation__list">
        <div className="nav-item__wrapper">
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
        </div>
        <div className="social-item__wrapper">
          <li className="social-link">
            <a
              href="https://github.com/AnnikenJE"
              target="_blank"
              className="main-navigation__item"
            >
              <FontAwesomeIcon icon={faSquareGithub} />
            </a>
          </li>
          <li className="social-link">
            <a
              href="https://www.linkedin.com/in/anniken-j%C3%B8rgensen-edvardsen-825160113/"
              target="_blank"
              className="main-navigation__item"
            >
              <FontAwesomeIcon icon={faSquareLinkedin} />
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default MainNavigation;
