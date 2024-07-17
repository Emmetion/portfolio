import React from "react";
import Tech from "../../Technologies/Tech/Tech";

import GolangIcon from "../../../assets/tech_svgs/golang.svg";
import GCPIcon from "../../../assets/tech_svgs/google-cloud-1.svg";
import PostgresSQL from "../../../assets/tech_svgs/PostgresSQL.svg";

export default function Project() {
  return (
    <div className="w-fit h-[200px] border-4 rounded-lg border-gray-400">
      <div className="flex flex-row gap-2 mt-2 mr-2">
        <div className="flex flex-col">
          <p className="text-3xl text-left ml-2 mt-2 min-w-56">Project Name</p>
          <p className="text-xs text-left ml-2 italic">2 Months Ago</p>
        </div>
        <div className="flex flex-row gap-2 h-min my-auto">
          <Tech svg={GolangIcon} />
          <Tech svg={GCPIcon} />
          <Tech svg={PostgresSQL} />
        </div>
      </div>
      <div>
        {/* Description */}
        <p className="ml-2 text-left text-lg">This is a description</p>
      </div>
    </div>
  );
}
