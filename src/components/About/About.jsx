import React from "react";
import { FaCodeBranch, FaGithub, FaLinkedin } from "react-icons/fa";
import RITLogo from "../../assets/RIT-Logo.png";
import EmmetPfp from "../../assets/Emmet_Pfp.jpg";
import "./About.css";
import classNames from "classnames";

export default function About() {
  return (
    <div className="flex flex-col md:translate-y-1/2">
      <img
        alt="Emmet's Profile"
        src={EmmetPfp}
        className={classNames(
          "sm:block md:hidden hover:scale-105 duration-150 w-[200px] h-[200px] rounded-xl shadow-lg shadow-gray-400 self-center mb-3"
        )}
      />
      <div className="items-center justify-center flex flex-row">
        <div>
          <a className="max-sm:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl max-xl:text-9xl font-sans flex flex-row items-end">
            Hello!{" "}
          </a>
          <br />
          <div className="w-[320px] md:w-[440px] lg:w-[540px] pl-1 lg:text-xl">
            <p>
              I'm Emmet, a passionate software developer pursuing a{" "}
              <b>Bachelor of Science</b> in <b>Software Engineering</b> @{" "}
              <a
                className="text-white inline-flex items-center group my-auto align-middle mb-1 ring-orange-400 bg-orange-400 rounded-md px-1"
                href="http://rit.edu"
                target="_blank"
              >
                <img
                  alt="RIT Logo"
                  src={RITLogo}
                  className="group rit-logo duration-100 align-middle w-[24px] h-[24px] mr-[3px] sm:mb-[1px] md:mb-[2px] md:w-[28px] md:h-[28px] lg:w-[30px] lg:h-[30px]"
                />
                RIT!
              </a>
            </p>
            <br />
            <p>
              This website serves as a portfolio of accomplishments and projects
              I've made over my software journey.
            </p>
            <br />
          </div>
          <div className="m-1 flex flex-row gap-3 pl-1">
            <a href="https://github.com/Emmetion" target="_black">
              <FaGithub size={30} className="icon-hover" />
            </a>
            <a href="https://linkedin.com/in/emmet-spencer" target="_black">
              <FaLinkedin size={30} className="icon-hover" />
            </a>
            <a href="https://github.com/Emmetion/portfolio" target="_black">
              <FaCodeBranch size={30} className="icon-hover" />
            </a>
          </div>
        </div>
        <div>
          <img
            alt="Emmet's Profile"
            src={EmmetPfp}
            className={classNames(
              "hover:scale-105 duration-150 ml-[5vw] md:w-[300px] h-[300px] rounded-xl shadow-lg shadow-gray-400 hidden md:block"
            )}
          />
        </div>
      </div>
    </div>
  );
}
