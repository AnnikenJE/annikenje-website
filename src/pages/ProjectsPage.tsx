import ProjectList from "../components/page-components/projects/ProjectList";
import { revealOrder as order } from "../utils/reveal";
import "./ProjectsPage.css";

const ProjectsPage = () => {
  return (
    <main id="main-content" tabIndex={-1}>
      <section>
        <h1 className="page-title reveal" style={order(0)}>
          Projects
        </h1>
        <article className="projects-article reveal" style={order(1)}>
          <p>Some of the projects I have worked on — and a few I'm still building.</p>
        </article>
      </section>
      <ProjectList />
      <section>
        <p className="projects-note reveal" style={order(2)}>
          A few more repos and projects are kept private for now — I'll share
          them here as they're ready. (★‿★)
        </p>
      </section>
    </main>
  );
};

export default ProjectsPage;
