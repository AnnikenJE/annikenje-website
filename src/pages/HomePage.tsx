import SocialMediaIcons from "../components/icons/SocialMediaIcons";
import "./HomePage.css";

const HomePage = () => {
  return (
    <main className="home-main">
      <section className="introduction-section">
        <h1 className="heading">
          HELLO! WEBSITE IS NOT FINISHED - UNDER PROGRESS
        </h1>
        <h2 className="introduction">
          I'm <span>Anniken </span>\(^-^)/
        </h2>
        <h3 className="introduction">
          A student currently pursuing a Bachelor's degree in Frontend and
          Mobile Development.
        </h3>

        <SocialMediaIcons />
      </section>
    </main>
  );
};

export default HomePage;
