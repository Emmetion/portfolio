import React, { useState } from "react";

import "./Technologies.css";

import { FaComputer } from "react-icons/fa6";

import JavaIcon from "../../assets/tech_svgs/java.svg";
import PythonIcon from "../../assets/tech_svgs/Python.svg";
import JavaScriptIcon from "../../assets/tech_svgs/JavaScript.svg";
import HTMLIcon from "../../assets/tech_svgs/HTML5.svg";
import CSS3Icon from "../../assets/tech_svgs/CSS3.svg";
import GolangIcon from "../../assets/tech_svgs/golang.svg";
import CIcon from "../../assets/tech_svgs/C.svg";
import CPlusPlusIcon from "../../assets/tech_svgs/c++.svg";
import MarkdownIcon from "../../assets/tech_svgs/markdown-light.svg";

import ReactIcon from "../../assets/tech_svgs/React.svg";
import AngularIcon from "../../assets/tech_svgs/Angular.svg";
import TailwindCSSIcon from "../../assets/tech_svgs/Tailwind CSS.svg";
import BootstrapIcon from "../../assets/tech_svgs/bootstrap.svg";
import SpringIcon from "../../assets/tech_svgs/Spring.svg";
import DockerIcon from "../../assets/tech_svgs/docker.svg";
import FlaskIcon from "../../assets/tech_svgs/flask-light.svg";
import SonarQubeIcon from "../../assets/tech_svgs/SonarQube.svg";

import PostgreSQLIcon from "../../assets/tech_svgs/PostgresSQL.svg";
import SQLiteIcon from "../../assets/tech_svgs/SQLite.svg";
import MySQLIcon from "../../assets/tech_svgs/MySQL.svg";
import MongoDBIcon from "../../assets/tech_svgs/MongoDB.svg";
import FirebaseIcon from "../../assets/tech_svgs/Firebase.svg";

import IntelliJIcon from "../../assets/tech_svgs/IntelliJ IDEA.svg";
import PyCharmIcon from "../../assets/tech_svgs/PyCharm.svg";
import VSCodeIcon from "../../assets/tech_svgs/Visual Studio Code (VS Code).svg";

import Tech from "./Tech/Tech";

export default function Technologies() {
  const numberOfStars = 10;

  return (
    <div className="container mx-auto text-center md:translate-y-3 items-center">
      <div className="h1">
        <p className="max-sm:text-3xl sm:text-5xl md:text-6xl pb-2 pt-5 justify-center flex flex-row">
          <FaComputer className="my-auto mt-1 mr-3" />
          Technologies
        </p>
      </div>
      <div className="max-sm:w-[370px] sm:w-[370px] max-sm:px-5 md:w-[430px] mx-auto">
        {/* <p>
          Over the course of my career, I've developed many strong skills in
          various programming lanauges, softwares, and frameworks alike. Here
          I'll highlight some of my greatest experiences.
        </p> */}
        <p>
          Here you can view some of the technologies I've worked with over the
          years I've been programming.
        </p>
      </div>
      <div className="mx-auto flex flex-row justify-center mt-2 relative">
        <p className="text-2xl my-auto mr-3">Editor of Choice: </p>
        <div>
          <Tech
            name="IntelliJ"
            bgcolor="bg-orange-400"
            bordercolor="border-orange-400"
            svg={IntelliJIcon}
          />
        </div>
      </div>

      <div className="text-3xl text-left md:w-[600px] sm:w-[500px] items-center mx-auto">
        <div className="mt-10">
          <p className="max-sm:text-center">Languages</p>
          <div className="container flex flex-wrap overflow gap-1 mt-2 max-sm:justify-center">
            <Tech
              name="Java"
              bgcolor="bg-orange-400"
              bordercolor="border-orange-400"
              svg={JavaIcon}
            />
            <Tech
              name="Python"
              bgcolor="bg-blue-400"
              bordercolor="border-blue-400"
              svg={PythonIcon}
            />
            <Tech
              name="JavaScript"
              bgcolor="bg-yellow-400"
              bordercolor="border-yellow-400"
              svg={JavaScriptIcon}
            />
            <Tech
              name="C"
              bgcolor="bg-blue-400"
              bordercolor="border-blue-400"
              svg={CIcon}
            />
            <Tech
              name="C++"
              bgcolor="bg-blue-400"
              bordercolor="border-blue-400"
              svg={CPlusPlusIcon}
            />
            <Tech
              name="HTML5"
              bgcolor="bg-gray-400"
              bordercolor="border-gray-400"
              svg={HTMLIcon}
            />
            <Tech
              name="CSS3"
              bgcolor="bg-gray-400"
              bordercolor="border-gray-400"
              svg={CSS3Icon}
            />
            <Tech
              name="Go"
              svgcolor="text-green-500"
              bgcolor="bg-green-400"
              bordercolor="border-green-400"
              svg={GolangIcon}
            />
          </div>
        </div>
        <div className="mt-6">
          <p className="max-sm:text-center">Frameworks & Libraries</p>
          <div className="container flex flex-wrap overflow gap-1 mt-2 max-sm:justify-center">
            <Tech
              name="React"
              bgcolor="bg-blue-400"
              bordercolor="border-blue-400"
              svg={ReactIcon}
            />
            <Tech
              name="Angular"
              bgcolor="bg-red-400"
              bordercolor="border-red-400"
              svg={AngularIcon}
            />
            <Tech
              name="TailwindCSS"
              bgcolor="bg-blue-400"
              bordercolor="border-blue-400"
              svg={TailwindCSSIcon}
            />
            <Tech
              name="Bootstrap"
              bgcolor="bg-purple-400"
              bordercolor="border-purple-400"
              svg={BootstrapIcon}
            />
            <Tech
              name="Spring"
              bgcolor="bg-green-400"
              bordercolor="border-green-400"
              svg={SpringIcon}
            />
            <Tech
              name="Flask"
              bgcolor="bg-black"
              bordercolor="border-black"
              svg={FlaskIcon}
            />
          </div>
        </div>
        <div className="mt-6">
          <p className="max-sm:text-center">Databases & Softwares</p>
          <div className="container flex flex-wrap overflow gap-1 mt-2 max-sm:justify-center">
            <Tech
              name="PostgreSQL"
              bgcolor="bg-blue-400"
              bordercolor="border-blue-400"
              svg={PostgreSQLIcon}
            />
            <Tech
              name="SQLite"
              bgcolor="bg-blue-400"
              bordercolor="border-blue-400"
              svg={SQLiteIcon}
            />
            <Tech
              name="MySQL"
              bgcolor="bg-blue-400"
              bordercolor="border-blue-400"
              svg={MySQLIcon}
            />
            <Tech
              name="MongoDB"
              bgcolor="bg-green-400"
              bordercolor="border-green-400"
              svg={MongoDBIcon}
            />
            <Tech
              name="Firebase"
              bgcolor="bg-yellow-400"
              bordercolor="border-yellow-400"
              svg={FirebaseIcon}
            />
            <Tech
              name="Docker"
              bgcolor="bg-blue-400"
              bordercolor="border-blue-400"
              svg={DockerIcon}
            />
            <Tech
              name="SonarQube"
              bgcolor="bg-blue-400"
              bordercolor="border-blue-400"
              svg={SonarQubeIcon}
            />
          </div>
        </div>
        <div className="mt-6">
          <p className="max-sm:text-center">Editors</p>
          <div className="container flex flex-wrap overflow gap-1 mt-2 max-sm:justify-center">
            <Tech
              name="IntelliJ"
              bgcolor="bg-orange-400"
              bordercolor="border-orange-400"
              svg={IntelliJIcon}
            />
            <Tech
              name="PyCharm"
              bgcolor="bg-green-400"
              bordercolor="border-green-400"
              svg={PyCharmIcon}
            />
            <Tech
              name="VSCode"
              bgcolor="bg-blue-400"
              bordercolor="border-blue-400"
              svg={VSCodeIcon}
            />
          </div>
        </div>
        <div className="mt-10" />
      </div>
    </div>
  );
}
