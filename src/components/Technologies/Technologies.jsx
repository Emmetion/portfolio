import React, { useState } from "react";

import "./Technologies.css";
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

  return (
    <div className="mx-auto text-center md:translate-y-3 items-center md:w-[600px] sm:w-[400px]">
      <div className="h1">
        <p className="text-3xl sm:text-5xl md:text-6xl pb-2 pt-5 justify-center flex flex-row">
          <FaComputer className="my-auto mt-1 mr-3" />
          Technologies
        </p>
      </div>
      <div className="max-sm:w-[370px] sm:w-[370px] max-sm:px-5 md:w-[430px] mx-auto">
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
            <Tech name="Java" svg={JavaIcon} />
            <Tech name="Python" svg={PythonIcon} />
            <Tech name="JavaScript" svg={JavaScriptIcon} />
            <Tech name="C" svg={CIcon} />
            <Tech name="C++" svg={CPlusPlusIcon} />
            <Tech name="HTML5" svg={HTMLIcon} />
            <Tech name="CSS3" svg={CSS3Icon} />
            <Tech name="Go" svg={GolangIcon} />
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          Frameworks & Libraries
        </AccordionHeader>
        <AccordionBody>
          <div className="container flex flex-wrap overflow gap-1 mt-2 max-sm:justify-center">
            <Tech name="React" svg={ReactIcon} />
            <Tech name="Angular" svg={AngularIcon} />
            <Tech name="TailwindCSS" svg={TailwindCSSIcon} />
            <Tech name="Bootstrap" svg={BootstrapIcon} />
            <Tech name="Spring" svg={SpringIcon} />
            <Tech name="Flask" svg={FlaskIcon} />
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Databases & Softwares
        </AccordionHeader>
        <AccordionBody>
          <div className="container flex flex-wrap overflow gap-1 mt-2 max-sm:justify-center">
            <Tech name="PostgreSQL" svg={PostgreSQLIcon} />
            <Tech name="SQLite" svg={SQLiteIcon} />
            <Tech name="MySQL" svg={MySQLIcon} />
            <Tech name="MongoDB" svg={MongoDBIcon} />
            <Tech name="Firebase" svg={FirebaseIcon} />
            <Tech name="Docker" svg={DockerIcon} />
            <Tech name="SonarQube" svg={SonarQubeIcon} />
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4}>
        <AccordionHeader onClick={() => handleOpen(4)}>Editors</AccordionHeader>
        <AccordionBody>
          <div className="container flex flex-wrap overflow gap-1 mt-2 max-sm:justify-center">
            <Tech name="IntelliJ" svg={IntelliJIcon} />
            <Tech name="PyCharm" svg={PyCharmIcon} />
            <Tech name="VSCode" svg={VSCodeIcon} />
          </div>
        </AccordionBody>
      </Accordion>
      <div className="mt-10" />
    </div>
  );
}
