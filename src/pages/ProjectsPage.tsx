import ProjectList from "../components/page-components/projects/projectList";
import "./projectPage.css";

const ProjectsPage = () => {
  return (
    <main>
      <div className="page-wrapper">
        <div className="heading-section">
          <h1 className="projects-heading"> Projects</h1>
        </div>
        <ProjectList />
      </div>
    </main>
  );
};

export default ProjectsPage;
