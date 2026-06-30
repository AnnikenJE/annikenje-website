import { GITHUB_URL, LINKEDIN_URL } from "../components/icons/socialLinks";
import "./HomePage.css";

const HomePage = () => {
  return (
    <main id="main-content" tabIndex={-1} className="home-main">
      <section className="introduction-section">
        <h1 className="heading">HELLO!</h1>
        <article className="introduction">
          <h2 className="article__heading">I'm Anniken</h2>

          <p>
            A recently graduated developer with a Bachelor's degree in Frontend
            and Mobile Development.
          </p>
          <p>
            Feel free to check out my{" "}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              GitHub
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>{" "}
            or contact me on{" "}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              LinkedIn
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
            !
          </p>
        </article>
      </section>
    </main>
  );
};

export default HomePage;
