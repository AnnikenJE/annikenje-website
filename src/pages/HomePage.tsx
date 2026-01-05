import SocialMediaIcons from "../components/icons/SocialMediaIcons";
import "./HomePage.css";

const HomePage = () => {
  return (
    <main className="home-main">
      <section className="introduction-section">
        <p className="warning">This website is still under development!</p>
        <h1 className="heading">HELLO!</h1>
        <article className="intrduction">
          <h2 className="article__heading">I'm Anniken \(^-^)/</h2>

          <p>
            A student currently pursuing a Bachelor's degree in Frontend and
            Mobile Development.
          </p>
          <p>Feel free to check out my GitHub or contact me on LinkedIn!</p>
        </article>

        <SocialMediaIcons />
      </section>
    </main>
  );
};

export default HomePage;
