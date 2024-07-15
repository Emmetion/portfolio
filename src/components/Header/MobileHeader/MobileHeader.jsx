import React, { useState } from "react";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import classNames from "classnames";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const tabs = {
    "/about": "About",
    "/technologies": "Technologies",
    "/projects": "Projects",
    "/contact": "Contact",
  };

  return (
    <div>
      <div className="w-full h-[30px] mt-5 flex justify-center group mb-10">
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className="w-fit h-[40px] mt-6 flex justify-center mb-20"
        >
          <div className="w-[220px] bg-gray-100 text-black rounded-md border-2 flex flex-row">
            <p className="mx-auto text-2xl font-thin">
              {tabs[location.pathname]}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className={classNames(
                "text-gray-500 size-6 rotate-180 duration-100 absolute translate-y-[20%] translate-x-[760%]",
                {
                  "rotate-90": open === true,
                }
              )}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </button>
      </div>
      {open && (
        <div className="flex flex-col group mb-10 absolute border-white w-fit left-1/2 transform -translate-x-1/2 ">
          {Object.entries(tabs).map(([path, label]) => {
            // if (label === tabs[location.pathname]) return null;

            return (
              <button
                onClick={() => {
                  navigate(path);
                  setOpen(false);
                }}
                key={label}
                className="flex"
              >
                <div className="mx-auto w-[220px] bg-gray-100 flex items-center border-2 border-gray-200 rounded-md">
                  <h1 className="mx-auto" key={path}>
                    {location.pathname === path ? "-" : ""} {label}{" "}
                    {location.pathname === path ? "-" : ""}
                  </h1>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
