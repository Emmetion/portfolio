import React from "react";
import Tech from "../../Technologies/Tech/Tech";

import GolangIcon from "../../../assets/tech_svgs/golang.svg";
import GCPIcon from "../../../assets/tech_svgs/google-cloud-1.svg";
import PostgresSQL from "../../../assets/tech_svgs/PostgresSQL.svg";

export default function Project() {
  return (
    <div className="w-fit h-[200px] border-4 rounded-lg border-orange-400">
      <div className="flex flex-row gap-2">
        <p className="text-3xl text-left ml-2 mt-2">RapidTransfer</p>
        <div className="flex flex-row">
          <Tech svg={GolangIcon} />
          <Tech svg={GCPIcon} />
          <Tech svg={PostgresSQL} />

        </div>
      </div>
    </div>
  );
}
