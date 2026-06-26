import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialLinks } from "./socialLinks";
import "./SocialMediaIcons.css";

const SocialMediaIcons = () => {
  return (
    <section className="social-media-icons">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={link.label}
        >
          <FontAwesomeIcon icon={link.icon} />
        </a>
      ))}
    </section>
  );
};

export default SocialMediaIcons;
