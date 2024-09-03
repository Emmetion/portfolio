import React from "react";

export default function Background({}) {
  return (
    <div>
      <div className="size-52 rounded-full bg-gray-300 left-1/2 top-1/2 absolute -translate-x-1/2 -translate-y-1/4 filter transparent mix-blend-multiply"></div>
      <div className="size-52 rounded-full bg-gray-300 left-1/2 top-1/2 absolute -translate-x-3/4 -translate-y-3/4 filter transparent mix-blend-multiply"></div>
      <div className="size-52 rounded-full bg-gray-400 left-1/2 top-1/2 absolute -translate-x-1/4 -translate-y-3/4 filter transparent mix-blend-multiply"></div>
    </div>
  );
}
