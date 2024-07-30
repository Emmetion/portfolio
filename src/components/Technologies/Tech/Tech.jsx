import React from "react";

export default function Tech({ name, svg, title, className }) {
  return (
    <div
      className={`flex flex-row items-center justify-center w-fit border-2 rounded-md shadow-md text-black border-black bg-white portfolio-font ${className}`}
    >
      <img
        src={svg}
        title={title}
        alt={title}
        className={"w-10 h-10 bg-white rounded-md m-1 p-1 "}
      />
      {name !== undefined ? (
        <a className="ml-1 text-lg font-semibold my-auto mr-3">{name}</a>
      ) : null}
    </div>
  );
}
