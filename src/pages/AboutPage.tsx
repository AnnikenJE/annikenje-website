import { revealOrder as order } from "../utils/reveal";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="about-section">
        <h1 className="page-title reveal" style={order(0)}>
          About
        </h1>
      </section>

      <section className="about-section">
        <article className="about-article reveal" style={order(1)}>
          <h2>Background</h2>
          <p>
            I’m a developer based in Norway, with a
            Bachelor in Frontend and Mobile Development.
          </p>

          <p>
            I began my studies in interactive design and moved into programming
            when I tried it. I enjoy solving problems, and that’s probably why I
            was drawn to programming.
          </p>

          <p>
            I just finished my summer internship, and I´m currently looking
            for a job.
          </p>
        </article>

        <article className="about-article">
          <h2 className="reveal" style={order(2)}>
            Skills
          </h2>
          <p className="reveal" style={order(3)}>
            <span className="highlight-txt">Languages:</span> TypeScript,
            Python, Kotlin, Swift, Java, C#, C
          </p>
          <p className="reveal" style={order(4)}>
            <span className="highlight-txt">Frontend:</span> React, Next.js,
            Vite, Tailwind CSS, shadcn/ui, Bootstrap
          </p>
          <p className="reveal" style={order(5)}>
            <span className="highlight-txt">Mobile:</span> React Native, Jetpack
            Compose, SwiftUI
          </p>
          <p className="reveal" style={order(6)}>
            <span className="highlight-txt">Backend & Data:</span> Node.js,
            Hono, .NET, SQL, Firebase
          </p>
          <p className="reveal" style={order(7)}>
            <span className="highlight-txt">Tools & Practices:</span> Git,
            Figma, Unity, GitHub Copilot, Claude, Scrum, Kanban
          </p>

        </article>

        <article className="about-article reveal" style={order(8)}>
          <h2>What’s next</h2>
          <p>
            I´m currently deepening my backend skills with Python and Flask. I´m
            also working on a website for my World of Warcraft guild.
            At some point really want to make a rat "tamagotchi" style game with
            raspberry PI.
          </p>
        </article>

        <article className="about-article reveal" style={order(10)}>
          <h2>This Website</h2>
          <p>
            This site is an ongoing personal project, a place to experiment,
            learn, and share what I’m working on. It may look a little different
            next time you visit.
          </p>
        </article>
      </section>
    </main>
  );
};

export default AboutPage;
