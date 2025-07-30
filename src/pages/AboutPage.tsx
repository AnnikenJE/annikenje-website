import "./AboutPage.css";

import type { ISideNavItem } from "../interfaces/ISideNavItem";
import SideNavigationItem from "../components/navigation/SideNavigationItem";

// Denne burde ha en egen list fil
const AboutPage = () => {
  const navigationItems: ISideNavItem[] = [
    {
      id: "section1",
      label: "Background",
    },
    { id: "section2", label: "Education" },
    {
      id: "section3",
      label: "Work",
    },
  ];

  const listNavigationJSX = () => {
    const JSX = navigationItems.map((item) => (
      <SideNavigationItem key={item.id} id={item.id} label={item.label} />
    ));
    return JSX;
  };

  return (
    <main>
      <div className="page-wrapper">
        <div className="navigation">
          <aside>
            <ul>{listNavigationJSX()}</ul>
          </aside>
        </div>
        <div className="main-content">
          <section className="about-wrapper">
            <section className="heading-section">
              <h1 className="about-heading">About</h1>
            </section>

            <div id="section1">
              <section className="about-section">
                <h3 className="section-heading">Background</h3>
                <article>
                  <h4 className="article-heading">Who am I?</h4>
                  <p className="article-info">hei</p>
                </article>
              </section>
            </div>
            <div id="section2">
              <section className="about-section">
                <h3 className="section-heading">Education</h3>
                <article>
                  <h4 className="article-heading">Who am I?</h4>
                  <p className="article-info">hei</p>
                </article>
                <p></p>
                <p>q</p>
                <p>q</p>
                <p>q</p>
                <p>q</p>
                <p>q</p>
                <p>q</p>
                <p>q</p>
                <p>q</p>
                <p>q</p>
                <p>q</p>
                <p>q</p>
                <p>q</p> <p>q</p>
                <p>q</p>
                <p>q</p>
                <p>q</p>
                <p>q</p>
                <p>q</p>
                <p>q</p>
                <p>q</p>
                <p>q</p>
                <p>q</p>
                <p>q</p>
                <p>q</p>
              </section>
            </div>
            <div id="section3">
              <section className="about-section">
                <h3 className="section-heading">Work</h3>
                <article>
                  <h4 className="article-heading">Who am I?</h4>
                  <p className="article-info">hei</p>
                </article>
                <p></p>
                <p>q</p>
                <p>q</p>
                <p>q</p>
                <p>q</p>
                <p>q</p>
                <p>q</p>
                <p>q</p>
                <p>q</p>
                <p>q</p>
                <p>q</p>
                <p>q</p>
                <p>q</p>
                <p>q</p>
                <p>q</p>
                <p>q</p>
                <p>q</p>
                <p>q</p>
              </section>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
