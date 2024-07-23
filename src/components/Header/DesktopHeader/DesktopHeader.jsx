import React from "react";
import "./DesktopHeader.css";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import classNames from "classnames";

export default function DesktopHeader() {
  const location = useLocation();
  const navigate = useNavigate();

  const tabs = {
    "/about": "About",
    "/projects": "Projects",
    "/technologies": "Technologies",
    "/contact": "Contact",
  };

  return (
    <div className="w-full h-[30px] flex flex-row justify-center gap-4 text-2xl mt-6 portfolio-font">
      {Object.entries(tabs).map(([path, label]) => (
        <button
          onClick={() => {
            navigate(path);
          }}
          key={label}
        >
          <h1
            key={path}
            className={classNames("header-link", {
              "current-page": location.pathname === path,
            })}
          >
            {label}
          </h1>
        </button>
      ))}
    </div>
  );
}
