import React from "react";
import Tech from "../../Technologies/Tech/Tech";

export default function Project({ name, age, type, description, techs }) {
  return (
    <div className="w-fit h-fit border-4 rounded-lg border-gray-400">
      <div className="flex flex-row gap-2 mr-1">
        <div className="flex flex-col">
          <p className="text-3xl text-left ml-2 mt-2">{name}</p>
          <p className="text-xs text-left ml-2 italic">
            {age} <a className="">//</a> {type}
          </p>
        </div>
        <div className="flex flex-row gap-2 h-min my-auto ml-auto flex-wrap">
          {Object.values(techs).map((val, index) => {
            return <Tech id={index} svg={val} />;
          })}
        </div>

        <div className="mt-1 row-span-full">
          {/* Description */}
          <p className="mx-2 text-left text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
}
