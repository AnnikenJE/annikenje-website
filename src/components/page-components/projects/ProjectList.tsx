import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
  ProjectStatus,
  type IProjectItem,
} from "../../../interfaces/IProjectItem";
import ProjectListItem from "./ProjectListItem";
import "./ProjectList.css";

const ProjectList = () => {
  const projects: IProjectItem[] = [
    {
      name: "Portfolio",
      description:
        "This website — my personal portfolio, built with React 19, TypeScript, and Vite. It uses client-side routing and hand-written vanilla CSS, and is an ongoing space where I experiment and keep improving.",
      status: ProjectStatus.AlwaysEvolving,
      github: "https://github.com/AnnikenJE/annikenje-website",
    },
    {
      name: "The Lionhearts",
      description:
        "A website I'm building for my World of Warcraft guild, The Lionhearts.",
      status: ProjectStatus.InProgress,
      url: "https://dev.thelionhearts.eu/",
    },
    {
      name: "Weather Forecast",
      description:
        "A weather forecast app built with Python and Flask — still a work in progress.",
      status: ProjectStatus.InProgress,
      github: "https://github.com/AnnikenJE/weather-forecast",
    },
    {
      name: "Fullstack Web App",
      description:
        "A fullstack web app built with React, a .NET/C# API, and SQLite, with full CRUD functionality. Web Development exam project.",
      status: ProjectStatus.Completed,
      github: "https://github.com/AnnikenJE/exam-webdevelopment-2024",
    },
    {
      name: "Rick & Morty Android App",
      description:
        "An Android app built with Kotlin and Jetpack Compose, integrating the Rick and Morty API. Android Development exam project.",
      status: ProjectStatus.Completed,
      github: "https://github.com/AnnikenJE/exam-android-development-2024",
    },
    {
      name: "Python Programming Exam",
      description:
        "A Python Programming exam project.",
      status: ProjectStatus.Completed,
      github: "https://github.com/AnnikenJE/exam-python-programming-2025",
    },
    {
      name: "Cross-Platform Exam",
      description:
        "A Cross-Platform Development exam project, built with TypeScript.",
      status: ProjectStatus.Completed,
      github: "https://github.com/AnnikenJE/exam-crossplatform-2025",
    },
    {
      name: "iOS Programming Exam",
      description:
        "An iOS app built with Swift for the iOS Programming exam.",
      status: ProjectStatus.Completed,
      github: "https://github.com/AnnikenJE/exam-ios-programming-2025",
    },
    {
      name: "Web Development Assignment",
      description:
        "A web development assignment built with JavaScript.",
      status: ProjectStatus.Completed,
      github: "https://github.com/AnnikenJE/assignment-webdevelopment-2024",
    },
    {
      name: "Pet game",
      description:
        "A Tamagotchi-style virtual pet game — a personal project I plan to start.",
      status: ProjectStatus.NotStarted,
    },
  ];

  const sections: { title: string; status: ProjectStatus }[] = [
    { title: "Always evolving", status: ProjectStatus.AlwaysEvolving },
    { title: "In progress", status: ProjectStatus.InProgress },
    { title: "Completed", status: ProjectStatus.Completed },
    { title: "Not started", status: ProjectStatus.NotStarted },
  ];

  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const toggle = (status: ProjectStatus) =>
    setCollapsed((prev) => ({ ...prev, [status]: !prev[status] }));

  return (
    <div className="projects-sections__wrapper">
      {sections.map(({ title, status }) => {
        const items = projects.filter((project) => project.status === status);
        const isCollapsed = collapsed[status];

        if (items.length === 0) return null;

        return (
          <section key={status}>
            <h2>
              <button
                type="button"
                className="projects-section__toggle"
                onClick={() => toggle(status)}
                aria-expanded={!isCollapsed}
              >
                <span>
                  {title} <span className="projects-section__count">({items.length})</span>
                </span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={
                    isCollapsed
                      ? "projects-section__chevron projects-section__chevron--collapsed"
                      : "projects-section__chevron"
                  }
                />
              </button>
            </h2>
            {!isCollapsed &&
              items.map((project) => (
                <ProjectListItem key={project.name} {...project} />
              ))}
          </section>
        );
      })}
    </div>
  );
};

export default ProjectList;
