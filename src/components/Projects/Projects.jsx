import React from "react";
import { FaComputer } from "react-icons/fa6";
import Project from "./Project/Project";

export default function Projects() {
  return (
    <div className="container mx-auto text-center md:translate-y-3 items-center">
      <div className="h1">
        <p className="max-sm:text-3xl sm:text-5xl md:text-6xl pb-2 pt-5 justify-center flex flex-row">
          <FaComputer className="my-auto mt-1 mr-3" />
          Projects
        </p>
      </div>
      <div>
        <Project />
      </div>
    </div>
  );
}
