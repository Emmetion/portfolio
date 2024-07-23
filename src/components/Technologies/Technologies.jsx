import React, { useState } from "react";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

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
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const languages = [
    { name: "Java", svg: JavaIcon },
    { name: "Python", svg: PythonIcon },
    { name: "JavaScript", svg: JavaScriptIcon },
    { name: "C", svg: CIcon },
    { name: "C++", svg: CPlusPlusIcon },
    { name: "HTML5", svg: HTMLIcon },
    { name: "CSS3", svg: CSS3Icon },
    { name: "Go", svg: GolangIcon },
  ];

  const frameworks = [
    { name: "React", svg: ReactIcon },
    { name: "Angular", svg: AngularIcon },
    { name: "TailwindCSS", svg: TailwindCSSIcon },
    { name: "Bootstrap", svg: BootstrapIcon },
    { name: "Spring", svg: SpringIcon },
    { name: "Flask", svg: FlaskIcon },
  ];

  const databases = [
    { name: "PostgreSQL", svg: PostgreSQLIcon },
    { name: "SQLite", svg: SQLiteIcon },
    { name: "MySQL", svg: MySQLIcon },
    { name: "MongoDB", svg: MongoDBIcon },
    { name: "Firebase", svg: FirebaseIcon },
    { name: "Docker", svg: DockerIcon },
    { name: "SonarQube", svg: SonarQubeIcon },
  ];

  const editors = [
    { name: "IntelliJ", svg: IntelliJIcon },
    { name: "PyCharm", svg: PyCharmIcon },
    { name: "VSCode", svg: VSCodeIcon },
  ];

  return (
    <div className="mx-auto text-center md:translate-y-3 items-center md:w-[600px] sm:w-[400px]">
      <div className="h1">
        <p className="text-3xl sm:text-5xl md:text-6xl pb-2 pt-5 justify-center flex flex-row portfolio-font">
          <FaComputer className="my-auto mt-1 mr-3" />
          Technologies
        </p>
      </div>
      <div className="max-sm:w-[370px] sm:w-[370px] max-sm:px-5 md:w-[430px] mx-auto portfolio-font">
        <p>
          Here you can view some of the technologies I've worked with over the
          years I've been programming.
        </p>
      </div>
      <div className="mx-auto flex flex-row justify-center mt-2 relative">
        <p className="text-2xl my-auto mr-3">Editor of Choice: </p>
        <div>
          <Tech name="IntelliJ" svg={IntelliJIcon} />
        </div>
      </div>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          Languages
        </AccordionHeader>
        <AccordionBody>
          <div className="container flex flex-wrap overflow gap-1 mt-2 max-sm:justify-center">
            {languages.map((lang, index) => {
              return <Tech key={index} name={lang.name} svg={lang.svg} />;
            })}
            ;
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          Frameworks & Libraries
        </AccordionHeader>
        <AccordionBody>
          <div className="container flex flex-wrap overflow gap-1 mt-2 max-sm:justify-center">
            {frameworks.map((framework, index) => {
              return (
                <Tech key={index} name={framework.name} svg={framework.svg} />
              );
            })}
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Databases & Softwares
        </AccordionHeader>
        <AccordionBody>
          <div className="container flex flex-wrap overflow gap-1 mt-2 max-sm:justify-center">
            {databases.map((database, index) => {
              return (
                <Tech key={index} name={database.name} svg={database.svg} />
              );
            })}
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4}>
        <AccordionHeader onClick={() => handleOpen(4)}>Editors</AccordionHeader>
        <AccordionBody>
          <div className="container flex flex-wrap overflow gap-1 mt-2 max-sm:justify-center">
            {editors.map((editor, index) => {
              return <Tech key={index} name={editor.name} svg={editor.svg} />;
            })}
            ;
          </div>
        </AccordionBody>
      </Accordion>
      <div className="mt-10" />
    </div>
  );
}
