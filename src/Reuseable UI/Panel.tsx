import { Projects_Details } from "../Context/Info";
import Button from "./Button";
import TagIcon from "./tagIcon";

function Panel({ techStack, urlGit, urlHomepage, urlImg, description, name, wip}: Projects_Details) {
  const techUsed = techStack.map((element, index) => {
    return (
      <div key={element}>
        <TagIcon className="rounded">{element}</TagIcon>
      </div>
    );
  });

  return (
    <>
      <div className="grid place-items-center md:flex grid-col lg:grid-cols-2 items-center gap-5 lg:gap-10 md:p-10 rounded-lg h-fit my-10">
        <div className="mx-auto align-middle max-w-[23rem]">
          <div className="flex items-baseline gap-x-4">
            <h3 className="text-2xl md:text-3xl font-semibold my-1">{name}</h3>
            {wip && <p className="text-xs underline">App Is Work In Progress</p>}
          </div>
          
          <div className="my-3">{description}</div>
          <div className="flex flex-wrap gap-2 my-1">{techUsed}</div>
          <div className="flex gap-2">
            <Button secondary className="my-1">
              <a href={urlGit} target="_blank" rel="noreferrer">
                Repository
              </a>
            </Button>
            {urlHomepage && <Button secondary className="my-1">
              <a href={urlHomepage} target="_blank" rel="noreferrer">
                HomePage
              </a>
            </Button>}
          </div>
        </div>

        <div className="mx-auto max-w-[16.5rem]  row-start-1">
          <img
            className="rounded-xl shadow-2xl duration-700 ease-out hover:scale-105"
            src={urlImg}
            alt="cromulon"
          />
        </div>
      </div>
    </>
  );
}

export default Panel;
