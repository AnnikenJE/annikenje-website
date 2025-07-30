//
//  Er ikke fornøyd med disse. Vil fjerne dem og legge dem til i forsiden.
//
// --------------

import "./SocialMediaIcons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareGithub,
  faSquareLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const SocialMediaIcons = () => {
  return (
    <section className="social-media-icons">
      <a href="https://github.com/AnnikenJE" target="_blank">
        <FontAwesomeIcon icon={faSquareGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/anniken-j%C3%B8rgensen-edvardsen-825160113/"
        target="_blank"
      >
        <FontAwesomeIcon icon={faSquareLinkedin} />
      </a>
    </section>
  );
};

export default SocialMediaIcons;
