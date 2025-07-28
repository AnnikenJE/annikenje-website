import "./AboutPage.css";
import { Link } from "react-router-dom";

import type { ISideNavItem } from "../interfaces/ISideNavItem";

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
      <li key={item.id}>
        <Link to={`#${item.id}`}>{item.label}</Link>
      </li>
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
            <article></article>
            <h1>About</h1>
            <h2>testsection</h2>
          </section>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
