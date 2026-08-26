import { revealOrder as order } from "../utils/reveal";
import { GITHUB_URL, LINKEDIN_URL } from "../components/icons/socialLinks";
import avatar from "../assets/anniken-avatar.jpg";
import "./HomePage.css";

const HomePage = () => {
  return (
    <main id="main-content" tabIndex={-1} className="home-main">
      <section className="introduction-section">
        <img
          className="home-avatar reveal"
          style={order(0)}
          src={avatar}
          alt="Anniken as a child, in a purple hat and sunglasses"
          width={400}
          height={400}
          loading="eager"
          decoding="async"
        />
        <div className="introduction-text">
          <h1 className="display-heading reveal" style={order(1)}>
            HELLO!
          </h1>
          <article className="introduction">
            <h2 className="article__heading reveal" style={order(2)}>
              I’m Anniken
            </h2>

            <p className="reveal" style={order(3)}>
              A developer with a Bachelor’s degree in
              Frontend and Mobile Development.
            </p>
            <p className="reveal" style={order(4)}>
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
        </div>
      </section>
    </main>
  );
};

export default HomePage;
