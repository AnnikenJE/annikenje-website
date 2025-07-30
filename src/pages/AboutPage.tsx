import "./AboutPage.css";

import type { ISideNavItem } from "../interfaces/ISideNavItem";
import SideNavigationItem from "../components/navigation/SideNavigationItem";

const AboutPage = () => {
  const navigationItems: ISideNavItem[] = [
    {
      id: "aboutMe",
      label: "About me",
    },
    { id: "education", label: "Education" },
    {
      id: "work",
      label: "Work",
    },
  ];

  const listNavigationJSX = () => {
    const JSX = navigationItems.map((item) => (
      <SideNavigationItem id={item.id} label={item.label} />
    ));
    return JSX;
  };

  const showSideNav = () => {
    return <ul>{listNavigationJSX()}</ul>;
  };

  return (
    <main>
      <div className="page-wrapper">
        <div className="navigation">
          <section>{showSideNav()}</section>
        </div>
        <div className="main-content">
          <section>
            <h1>About</h1>
            <article id="aboutMe">
              <h3>About me</h3>
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
            </article>
            <article id="education">
              <h3>Education</h3>
              <p></p>
            </article>
            <article id="work">
              <h3>Work</h3>
              <p></p>
              <p>q</p>
              <p>q</p>
              <p>q</p>
              <p>q</p>
              <p>q</p>
            </article>
          </section>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
