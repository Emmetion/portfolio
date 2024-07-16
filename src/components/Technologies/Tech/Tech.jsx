import classNames from "classnames";
import React from "react";

export default function Tech({ name, svgcolor, bgcolor, bordercolor, svg }) {
  return (
    <div
      className={`flex flex-row items-center justify-center w-fit border-2 text-white rounded-md shadow-md  ${bordercolor} ${bgcolor}`}
    >
      <img
        src={svg}
        className={classNames("w-10 h-10 bg-white rounded-md m-1 p-1 mr-2")}
      />
      <h1 className="text-lg font-semibold my-auto mr-3">{name}</h1>
    </div>
  );
}
