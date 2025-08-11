import {
  ProjectStatus,
  type IProjectItem,
} from "../../../interfaces/IProjectItem";
import ProjectListItem from "./projectListItem";

/* TODO: write more on description etc. Ta med lenke til beskrivelse fagene kanskje*/

const ProjectList = () => {
  const projects: IProjectItem[] = [
    {
      name: "Portfolio",
      description: "Personal portfolio, this website",
      status: ProjectStatus.InProgress,
    },
    {
      name: "The Lionhearts",
      description: "Website for World of Warcraft guild.",
      status: ProjectStatus.InProgress,
      url: "https://www.thelionhearts.eu/",
    },
    {
      name: "Welcome to Las Vegas",
      description: "Exam in creative webproject",
      status: ProjectStatus.Completed,
    },
    {
      name: "Alice in wonderland",
      description: "Course requirement in creative webproject",
      status: ProjectStatus.Completed,
    },
    {
      name: "Pet game",
      description: "Tamagotchi-like game",
      status: ProjectStatus.NotStarted,
    },
    {
      name: "Donald Trump Merch",
      description:"Exam in webdevelopment. React + typescript + bootstrap. Exam theme was Donald Trump - this was non political and everyone had to it.",
      status: ProjectStatus.Completed
    }
    
  ];

  const showByStatus = (status: ProjectStatus) =>
    projects
      .filter((project) => project.status === status)
      .map((project) => <ProjectListItem key={project.name} {...project} />);

  return (
    <div className="projects-sections__wrapper">
      <section>
        <h2>In progress</h2>
      </section>
      {showByStatus(ProjectStatus.InProgress)}
      <section>
        <h2>Completed</h2>
      </section>
      {showByStatus(ProjectStatus.Completed)}
      <section>
        <h2>Not started</h2>
        {showByStatus(ProjectStatus.NotStarted)}
      </section>
    </div>
  );
};

export default ProjectList;
