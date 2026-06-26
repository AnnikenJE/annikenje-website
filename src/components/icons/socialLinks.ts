import {
  faSquareGithub,
  faSquareLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface SocialLink {
  label: string;
  href: string;
  icon: IconDefinition;
}

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/AnnikenJE",
    icon: faSquareGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anniken-j%C3%B8rgensen-edvardsen-825160113/",
    icon: faSquareLinkedin,
  },
];
