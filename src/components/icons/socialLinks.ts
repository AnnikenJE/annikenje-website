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

export const GITHUB_URL = "https://github.com/AnnikenJE";
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/anniken-j%C3%B8rgensen-edvardsen-825160113/";

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: GITHUB_URL,
    icon: faSquareGithub,
  },
  {
    label: "LinkedIn",
    href: LINKEDIN_URL,
    icon: faSquareLinkedin,
  },
];
