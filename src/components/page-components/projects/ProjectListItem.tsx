import type { FC } from "react";
import type { IProjectItem } from "../../../interfaces/IProjectItem";
import "./ProjectListItem.css";

const ProjectListItem: FC<IProjectItem> = ({ name, description }) => {
  return (
    <article>
      <h3> {name}</h3>
      <p>{description}</p>
    </article>
  );
};

export default ProjectListItem;
