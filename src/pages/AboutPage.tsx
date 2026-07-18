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
            I’m a developer with a recent Bachelor’s in Frontend and Mobile
            Development. I build applications for web and mobile, and I’m
            actively expanding into backend development, currently with Python
            and Flask.
          </p>

          <p>
            I began my studies in interactive design and moved into programming
            the first time I tried it. It’s been my focus ever since.
          </p>

          <p>I’m drawn to problems that push me beyond what I already know.</p>
        </article>

        <article className="about-article">
          <h2 className="reveal" style={order(2)}>
            Skills
          </h2>
          <p className="reveal" style={order(3)}>
            <span className="highlight-txt">Frontend & Web:</span> React,
            TypeScript, Vite, CSS
          </p>
          <p className="reveal" style={order(4)}>
            <span className="highlight-txt">Mobile:</span> React Native, Kotlin
            (Jetpack Compose), Swift (SwiftUI)
          </p>
          <p className="reveal" style={order(5)}>
            <span className="highlight-txt">Backend & Languages:</span> Python,
            C#, .NET, Java, SQL, Firebase
          </p>
          <p className="reveal" style={order(6)}>
            <span className="highlight-txt">Tools & Other:</span> Git, Unity,
            Figma, Scrum
          </p>
        </article>

        <article className="about-article reveal" style={order(7)}>
          <h2>What’s next</h2>
          <p>
            I’m deepening my backend skills. Python and Flask now, with C next.
            I’m starting with a terminal Snake game to work directly with manual
            memory management, pointers, and a real-time game loop.
          </p>
          <p>
            I’m also experimenting with AI-assisted development, tools like
            Claude Code and GitHub Copilot. I continue writing code by hand as
            well to keep my fundamentals strong.
          </p>
        </article>

        <article className="about-article reveal" style={order(8)}>
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
