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
          <h2>Who am I?</h2>
          <p>
            I’m Anniken, a developer who recently graduated with a Bachelor’s in
            Frontend and Mobile Development. I build apps for web and mobile,
            and I’m growing my backend skills, currently working in Python and
            Flask.
          </p>

          <p>
            I started my studies focused on interactive design, then shifted to
            programming the first time I tried it. It stuck.
          </p>

          <p>The work I like best is the work I don’t fully understand yet.</p>
        </article>

        <article className="about-article">
          <h2 className="reveal" style={order(2)}>
            Skills
          </h2>
          <p className="reveal" style={order(3)}>
            <span className="highlight-txt">Frontend & Web:</span> React,
            TypeScript, Vue, Nuxt, Vite, CSS
          </p>
          <p className="reveal" style={order(4)}>
            <span className="highlight-txt">Mobile:</span> React Native, Kotlin
            (Jetpack Compose), Swift (SwiftUI)
          </p>
          <p className="reveal" style={order(5)}>
            <span className="highlight-txt">Backend & Languages:</span> Python,
            Flask, C#, .NET, Java, SQL, Firebase
          </p>
          <p className="reveal" style={order(6)}>
            <span className="highlight-txt">Tools & Other:</span> Git, Unity,
            Figma, Scrum
          </p>
        </article>

        <article className="about-article reveal" style={order(7)}>
          <h2>What’s next</h2>
          <p>
            I’m deepening my backend skills. Python and Flask now, C next,
            starting with a terminal Snake game to get hands-on with manual
            memory, pointers, and a real-time game loop.
          </p>
          <p>
            I’m also experimenting with AI tooling, Claude Code and GitHub
            Copilot, to see where it helps and where it gets in the way. I keep
            writing code by hand alongside it, so my own skills stay sharp.
          </p>

          <p>
            I’m always up for connecting with people building interesting
            things.
          </p>
        </article>

        <article className="about-article reveal" style={order(8)}>
          <h2>This Website</h2>
          <p>
            This site is an ongoing personal project. It’s a place to
            experiment, learn, and share what I’m working on.
          </p>
          <p>It might look a little different next time you stop by. (★‿★)</p>
        </article>
      </section>
    </main>
  );
};

export default AboutPage;
