import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import classNames from "classnames";

import HamburgerIcon from "../../../assets/burger-menu-svgrepo-com.svg";
import { FaGithub, FaLink, FaLinkedin } from "react-icons/fa6";
import { FaCodeBranch, FaLinkedinIn } from "react-icons/fa";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(); // Step 1: Create a ref for the menu

  const location = useLocation();
  const navigate = useNavigate();

  const tabs = {
    "/about": "About",
    "/projects": "Projects",
    "/technologies": "Technologies",
    "/contact": "Contact",
  };

  // Handle cicking outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="relative">
      <div className="w-full flex justify-between items-center p-5 ">
        <button
          onClick={() => setOpen(!open)}
          className="w-fit h-[40px] flex items-center justify-center"
        >
          <img src={HamburgerIcon} alt="Menu" className="w-6 h-6" />
        </button>
      </div>
      <div
        ref={menuRef}
        className={classNames(
          "absolute top-0 left-0 h-screen w-[200px] bg-white transition-transform",
          {
            "translate-x-0  z-20": open,
            "-translate-x-full": !open,
          }
        )}
      >
        <div className="p-5 bg-white opacity-100">
          {Object.entries(tabs).map(([path, label]) => {
            return (
              <a href={path} className="block p-2 portfolio-font">
                {path === location.pathname ? "> " : ""} {label}
              </a>
            );
          })}
          <div className="mt-3 flex flex-row gap-3 w-fit mx-auto">
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
          <div className="container mt-3">
            <p className="w-fit mx-auto portfolio-font">Ⓒ Emmet Spencer</p>
          </div>
        </div>
      </div>
      <div
        className={classNames(
          "absolute h-screen w-screen opacity-45 bg-black top-0 transition-opacity duration-[3s]",
          {
            "translate-x-0 z-10 opacity-45": open,
            "-translate-x-full opacity-100": !open,
          }
        )}
      ></div>
    </div>
  );
}
