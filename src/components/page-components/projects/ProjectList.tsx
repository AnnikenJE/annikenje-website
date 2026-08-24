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
      status: ProjectStatus.Live,
      github: "https://github.com/AnnikenJE/annikenje-website",
      url: "https://www.annikenje.no/",
      urlLabel: "Visit site again",
    },
    {
      name: "The Lionhearts Website",
      description:
        "A guild website for The Lionhearts, my World of Warcraft guild on Darkmoon Faire (EU). Built with Nuxt 4 (Vue 3 + Vite), TypeScript, and Nitro server routes.",
      status: ProjectStatus.Live,
      github: "https://github.com/AnnikenJE/the-lionhearts-website",
      url: "https://thelionhearts.eu/",
    },
    {
      name: "Weather Forecast",
      description:
        "My first self-initiated Python project, a Flask web app that fetches live weather data via the Open-Meteo API and uses the Claude API to suggest what to wear based on the forecast.",
      status: ProjectStatus.InProgress,
      github: "https://github.com/AnnikenJE/weather-forecast",
    },
    {
      name: "TrumpVerse",
      description:
        "A fullstack merchandise catalogue with full CRUD, image uploads, and search. React + TypeScript frontend on Vite, ASP.NET Core 8 Web API backend with Entity Framework Core and SQLite. Web Development exam project. Case provided by the school.",
      status: ProjectStatus.Completed,
      github: "https://github.com/AnnikenJE/trump-verse",
    },
    {
      name: "Rick and Morty Android",
      description:
        "An Android app built with Kotlin and Jetpack Compose (MVVM) that browses characters from the Rick and Morty API, lets you design and save custom characters locally with Room, and includes a \"Surprise me\" random-character feature. Android Programming exam project.",
      status: ProjectStatus.Completed,
      github: "https://github.com/AnnikenJE/rick-and-morty-android",
    },
    {
      name: "Python Tasks",
      description:
        "A Python 3.12 project covering fundamentals across four tasks: a word-guessing game, a class-based library management system, a menu-driven bank account system, and a palindrome checker. Python Programming exam project.",
      status: ProjectStatus.Completed,
      github: "https://github.com/AnnikenJE/python-tasks",
    },
    {
      name: "DugnadHub",
      description:
        "A cross-platform app for organizing and coordinating volunteer activities (dugnader): create, browse, and join dugnader in a structured, user-friendly way. Built with React Native, Expo Router, TypeScript, and Firebase (auth, Firestore, storage), with Google and email/password sign-in. Cross-Platform Development exam project.",
      status: ProjectStatus.Completed,
      github: "https://github.com/AnnikenJE/dugnad-hub",
    },
    {
      name: "Beacon",
      description:
        "A SwiftUI iOS app for discovering nearby restaurants, cafés, and hotels via the Geoapify Places API, with map and list views, category/radius filtering, and a five-star rating system stored locally with SwiftData. Built with Swift, MapKit, and CoreLocation. iOS Programming exam project.",
      status: ProjectStatus.Completed,
      github: "https://github.com/AnnikenJE/beacon",
    },
    {
      name: "Armies of Zondor",
      description:
        "A medieval army management web app (built with rats instead of soldiers) across three screens: a resource shop for buying warriors, animals, and war machines; resource gathering with randomized outcomes; and an overview of your army and resources. Built with HTML, CSS, and vanilla JavaScript, zero dependencies. Web Development exam project.",
      status: ProjectStatus.Completed,
      github: "https://github.com/AnnikenJE/armies-of-zondor",
    },
    {
      name: "Ghost Woods",
      description:
        "A survival shooter built in Unity with C# where you collect objects scattered through a forest to escape before the ghosts catch you. More details and a video coming soon.",
      status: ProjectStatus.Completed,
    },
    {
      name: "Rat",
      description:
        "A Tamagotchi-style virtual pet rat.",
      status: ProjectStatus.Planned,
      github: "https://github.com/AnnikenJE/rat",
    },
  ];

  const sections: ProjectStatus[] = [
    ProjectStatus.Live,
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
