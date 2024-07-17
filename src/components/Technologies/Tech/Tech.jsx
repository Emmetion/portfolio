import classNames from "classnames";
import React from "react";

export default function Tech({ name, svg }) {
  return (
    <div
      className={`flex flex-row items-center justify-center w-fit border-2 rounded-md shadow-md text-black border-black bg-white`}
    >
      <img src={svg} className={"w-10 h-10 bg-white rounded-md m-1 p-1 "} />
      {name !== undefined ? (
        <h1 className="ml-2 text-lg font-semibold my-auto mr-3">{name}</h1>
      ) : null}
    </div>
  );
}
