import type { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import type { IProjectItem } from "../../../interfaces/IProjectItem";
import "./ProjectListItem.css";

const ProjectListItem: FC<IProjectItem> = ({
  name,
  description,
  github,
  url,
}) => {
  return (
    <article className="project-item">
      <h3>{name}</h3>
      <p>{description}</p>
      {(url || github) && (
        <div className="project-item__links">
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="project-item__link"
              aria-label={`Visit ${name} (opens in a new tab)`}
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Visit site
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="project-item__link"
              aria-label={`${name} on GitHub (opens in a new tab)`}
            >
              <FontAwesomeIcon icon={faSquareGithub} /> Code
            </a>
          )}
        </div>
      )}
    </article>
  );
};

export default ProjectListItem;
