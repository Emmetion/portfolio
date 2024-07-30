import React, { useEffect, useRef, useState } from "react";
import { FaCodeBranch, FaGithub, FaLinkedin } from "react-icons/fa";
import RITLogo from "../../assets/RIT-Logo.png";
import EmmetPfp from "../../assets/IMG_5119.png";
import "./About.css";
import classNames from "classnames";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
function HelloTypewriter() {
  const [index, setIndex] = useState(0);
  const [speed, setSpeed] = useState(300);
  const text = "Hello!";
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + text.charAt(index));
        setIndex((prev) => {
          if (index == 2) {
            setSpeed(200);
          } else if (index == 3) {
            setSpeed(300);
          }
          return prev + 1;
        });
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <div className="w-max duration-200 ease-out">
      <a className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl max-xl:text-9xl font-sans flex flex-row items-end portfolio-font">
        {currentText}
        <div className="w-[.34em] border-b-4 border-orange-400 animate-[blinkingcaret_1.6s_ease-in-out_infinite] text-white">
          {"‎"}
        </div>
      </a>
    </div>
  );
}

export default function About() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody>
          <img
            alt="Emmet's Profile"
            src={EmmetPfp}
            className={classNames(
              "scale-105 duration-150 rounded-xl shadow-lg shadow-gray-400 self-center mb-3"
            )}
          />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
      <div className="flex flex-col md:translate-y-1/2">
        <img
          alt="Emmet's Profile"
          src={EmmetPfp}
          className={classNames(
            "sm:block md:hidden hover:scale-105 duration-150 w-[200px] h-[200px] rounded-xl shadow-lg shadow-gray-400 self-center mb-3"
          )}
          onClick={handleOpen}
        />
        <div className="items-center justify-center flex flex-row">
          <div className="">
            <div className="">
              <HelloTypewriter />
            </div>
            <br />
            <div className="w-[320px] md:w-[430px] lg:w-[540px] pl-1 lg:text-xl portfolio-font">
              <p>
                I'm Emmet, a passionate software developer pursuing a{" "}
                <b>Bachelor of Science</b> in <b>Software Engineering</b> @{" "}
                <a
                  className="text-white inline-flex items-center group my-auto align-middle mb-1 ring-orange-400 bg-orange-400 rounded-md px-1 hover:bg-orange-500 duration-200 hover:ring-orange-500 shadow-sm hover:shadow-md"
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
                This website serves as a portfolio of accomplishments and
                projects I've made over my software journey.
              </p>
              <br />
            </div>
            <div className="m-1 flex flex-row gap-1 pl-1">
              <a href="https://github.com/Emmetion" target="_black">
                <FaGithub className="icon-hover size-12 rounded-md border-4 border-white hover:border-gray-300 hover:bg-gray-300 " />
              </a>
              <a href="https://linkedin.com/in/emmet-spencer" target="_black">
                <FaLinkedin className="icon-hover size-12 rounded-md border-4 border-white hover:border-gray-300 hover:bg-gray-300 " />
              </a>
              <a href="https://github.com/Emmetion/portfolio" target="_black">
                <FaCodeBranch className="icon-hover size-12 rounded-md border-4 border-white hover:border-gray-300 hover:bg-gray-300 " />
              </a>
            </div>
          </div>
          <div>
            <img
              alt="Emmet's Profile"
              src={EmmetPfp}
              className={
                "hover:scale-105 duration-150 ml-[5vw] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] rounded-xl shadow-lg hidden md:block shadow-gray-400 hover:cursor-pointer"
              }
              onClick={handleOpen}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
