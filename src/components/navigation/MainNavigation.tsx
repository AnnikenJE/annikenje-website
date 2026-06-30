import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialLinks } from "../icons/socialLinks";
import "./MainNavigation.css";

const MainNavigation = () => {
  return (
    <nav className="main-navigation" aria-label="Primary">
      <div className="logo__wrapper">
        <Link to="/" className="logo">
          Anniken
        </Link>
      </div>
      <ul className="main-navigation__list">
        <li className="nav-item__wrapper">
          <NavLink to="/about" className="main-navigation__item">
            About
          </NavLink>
        </li>
        <li className="nav-item__wrapper">
          <NavLink to="/projects" className="main-navigation__item">
            Projects
          </NavLink>
        </li>
        <li className="social-item__wrapper">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${link.label} (opens in a new tab)`}
              className="main-navigation__item"
            >
              <FontAwesomeIcon icon={link.icon} />
            </a>
          ))}
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
