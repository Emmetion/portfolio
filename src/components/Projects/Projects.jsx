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

import ReactIcon from "../../assets/tech_svgs/React.svg";
import PythonIcon from "../../assets/tech_svgs/Python.svg";
import FlaskIcon from "../../assets/tech_svgs/flask-light.svg"
import DockerIcon from "../../assets/tech_svgs/docker.svg"

import CIcon from "../../assets/tech_svgs/C.svg"

import HTML5Icon from '../../assets/tech_svgs/HTML5.svg'
import CSS3Icon from '../../assets/tech_svgs/CSS3.svg'
import FirebaseIcon from '../../assets/tech_svgs/Firebase.svg'

const projects = [
  {
    name: "RapidTransfer",
    type: "Hackathon",
    age: "6 Months Ago",
    description:
      "This was a Hackathon Project where me and 3 teammates developed a Fitle Transfer Command-Line application. Written in Golang, it contained 6 subcommands and utilized a PostgreSQL server hosted on Google Cloud Platform. The application was able to transfer files between two compuers using a secure connection.",
    techs: [GolangIcon, GCPIcon, PostgreSQLIcon],
  },
  {
    name: "U-Fund",
    type: "Course Project",
    age: "11 Months Ago",
    description:
      "A full-stack application developed in a team of 4. It let people doanate to individuals and organizations while outlining what the fund would be used towards. Written in Java (Spring Boot), JavaScript (Angular) and a JSON File Storage system. The application was able to transfer files between two computers using a secure connection.",
    techs: [JavaIcon, MavenIcon, JSONIcon, AngularIcon, JavaScriptIcon],
  },
  {
    name: "NUTRiAPP",
    type: "Course Project",
    age: "6 Months Ago",
    description:
      "A JavaFX Application designed with the intention of monitoring food calorie intake and exercise. The application calculated a goal target calorie for each user based on their current weight and what they wanted to achieve. It also had a built in ",
    techs: [JavaIcon, MavenIcon, JSONIcon],
  },
  {
    name: "Book Management",
    type: "Course Project",
    age: "6 Months Ago",
    description:
      "Independently developed a full-stack application where users and librarians could managed rented and returned books. \nKey Features:\n- User Authentication\n- Book Search\n- Book Rental\n- Book Return\n- Book History\n- Book Recommendations\n- Book Reviews",
    techs: [ReactIcon, JavaScriptIcon, PythonIcon, FlaskIcon, PostgreSQLIcon, DockerIcon],
  },
  {
    name: "MIDI Mini-Player",
    type: "Course Project",
    age: "6 Months Ago",
    description:
      "A MicroController application where users could play MIDI Files through a buzzer via. Terminal/Physical could managed rented and returned books. \nKey Features:\n- User Authentication\n- Book Search\n- Book Rental\n- Book Return\n- Book History\n- Book Recommendations\n- Book Reviews",
    techs: [CIcon, ],
  },
  {
    name: "Note-Taker",
    type: "Individual Project",
    age: "1 Month Ago",
    description:
      "A Note-taking website that organizes notes into class-specific folders. Utilizes the students course schedule to create notes auto-tagged based on creation time.",
    techs: [ReactIcon, JavaScriptIcon, HTML5Icon, CSS3Icon, FirebaseIcon],
  },
];

export default function Projects() {
  return (
    <div className="container mx-auto text-center md:translate-y-3 items-center">
      <div className="h1">
        <p className="max-sm:text-3xl sm:text-5xl md:text-6xl pb-2 pt-5 justify-center flex flex-row">
          <FaComputer className="my-auto mt-1 mr-3" />
          Projects
        </p>
      </div>
      <div className="md:w-[700px] lg:w-full xl:w-full flex flex-row flex-wrap justify-center gap-3 mx-auto">
        {projects.map((project, index) => {
          return (
            <Project
              name={project.name}
              type={project.type}
              age={project.age}
              description={project.description}
              techs={project.techs}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
