import { ReactNode } from "react";
import Button from "./Button";
import TagIcon from "./tagIcon";

type prop = {
  description: string;
  name: string;
  linkGit: string;
  link: string;
  linkImg: string;
  tech: string[];
};

function PanelProject({ ...rest }: prop) {
  const techUsed = rest.tech.map((element) => {
    return (
      <div>
        <TagIcon className="rounded">{element}</TagIcon>
      </div>
    );
  });
  return (
    <div className="grid sm:flex grid-col md:grid-cols-2 items-center gap-5 md:gap-10 p-10 rounded-lg h-fit mb-1">
      <div className="mx-auto border-red-100 align-middle">
        <div className="text-2xl sm:text-3xl font-semibold my-1">
          {rest.name}
        </div>
        <div className="my-3">{rest.description}</div>
        <div className="flex flex-wrap gap-2 my-1">{techUsed}</div>
        <div className="flex gap-2">
          <Button secondary className="my-1">
            <a href={rest.linkGit}>Code</a>
          </Button>
          <Button secondary className="my-1">
            <a href={rest.link}>HomePage</a>
          </Button>
        </div>
      </div>
      <div className="mx-auto min-w-[33%] row-start-1">
        <img className="rounded-xl" src={rest.linkImg} alt="cromulon" />
      </div>
    </div>
  );
}

export default PanelProject;
