import ProjectList from "../components/page-components/projects/ProjectList";
import "./ProjectsPage.css";

const ProjectsPage = () => {
  return (
    <main>
      <section>
        <h1 className="projects-heading">Projects</h1>
        <article className="projects-article">
          <p>Some of the projects I have worked on — and a few I'm still building.</p>
        </article>
      </section>
      <ProjectList />
      <section>
        <p className="projects-note">
          A few more repos and projects are kept private for now — I'll share
          them here as they're ready. (★‿★)
        </p>
      </section>
    </main>
  );
};

export default ProjectsPage;
