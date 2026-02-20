import "./AboutPage.css";

const AboutPage = () => {
  return (
    <main>
      <section className="about-section">
        <h1 className="about-heading">About</h1>
      </section>

      <section className="about-section">
        <article className="about-article">
          <h2 className="defaut-heading">Who am I?</h2>
          <p>
            I’m Anniken, a bachelor’s student specializing in Frontend and
            Mobile Development. I’m currently in my third year, working on my
            bachelor’s project.
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
          <h2 className="defaut-heading">Skills</h2>
          <p>
            <span className="highlight-txt">Frontend & Web:</span> React,
            TypeScript, Bootstrap
          </p>
          <p>
            <span className="highlight-txt">Mobile:</span> React Native, Kotlin,
            Swift
          </p>
          <p>
            <span className="highlight-txt">Other:</span> Python, Java, C#, .NET
            Web API (Swagger), C (Linux), SQL, Unity, Scrum, Inclusive Design,
            Figma
          </p>
        </article>

        <article className="about-article">
          <h2 className="defaut-heading">This Website</h2>
          <p>
            This website is an ongoing personal project where I experiment,
            learn, and improve over time. It’s a space where I share what I’m
            working on and exploring.
          </p>
          <p>It might look a little different next time you stop by. (★‿★)</p>
        </article>
      </section>
    </main>
  );
};

export default AboutPage;
