import React from "react";
import Tech from "../../Technologies/Tech/Tech";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

function Platform({ url, svg, name }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    if (!isYoutube) {
      window.open(url, "_blank");
    }
    setOpen(!open);
  };
  const isYoutube = url.includes("youtube");

  return (
    <div className="my-auto">
      {isYoutube ? (
        <Dialog size='md' open={open} handler={handleOpen}>
          <DialogBody>
            <iframe allowFullScreen={true} className="w-full h-[400px]" src={url} ></iframe>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Close</span>
            </Button>
          </DialogFooter>
        </Dialog>
      ) : null}
      <button className="h-12 w-12" onClick={handleOpen}>
        <a tabIndex={-1}>
          <img src={svg} alt={name} className="rounded-2xl bg-white" />
        </a>
      </button>
    </div>
  );
}

export default function Project({
  name,
  age,
  type,
  description,
  platforms = [],
  techs = [],
}) {
  return (
    <div className="w-fit h-fit border-4 rounded-lg border-gray-400 bg-white portfolio-font ">
      <div className="flex flex-col gap-2 mr-1">
        <div className="flex flex-row">
          <div>
            <p className="md:text-4xl text-3xl text-left ml-2 mt-2">{name}</p>
            <p className="text-sm md:text-md text-left ml-2 italic">
              {age} // {type}
            </p>
          </div>
          <div className="flex flex-row gap-2 mr-2 ml-auto">
            {Object.values(platforms).map((val, index) => {
              return (
                <Platform
                  key={index}
                  url={val.url}
                  svg={val.svg}
                  name={val.name}
                />
              );
            })}
          </div>
        </div>

        <div className="flex flex-row gap-2 h-min my-auto mr-auto flex-wrap ml-2">
          {Object.values(techs).map((val, index) => {
            return <Tech id={index} svg={val} />;
          })}
        </div>

        <div className="w-[300px] md:w-[600px] sm:w-[500px] text-start mt-auto">
          {/* Description */}
          <p className="mx-2 text-left text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
}
