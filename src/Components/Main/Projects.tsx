import Panel from "../../Reuseable UI/Panel";
import { projects } from "../../Context/Info";

const Projects = () => {
  return (
    <>
      <div className="mx-10 mt-16 mb-32 min-h-[30rem] flex flex-col justify-center items-center ">
        <div className="md:w-9/12">
          <div>
            <h1 className="text-3xl font-bold">Projects</h1>
          </div>
          {projects.map((element) => {
            return (
              <div key={element.name}>
                <Panel
                  tech={element.techStack}
                  linkImg={element.urlImg}
                  linkGit={element.urlGit}
                  link={element.urlHomepage}
                  name={element.name}
                  description={element.description}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
