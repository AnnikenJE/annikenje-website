import "./AboutPage.css";

const AboutPage = () => {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="about-section">
        <h1 className="page-title">About</h1>
      </section>

      <section className="about-section">
        <article className="about-article">
          <h2>Who am I?</h2>
          <p>
            I’m Anniken, a developer who recently graduated with a Bachelor’s in
            Frontend and Mobile Development. I enjoy building apps for both web
            and mobile, and I’m continuing to grow my backend skills — currently
            learning Flask and Vue.
          </p>

          <p>
            I started my studies with a focus on interactive design, but quickly
            shifted towards programming after trying it for the first time. I
            find programming fun, even though I haven’t been doing it for many
            years.
          </p>

          <p>
            I enjoy learning by challenging myself and working on things I don’t
            fully understand yet.
          </p>
        </article>

        <article className="about-article">
          <h2>Skills</h2>
          <p>
            <span className="highlight-txt">Frontend & Web:</span> React,
            TypeScript, Bootstrap
          </p>
          <p>
            <span className="highlight-txt">Mobile:</span> React Native, Kotlin,
            Swift
          </p>
          <p>
            <span className="highlight-txt">Backend & Languages:</span> Python,
            Java, C#, .NET, C, SQL, Firebase
          </p>
          <p>
            <span className="highlight-txt">Tools & Other:</span> Unity, Figma,
            Scrum
          </p>
        </article>

        <article className="about-article">
          <h2>What’s next</h2>
          <p>
            With my degree finished, I’m excited to keep building real-world
            projects, deepen my skills, and take on new challenges. I’m always
            open to learning something new — and to connecting with people who
            are building interesting things.
          </p>
        </article>

        <article className="about-article">
          <h2>This Website</h2>
          <p>
            This website is an ongoing personal project where I experiment,
            learn, and improve over time. It’s a space where I share what I’m
            working on and exploring.
          </p>
          <p>
            It’s built with React, TypeScript, and Vite — honestly a bit of
            overkill for a site this size, but it’s been a fun way to keep
            learning.
          </p>
          <p>It might look a little different next time you stop by. (★‿★)</p>
        </article>
      </section>
    </main>
  );
};

export default AboutPage;
