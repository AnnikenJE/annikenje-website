import "./AboutPage.css";

import type { ISideNavItem } from "../interfaces/ISideNavItem";
import SideNavigationItem from "../components/navigation/SideNavigationItem";

// Denne burde ha en egen list fil, fikd dette senere.
//  Innholdet på siden skal også være en list, about-list med about-item.

const AboutPage = () => {
  const navigationItems: ISideNavItem[] = [
    {
      id: "background",
      label: "Background",
    },
    { id: "education", label: "Education" },
    {
      id: "work",
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

            <div id="background">
              <section className="about-section">
                <h3 className="section-heading">Background</h3>
                <article>
                  <h4 className="article-heading">Who am I?</h4>
                  <p className="article-info">
                    My name is Anniken! More will be added soon!
                  </p>
                </article>
                <article>
                  <h4 className="article-heading">My Past</h4>
                  <p className="article-info"> Will be added soon!</p>
                  <p className="article-info">
                    This is a test! This is a test! This is a test! This is a
                    test! This is a test! This is a test! This is a test! This
                    is a test! This is a test! This is a test! This is a test!
                    This is a test! This is a test! This is a test! This is a
                    test!
                  </p>
                </article>
                <article>
                  <h4 className="article-heading">My Future</h4>
                  <p className="article-info"> Will be added soon!</p>
                </article>
              </section>
            </div>
            <div id="education">
              <section className="about-section">
                <h3 className="section-heading">Education</h3>
                <article>
                  <h4 className="article-heading">Bachelor Degree</h4>
                  <p className="article-info"> Will be added soon!</p>
                </article>
                <article>
                  <h4 className="article-heading">High School</h4>
                  <p className="article-info"> Will be added soon!</p>
                </article>
              </section>
            </div>
            <div id="work">
              <section className="about-section">
                <h3 className="section-heading">Work</h3>
                <article>
                  <h4 className="article-heading">History</h4>
                  <p className="article-info"> Will be added soon!</p>
                </article>
                <article>
                  <h4 className="article-heading">
                    Joker - Small grocery store
                  </h4>
                  <p className="article-info"> Will be added soon!</p>
                </article>
                <article>
                  <h4 className="article-heading">
                    Lampemagasinet - Lamp store
                  </h4>
                  <p className="article-info"> Will be added soon!</p>
                </article>
              </section>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
