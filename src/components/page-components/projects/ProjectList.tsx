import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
  ProjectStatus,
  type IProjectItem,
} from "../../../interfaces/IProjectItem";
import ProjectListItem from "./ProjectListItem";
import { revealOrder } from "../../../utils/reveal";
import "./ProjectList.css";

const ProjectList = () => {
  const projects: IProjectItem[] = [
    {
      name: "Portfolio",
      description:
        "My personal portfolio, the site you are on now, built with React 19, TypeScript, and Vite with client-side routing via React Router v7.",
      status: ProjectStatus.AlwaysEvolving,
      github: "https://github.com/AnnikenJE/annikenje-website",
    },
    {
      name: "The Lionhearts",
      description:
        "A website for The Lionhearts, my World of Warcraft guild on Darkmoon Faire (EU). Built with Nuxt 4 (Vue 3 + Vite) and TypeScript.",
      status: ProjectStatus.InProgress,
      url: "https://dev.thelionhearts.eu/",
    },
    {
      name: "Weather Forecast",
      description:
        "My first self-initiated Python project, a Flask web app that fetches live weather data, with plans to use the Claude API to suggest what to wear based on the forecast. I’m using it to learn Python and Flask, writing the code myself rather than generating it.",
      status: ProjectStatus.InProgress,
      github: "https://github.com/AnnikenJE/weather-forecast",
    },
    {
      name: "TrumpVerse",
      description:
        "A fullstack web app with a React + TypeScript frontend and a .NET/C# Web API backed by SQLite. Full CRUD, image uploads, and API documentation, with seamless frontend–backend interaction. Web Development exam project. Case provided by the school.",
      status: ProjectStatus.Completed,
      github: "https://github.com/AnnikenJE/exam-webdevelopment-2024",
    },
    {
      name: "Rick & Morty Android App",
      description:
        "An Android app built with Kotlin and Jetpack Compose that browses characters from the Rick and Morty API, stores your own custom characters locally, and navigates across multiple screens with proper error handling and user feedback. Android Programming exam project.",
      status: ProjectStatus.Completed,
      github: "https://github.com/AnnikenJE/exam-android-development-2024",
    },
    {
      name: "Python Fundamentals",
      description:
        "A Python 3.12 project covering fundamentals across four tasks: a word-guessing game, a class-based library management system, a menu-driven bank account system, and a palindrome checker. Python Programming exam project.",
      status: ProjectStatus.Completed,
      github: "https://github.com/AnnikenJE/exam-python-programming-2025",
    },
    {
      name: "DugnadHub",
      description:
        "A cross-platform app for organizing and coordinating volunteer activities (dugnader): create, browse, and join dugnader in a structured, user-friendly way. Built with React Native, TypeScript, and Firebase, running on iOS and web, with Google and email/password sign-in and Firebase handling auth, database, and image storage. Cross-Platform Development exam project.",
      status: ProjectStatus.Completed,
      github: "https://github.com/AnnikenJE/exam-crossplatform-2025",
    },
    {
      name: "Beacon",
      description:
        "A map-based SwiftUI app combining map interaction, location search via the Geoapify Places API, and local data storage in a clean, user-friendly design. Built with Swift and SwiftUI. iOS Programming exam project.",
      status: ProjectStatus.Completed,
      github: "https://github.com/AnnikenJE/exam-ios-programming-2025",
    },
    {
      name: "Armies of Zondor",
      description:
        "A medieval army management web app (built with rats instead of soldiers) across three screens: a resource shop for buying warriors, animals, and war machines; resource gathering with randomized outcomes; and an overview of your army and resources. Built with HTML, CSS, and vanilla JavaScript. Web Development coursework.",
      status: ProjectStatus.Completed,
      github: "https://github.com/AnnikenJE/assignment-webdevelopment-2024",
    },
    {
      name: "Pet game",
      description: "A Tamagotchi-style virtual pet game.",
      status: ProjectStatus.Planned,
    },
    {
      name: "Snake (C)",
      description:
        "A terminal Snake game written in C with ncurses, to strengthen my C skills: manual memory, pointers, and a real-time game loop.",
      status: ProjectStatus.Planned,
    },
  ];

  // Display order of the status sections; each status doubles as its heading.
  const sections: ProjectStatus[] = [
    ProjectStatus.AlwaysEvolving,
    ProjectStatus.InProgress,
    ProjectStatus.Completed,
    ProjectStatus.Planned,
  ];

  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const toggle = (status: ProjectStatus) =>
    setCollapsed((prev) => ({ ...prev, [status]: !prev[status] }));

  return (
    <div className="projects-sections__wrapper">
      {sections.map((status, index) => {
        const items = projects.filter((project) => project.status === status);
        const isCollapsed = collapsed[status];

        if (items.length === 0) return null;

        return (
          <section key={status} className="reveal" style={revealOrder(index + 2)}>
            <h2>
              <button
                type="button"
                className="projects-section__toggle"
                onClick={() => toggle(status)}
                aria-expanded={!isCollapsed}
              >
                <span>
                  {status} <span className="projects-section__count">({items.length})</span>
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
            <div
              className={
                isCollapsed
                  ? "projects-section__panel projects-section__panel--collapsed"
                  : "projects-section__panel"
              }
            >
              <div className="projects-section__panel-inner" inert={isCollapsed}>
                {items.map((project) => (
                  <ProjectListItem key={project.name} {...project} />
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default ProjectList;
