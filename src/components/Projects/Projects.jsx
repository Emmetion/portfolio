import React from "react";
import { FaComputer } from "react-icons/fa6";
import Project from "./Project/Project";

import GolangIcon from "../../assets/tech_svgs/golang.svg";
import GCPIcon from "../../assets/tech_svgs/google-cloud-1.svg";
import PostgreSQLIcon from "../../assets/tech_svgs/PostgresSQL.svg";

import JavaIcon from "../../assets/tech_svgs/java.svg";
import MavenIcon from "../../assets/tech_svgs/Apache Maven.svg";
import JSONIcon from "../../assets/tech_svgs/json-schema.svg";
import AngularIcon from "../../assets/tech_svgs/Angular.svg";
import JavaScriptIcon from "../../assets/tech_svgs/JavaScript.svg";
import JUnit5Icon from "../../assets/tech_svgs/JUnit.svg";

import ReactIcon from "../../assets/tech_svgs/React.svg";
import PythonIcon from "../../assets/tech_svgs/Python.svg";
import FlaskIcon from "../../assets/tech_svgs/flask-light.svg";
import DockerIcon from "../../assets/tech_svgs/docker.svg";

import CIcon from "../../assets/tech_svgs/C.svg";

import FirebaseIcon from "../../assets/tech_svgs/Firebase.svg";
import TailwindCSSIcon from "../../assets/tech_svgs/Tailwind CSS.svg";

import GitHubIcon from "../../assets/tech_svgs/github-mark.svg";
import YouTubeIcon from "../../assets/tech_svgs/youtube-tile.svg";

const projects = [
  {
    name: "RapidTransfer",
    type: "Hackathon",
    age: "5 Months Ago",
    description:
      "Hackathon Project where me and 3 teammates developed a File Transfer Command-Line application. Written in Golang, it contained 6 subcommands and utilized a PostgreSQL server hosted on Google Cloud Platform. The application transfered files between two compuers using a peer-to-peer connection. I developed the friend-management and database operations for the app.",
    platforms: [
      {
        url: "https://github.com/OrestesK/RapidTransfer",
        svg: GitHubIcon,
        name: "GitHub",
      },
    ],
    techs: [GolangIcon, GCPIcon, PostgreSQLIcon],
  },
  {
    name: "U-Fund",
    type: "Course Project",
    age: "11 Months Ago",
    description:
      "A full-stack website developed in a team of 4. Let people doanate to individuals and organizations while outlining what the fund would be used towards. Written in Java (Spring Boot), JavaScript (Angular) and File Storage.",
    platforms: [],
    techs: [
      JavaIcon,
      MavenIcon,
      JSONIcon,
      AngularIcon,
      JavaScriptIcon,
      JUnit5Icon,
    ],
  },
  {
    name: "NUTRiAPP",
    type: "Course Project",
    age: "6 Months Ago",
    description:
      "JavaFX Application designed with the intention of monitoring food calorie intake and moderates exercise goals. The application calculated a goal target calorie for each user based on their current weight and what they wanted to achieve. More Nutition features include: Recipe Builder, Meal Builder, Default Ingredients List and Custom builder. Exercise Features: Weight Goals, Exercise Tracker",
    platforms: [
      {
        url: "https://www.youtube.com/embed/Xxa8UBh72EM",
        svg: YouTubeIcon,
        name: "YouTube",
      },
    ],
    techs: [JavaIcon, MavenIcon, JSONIcon, JUnit5Icon],
  },
  {
    name: "Library Booking System",
    type: "Course Project",
    age: "6 Months Ago",
    description:
      "Developed a full-stack application where users and librarians could managed rented and returned books. Features: Browsing Books in Libraries, Checking out books, Reserving Books, Reservation Queue System, Book Management, Librarian role, Member role.",
    platforms: [],
    techs: [
      ReactIcon,
      JavaScriptIcon,
      PythonIcon,
      FlaskIcon,
      PostgreSQLIcon,
      DockerIcon,
    ],
  },
  {
    name: "MIDI Mini-Player",
    type: "Course Project",
    age: "6 Months Ago",
    description:
      "A MicroController application where users could play MIDI Files through a buzzer via. Gave the user two interfaces to take actions through. 1) Terminal Input 2) Button Input (On Breadboard). The application was written in C and ran on a STM32L4 board. Used many systems like GPIO, NVIC, DAC, Systick.",
    platforms: [
      {
        url: "https://www.youtube.com/embed/U6mSkunXqNc",
        svg: YouTubeIcon,
        name: "YouTube",
      },
    ],
    techs: [CIcon],
  },
  {
    name: "Note-Taker",
    type: "Individual Project",
    age: "1 Month Ago",
    description:
      "A Note-taking website. Automatically organizes notes based on class-related tags. Improves student organization without much effort, great for reviewing notes on quizzes.",
    platforms: [],
    techs: [ReactIcon, JavaScriptIcon, TailwindCSSIcon, FirebaseIcon],
  },
  {
    name: "Portfolio",
    type: "Individual Project",
    age: "1 Month Ago",
    description:
      "This website. A React-based portfolio site that showcases my projects, skills, and experiences. Hosted with GitHub Pages.",
    platforms: [
      {
        url: "https://github.com/Emmetion/portfolio",
        svg: GitHubIcon,
        name: "GitHub",
      },
    ],
    techs: [ReactIcon, JavaScriptIcon, TailwindCSSIcon],
  },
];

export default function Projects() {
  return (
    <div className="w-full text-center md:translate-y-3 items-center flex flex-col">
      <div className="h1">
        <p className="text-3xl sm:text-5xl md:text-6xl pb-2 pt-5 justify-center flex flex-row portfolio-font">
          <FaComputer className="my-auto mt-1 mr-3" />
          Projects
        </p>
      </div>
      <i class="fa fa-xing" aria-hidden="true"></i>
      <div className="w-2/3 mx-auto">
        <p className="md:text-xl mx-auto portfolio-font">
          This page displays some projects I've developed over the years.
        </p>
      </div>

      <div className="w-full px-10 flex flex-row flex-wrap items-stretch justify-center gap-x-3 gap-y-5 mx-auto mt-5 mb-10 ">
        {projects.map((project, index) => {
          return (
            <Project
              name={project.name}
              type={project.type}
              age={project.age}
              description={project.description}
              techs={project.techs}
              platforms={project.platforms}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
